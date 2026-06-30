import { NextRequest, NextResponse } from "next/server";
import axios from "gorth-base-structure/cores/axios";
import {
  routes,
} from "@/lib/environment";
import { caller } from "@/lib/caller";

const ssoExchangeUrl = (() => {
  const directUrl = routes.login;
  try {
    return `${new URL(directUrl).origin}/auth/exchange`;
  } catch {
    return null;
  }
})();

export const runtime = "nodejs";

const appSsoTokenCookie = "sb-access-auth-token";
const appSsoRefreshTokenCookie = "sb-refresh-auth-token";

function resolveInternalPath(value) {
  return value?.startsWith("/") && !value.startsWith("//") ? value : "/";
}

function getSsoUser(payload) {
  const data = payload;

  if (!data.user || typeof data.user.id !== "string" || typeof data.user.email !== "string") {
    return null;
  }

  return data.user;
}

export async function GET(request) {
  const accessToken =
    request.nextUrl.searchParams.get("token") ??
    request.nextUrl.searchParams.get("access_token") ??
    request.nextUrl.searchParams.get("sso_token");
  const refreshToken = request.nextUrl.searchParams.get("refresh_token");
  const next = resolveInternalPath(request.nextUrl.searchParams.get("next"));

  if (!accessToken && !refreshToken) {
    return NextResponse.json({ error: "missing_token" }, { status: 400 });
  }

  if (!ssoExchangeUrl) {
    return NextResponse.json({ error: "missing_sso_url" }, { status: 500 });
  }

  let ssoPayload;

  try {
    ssoPayload = await caller<SsoExchangeResponse>({
      url: ssoExchangeUrl,
      method: "POST",
      headers: {
        ...(accessToken ? { "Authorization": `Bearer ${accessToken}` } : {}),
        "Content-Type": "application/json",
      },
      data: {
        access_token: accessToken,
        refresh_token: refreshToken,
      },
      toast: false,
    });
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return NextResponse.json({ error: "invalid_sso_token" }, { status: 401 });
    }

    return NextResponse.json({ error: "sso_unreachable" }, { status: 502 });
  }

  const user = getSsoUser(ssoPayload);
  const nextAccessToken =
    typeof ssoPayload.access_token === "string" ? ssoPayload.access_token : accessToken;
  const nextRefreshToken =
    typeof ssoPayload.refresh_token === "string" ? ssoPayload.refresh_token : refreshToken;

  if (!user || !nextAccessToken) {
    return NextResponse.json({ error: "invalid_sso_response" }, { status: 502 });
  }

  const response = NextResponse.redirect(new URL(next, request.url));
  response.cookies.set(appSsoTokenCookie, nextAccessToken, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });
  if (nextRefreshToken) {
    response.cookies.set(appSsoRefreshTokenCookie, nextRefreshToken, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
    });
  }

  return response;
}