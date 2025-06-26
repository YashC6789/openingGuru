import Link from 'next/link';
import { type LucideIcon } from 'lucide-react';

interface Props {
  href: string;
  icon: LucideIcon;
  label: string;
}

// Plain server component — no client-only hooks used.
export default function OpeningCard({ href, icon: Icon, label }: Props) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center justify-center gap-4 rounded-2xl border shadow hover:shadow-lg transition p-6 bg-white"
    >
      {/* Icon is a component, so we render it with JSX */}
      <Icon size={40} strokeWidth={1.5} />
      <span className="text-md font-medium">{label}</span>
    </Link>
  );
}