"use client";

import React, { useState } from "react";
import Link from "next/link";
import { YearData, Clue, Category } from "../../data/years";

function ClueModal({ clue, onClose, onReveal, revealedAnswer }: { clue: Clue | null; onClose: () => void; onReveal: () => void; revealedAnswer: string | null; }) {
  if (!clue) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
    >
      <div className="w-full max-w-2xl transform overflow-hidden rounded-lg bg-white shadow-xl transition-all dark:bg-zinc-900">
        <div className="flex items-start justify-between border-b px-6 py-4 dark:border-zinc-800">
          <div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">{clue.value} — Clue</h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Clue</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="ml-4 cursor-pointer inline-flex h-8 w-8 items-center justify-center rounded bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300"
          >
            ✕
          </button>
        </div>

        <div className="p-6">
          {clue.image && (
            <div className="mb-4 flex items-center justify-center">
              <img src={clue.image} alt="Clue" className="max-h-64 w-full object-contain" />
            </div>
          )}

          <p className="mb-6 text-lg leading-relaxed text-zinc-800 dark:text-zinc-200">{clue.question}</p>

          {revealedAnswer ? (
            <div className="rounded-lg bg-amber-100 p-4 text-center text-xl font-extrabold text-amber-800 dark:bg-amber-900 dark:text-amber-200">
              {revealedAnswer}
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <button
                onClick={onReveal}
                className="cursor-pointer inline-flex items-center gap-2 rounded bg-amber-500 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-600"
              >
                Reveal Answer
              </button>
              <button onClick={onClose} className="cursor-pointer rounded border px-4 py-2 text-sm">
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function BoardClient({ yearNum, yearData }: { yearNum: number; yearData: YearData }) {
  const [selected, setSelected] = useState<Clue | null>(null);
  const [revealedAnswer, setRevealedAnswer] = useState<string | null>(null);
  const [used, setUsed] = useState<Record<string, boolean>>({});

  const maxCols = 6;
  const colCount = Math.max(1, Math.min(yearData.categories.length, maxCols));

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
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">Year {yearNum} — Jeopardy</h1>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Play through the clues for this year. Click a value to view the clue and reveal the answer.</p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="rounded-md border px-4 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800">Back</Link>
          </div>
        </div>

        <div
          className="grid w-full gap-4"
          style={{ gridTemplateColumns: `repeat(${colCount}, minmax(0, 1fr))` }}
        >
          {yearData.categories.map((cat: Category, ci: number) => (
            <section
              key={ci}
              aria-labelledby={`cat-${ci}`}
              className="overflow-hidden rounded-lg"
            >
              <div className="rounded-t-lg bg-blue-700 px-3 py-3 text-center text-white dark:bg-blue-600">
                <h2 id={`cat-${ci}`} className="text-sm font-semibold">{cat.title}</h2>
              </div>
              <div className="grid gap-3 bg-white p-3 dark:bg-zinc-900">
                {cat.clues.map((clue: Clue, i: number) => {
                  const key = `${ci}-${i}`;
                  const isUsed = used[key];
                  return (
                    <button
                      key={i}
                      onClick={() => openClue(ci, i)}
                      disabled={isUsed}
                      className={`cursor-pointer flex h-20 w-full items-center justify-center rounded-md text-2xl font-extrabold shadow-sm transition-colors ${isUsed ? "bg-zinc-200 text-zinc-400 dark:bg-zinc-800 dark:text-zinc-600" : "bg-amber-50 text-amber-800 hover:bg-amber-100"}`}
                    >
                      {clue.value}
                    </button>
                  );
                })}
              </div>
            </section>
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
