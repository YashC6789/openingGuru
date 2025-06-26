import type { NextResponse } from 'next/server';
import { serialize } from 'cookie';

const ONE_DAY = 60 * 60 * 24;

export function setSessionCookie(res: NextResponse, user: string) {
  res.headers.append(
    'Set-Cookie',
    serialize('session', user, {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      maxAge: ONE_DAY,
      path: '/',
    }),
  );
}

export function clearSessionCookie(res: NextResponse) {
  res.headers.append(
    'Set-Cookie',
    serialize('session', '', { path: '/', maxAge: 0 }),
  );
}