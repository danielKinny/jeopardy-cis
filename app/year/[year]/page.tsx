"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getYear, YearData, Clue, Category } from "../../../data/years";

function ClueModal({ clue, onClose, onReveal, revealedAnswer }: { clue: Clue | null; onClose: () => void; onReveal: () => void; revealedAnswer: string | null; }) {
  if (!clue) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="max-w-lg rounded bg-white p-6 dark:bg-zinc-900">
        <h3 className="mb-4 text-xl font-bold text-zinc-900 dark:text-zinc-50">${clue.value} question...</h3>
        <p className="mb-4 text-zinc-700 dark:text-zinc-200">{clue.question}</p>
        {revealedAnswer && (
            <div className="my-2 text-xl text-center bg-white text-black font-extrabold rounded-lg mb-4">{revealedAnswer}</div>
        )}
        <div className="flex gap-2">
          <button
            onClick={() => {
              onReveal();
            }}
            className="rounded bg-blue-600 px-4 py-2 text-white cursor-pointer"
          >
            Reveal Answer
          </button>
          <button onClick={onClose} className="rounded border px-4 py-2 cursor-pointer">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default function YearPage() {
  const params = useParams() as { year?: string };
  const yearNum = Number(params?.year ?? 0);
  const yearData = getYear(yearNum) as YearData | null;

  const [selected, setSelected] = useState<Clue | null>(null);
  const [revealedAnswer, setRevealedAnswer] = useState<string | null>(null);
  const [used, setUsed] = useState<Record<string, boolean>>({});

  if (!yearData) {
    return (
      <div className="p-8">
        <p className="mb-4">Year not found.</p>
        <Link href="/">Back</Link>
      </div>
    );
  }

  function openClue(catIdx: number, clueIdx: number) {
    const clue = yearData!.categories[catIdx].clues[clueIdx];
    const key = `${catIdx}-${clueIdx}`;
    if (used[key]) return;
    setSelected(clue);
    setRevealedAnswer(null);
  }

  function closeClue() {
    setSelected(null);
    setRevealedAnswer(null);
  }

  function reveal() {
    if (!selected) return;
    setRevealedAnswer(selected.answer);
    const found = yearData!.categories
      .flatMap((c: Category, ci: number) =>
        c.clues.map((cl: Clue, i: number) => ({ cl, key: `${ci}-${i}`, ci, i }))
      )
      .find((x) => x.cl === selected);
    if (found) {
      setUsed((s) => ({ ...s, [found.key]: true }));
    }
  }

  return (
    <div className="min-h-screen bg-zinc-50 p-6 dark:bg-black">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Year {yearNum} Jeopardy</h1>
          <div className="flex items-center gap-4">
            <Link href="/" className="rounded border px-4 py-2">Back</Link>
          </div>
        </div>

        <div
          className="grid w-full gap-4"
          style={{ gridTemplateColumns: `repeat(${yearData.categories.length}, minmax(0, 1fr))` }}
        >
          {yearData.categories.map((cat: Category, ci: number) => (
            <div key={ci} className="rounded bg-blue-700 p-2 text-center text-white dark:bg-blue-600">
              <div className="mb-2 text-lg font-semibold">{cat.title}</div>
              <div className="flex flex-col gap-2">
                {cat.clues.map((clue: Clue, i: number) => {
                  const key = `${ci}-${i}`;
                  const isUsed = used[key];
                  return (
                    <button
                      key={i}
                      onClick={() => openClue(ci, i)}
                      disabled={isUsed}
                      className={`rounded cursor-pointer px-3 py-4 text-xl font-bold ${isUsed ? "opacity-40" : "bg-white text-blue-700"}`}
                    >
                      {clue.value}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {selected && (
          <ClueModal
            clue={selected}
            onClose={closeClue}
            onReveal={reveal}
            revealedAnswer={revealedAnswer}
          />
        )}
      </div>
    </div>
  );
}
