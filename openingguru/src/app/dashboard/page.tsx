import Link from 'next/link';
import { BarChart2, BookOpen } from 'lucide-react';
import LogoutButton from '@/components/LogoutButton';

export default function Dashboard() {
  const options = [
    { href: '/dashboard/analysis', icon: BarChart2, label: 'Analysis' },
    { href: '/openings', icon: BookOpen, label: 'Openings' },
  ];

  return (
    <main className="p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <LogoutButton />
      </header>

      <section className="grid gap-6 sm:grid-cols-2 max-w-xl">
        {options.map(({ href, icon: Icon, label }) => (
          <Link
            key={href}
            href={href}
            className="flex flex-col items-center justify-center gap-4 rounded-2xl border shadow hover:shadow-lg transition p-8 bg-white"
          >
            <Icon size={48} strokeWidth={1.5} />
            <span className="text-lg font-medium">{label}</span>
          </Link>
        ))}
      </section>
    </main>
  );
}