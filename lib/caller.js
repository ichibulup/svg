import axios from "gorth-base-structure/cores/axios"
import { toast } from "gorth-base-primitive/cores/sonner"

const callerInstance = axios.create({
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})

async function getToast() {
  if (typeof window === "undefined") {
    return null
  }

  return toast
}

function resolveToastMessage(toast, type, fallback) {
  if (!toast) {
    return null
  }

  if (toast === true) {
    return fallback ?? null
  }

  return toast[type] ?? fallback ?? null
}

function getErrorMessage(error) {
  if (axios.isAxiosError(error)) {
    const responseData = error.response?.data

    if (
      responseData &&
      typeof responseData === "object" &&
      "error" in responseData &&
      typeof responseData.error === "string"
    ) {
      return responseData.error
    }

    return error.message
  }

  return error instanceof Error ? error.message : "Request failed"
}

async function notify(toast, type, message) {
  if (!message || !toast) {
    return
  }

  const toastApi = await getToast()
  toastApi?.[type](message)
}

async function startLoadingToast(toast) {
  const message = resolveToastMessage(toast, "loading")

  if (!message) {
    return null
  }

  const toastApi = await getToast()
  return toastApi?.loading(message) ?? null
}

async function dismissToast(id) {
  if (!id) {
    return
  }

  const toastApi = await getToast()
  toastApi?.dismiss(id)
}

export async function caller({
  url,
  method = "GET",
  data,
  params,
  headers,
  timeout,
  toast = false,
  withCredentials = true,
}) {
  const loadingToastId = await startLoadingToast(toast)

  try {
    const response = await callerInstance.request<TResponse>({
      url,
      method,
      data,
      params,
      headers,
      timeout,
      withCredentials,
    })

    await dismissToast(loadingToastId)
    await notify(toast, "success", resolveToastMessage(toast, "success"))

    return response.data
  } catch (error) {
    await dismissToast(loadingToastId)
    await notify(
      toast,
      "error",
      resolveToastMessage(toast, "error", getErrorMessage(error))
    )

    throw error
  }
}

function request(
  method,
  url,
  options
) {
  return caller<TResponse, TData>({
    ...options,
    url,
    method,
  })
}

export const api = {
  get(url, options) {
    return request<TResponse>("GET", url, options)
  },
  post(
    url,
    data,
    options
  ) {
    return request<TResponse, TData>("POST", url, { ...options, data })
  },
  put(
    url,
    data,
    options
  ) {
    return request<TResponse, TData>("PUT", url, { ...options, data })
  },
  patch(
    url,
    data,
    options
  ) {
    return request<TResponse, TData>("PATCH", url, { ...options, data })
  },
  delete(url, options) {
    return request<TResponse>("DELETE", url, options)
  },
}