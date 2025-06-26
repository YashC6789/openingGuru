import { NextResponse } from 'next/server';
import { setSessionCookie } from '@/lib/auth';

export async function POST(req: Request) {
  const { email = 'demo' } = await req.json();
  const res = NextResponse.json({ ok: true });
  // here you might hash & verify password – skipped for prototype
  setSessionCookie(res, email);
  return res;
}