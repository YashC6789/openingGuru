'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (res.ok) router.replace('/dashboard');
    else alert('Login failed');
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-8 border rounded-xl shadow-md bg-white">
      <h1 className="text-xl font-semibold">Demo Login</h1>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email (anything)"
        className="border px-3 py-2 rounded w-64"
      />
      <button type="submit" className="w-full py-2 rounded bg-blue-600 text-white">Enter</button>
    </form>
  );
}