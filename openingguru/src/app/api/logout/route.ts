import { NextResponse } from 'next/server';
import { clearSessionCookie } from '@/lib/auth';

export async function GET() {
  const res = NextResponse.json({ ok: true });   // 200
  clearSessionCookie(res);                       // delete cookie
  return res;                                    // ← no redirect!
}