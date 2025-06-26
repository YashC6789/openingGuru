import OpeningViewer from '@/components/OpeningViewer';

const lines = [
  {
    name: 'Main Line (Morphy Defence)',
    moves: [
      'e4', 'e5',
      'Nf3', 'Nc6',
      'Bb5', 'a6',
      'Ba4', 'Nf6',
      'O-O', 'Be7',
    ],
  },
  {
    name: 'Berlin Defence',
    moves: [
      'e4', 'e5',
      'Nf3', 'Nc6',
      'Bb5', 'Nf6',
      'O-O', 'Nxe4',
    ],
  },
  {
    name: 'Exchange Variation',
    moves: [
      'e4', 'e5',
      'Nf3', 'Nc6',
      'Bb5', 'a6',
      'Bxc6', 'dxc6',
    ],
  },
];

export default function RuyLopezPage() {
  return (
    <main className="p-8 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Ruy Lopez (Spanish Game)</h1>
      <OpeningViewer lines={lines} />
    </main>
  );
}