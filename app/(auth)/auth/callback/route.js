import { NextRequest, NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const data = searchParams.get('data')

  return NextResponse.json({ data });
}