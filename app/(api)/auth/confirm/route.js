// app/(main)/auth/approve/route.ts
import { NextResponse } from 'next/server'

export async function GET(request) {
  return NextResponse.json({ message: 'Approved successfully de Japtor' })
}

export async function POST(request) {
  return NextResponse.json({ success: true })
}