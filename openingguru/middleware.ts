import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // 1. allow public routes & static files
  if (pathname.startsWith('/login') || pathname.startsWith('/_next') || pathname.match(/\.(ico|png|jpg|css|js)$/)) {
    return NextResponse.next();
  }

  // 2. redirect if cookie missing
  const hasSession = !!req.cookies.get('session');
  if (!hasSession) {
    const loginUrl = new URL('/login', req.url);
    return NextResponse.redirect(loginUrl);
  }

  // 3. fallthrough → page/api
  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api/health).*)',  // skip health‑check if you have one
};