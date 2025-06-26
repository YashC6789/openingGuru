import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import LoginForm from '@/components/LoginForm';

// `cookies()` now returns a Promise in Next.js 14.2+.
export default async function LoginPage() {
  const cookieStore = await cookies();

  // already logged in? skip the form
  if (cookieStore.get('session')) {
    redirect('/dashboard');
  }

  return (
    <main className="flex min-h-screen items-center justify-center">
      <LoginForm />
    </main>
  );
}