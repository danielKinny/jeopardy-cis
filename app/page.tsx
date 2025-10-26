import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-center py-24 px-6 bg-white dark:bg-black">
        <h1 className="mb-8 text-center text-4xl font-extrabold text-zinc-900 dark:text-zinc-50">
          Jeopardy — School Years
        </h1>


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

        <section className="mt-8 w-full text-center max-w-xl rounded-md border border-zinc-100 bg-zinc-50 p-6 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
          <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50">How to play</h2>
          <ul className="list-inside list-disc space-y-2">
            <li>
              The board shows categories and clues with dollar values. Click any clue to reveal the clue (the "answer").
            </li>
            <li>
              Players must respond in the form of a question (for example: "What is 7.4?").
            </li>
            <li>
              If a response is correct, the player's score increases by the clue's value; if incorrect, the question is passed onto the other team.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
