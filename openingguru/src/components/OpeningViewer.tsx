'use client';
import { useState, useMemo } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';

interface Line {
  name: string;
  moves: string[]; // SAN list
}

interface Props {
  lines: Line[];
}

export default function OpeningViewer({ lines }: Props) {
  const [lineIndex, setLineIndex] = useState(0);
  const [moveIndex, setMoveIndex] = useState(0);

  const current = lines[lineIndex];

  // Compute FEN for current moveIndex of selected line
  const fen = useMemo(() => {
    const game = new Chess();
    for (let i = 0; i < moveIndex; i++) {
      game.move(current.moves[i]);
    }
    return game.fen();
  }, [current, moveIndex]);

  function next() {
    setMoveIndex((i) => Math.min(i + 1, current.moves.length));
  }
  function prev() {
    setMoveIndex((i) => Math.max(i - 1, 0));
  }
  function selectLine(idx: number) {
    setLineIndex(idx);
    setMoveIndex(0);
  }

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Board & navigation */}
      <div className="flex flex-col items-center gap-4">
        <Chessboard position={fen} arePiecesDraggable={false} boardWidth={400} />
        <div className="flex gap-4">
          <button onClick={prev} disabled={moveIndex === 0} className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50">◀︎ Back</button>
          <button onClick={next} disabled={moveIndex === current.moves.length} className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50">Next ▶︎</button>
        </div>
        <p className="text-sm text-gray-600">
          {moveIndex === 0 ? 'Start position' : `${Math.ceil(moveIndex / 2)}. ${current.moves[moveIndex - 1]}`}
        </p>
      </div>

      {/* Line selector */}
      <aside className="flex flex-col gap-2 w-56">
        {lines.map((l, idx) => (
          <button
            key={l.name}
            onClick={() => selectLine(idx)}
            className={`text-left px-3 py-2 rounded border ${idx === lineIndex ? 'bg-blue-600 text-white' : 'bg-white hover:bg-blue-50'}`}
          >
            {l.name}
          </button>
        ))}
      </aside>
    </div>
  );
}