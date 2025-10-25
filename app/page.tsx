import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-center py-24 px-6 bg-white dark:bg-black">
        <h1 className="mb-8 text-center text-4xl font-extrabold text-zinc-900 dark:text-zinc-50">
          Jeopardy — School Years
        </h1>

        <p className="mb-6 max-w-2xl text-center text-lg text-zinc-600 dark:text-zinc-300">
          Choose a school year to play a 3-category Jeopardy board (questions up to $500).
        </p>

        <div className="grid w-full max-w-xl grid-cols-2 gap-4 sm:grid-cols-5">
          {[7, 8, 9, 10, 11].map((y) => (
            <Link
              key={y}
              href={`/year/${y}`}
              className="flex items-center text-md justify-center rounded-lg border border-zinc-200 bg-white px-4 py-6 text-center  font-semibold text-zinc-900 shadow-sm hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
            >
              Year {y}
            </Link>
          ))}
        </div>

        <p className="mt-8 text-sm text-zinc-500 dark:text-zinc-400">
          Each year contains 3 categories and five clues ($100–$500). Click a clue to reveal the question and then the answer.
        </p>
      </main>
    </div>
  );
}
