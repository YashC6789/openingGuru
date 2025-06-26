import OpeningCard from '@/components/OpeningCard';
import { BookOpen } from 'lucide-react';

export default function OpeningsHome() {
  return (
    <main className="p-8 space-y-8">
      <h1 className="text-2xl font-bold mb-4">Select an Opening</h1>
      <section className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-3xl">
        <OpeningCard href="/openings/ruy-lopez" icon={BookOpen} label="Ruy Lopez" />
        {/* Add more OpeningCard rows here as you implement */}
      </section>
    </main>
  );
}