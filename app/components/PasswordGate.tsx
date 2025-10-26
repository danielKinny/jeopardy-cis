"use client";

import React, { useEffect, useState } from "react";

type Props = {
  year?: number | null;
  children: React.ReactNode;
};

export default function PasswordGate({ year, children }: Props) {
  const storageKey = `year_unlocked_${year ?? "global"}`;
  const PASSWORD = "jeopardy2025";

  const [unlocked, setUnlocked] = useState<boolean>(() => {
    try {
      const v = typeof window !== "undefined" ? sessionStorage.getItem(storageKey) : null;
      return v === "1";
    } catch {
      return false;
    }
  });

  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    function handler() {
      try {
        const v = sessionStorage.getItem(storageKey);
        setUnlocked(v === "1");
      } catch {
        // ignore hehehe
      }
    }
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, [storageKey]);

  function submit(e?: React.FormEvent) {
    e?.preventDefault();
    setError(null);
    if (value === PASSWORD) {
      try {
        sessionStorage.setItem(storageKey, "1");
      } catch {
        // booooring
      }
      setUnlocked(true);
    } else {
      setError("Incorrect password");
    }
  }

  if (unlocked) return <>{children}</>;

  return (
    <div className="min-h-screen bg-zinc-50 p-6 dark:bg-black">
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
        <form onSubmit={submit} className="mx-4 w-full max-w-md rounded bg-white p-6 dark:bg-zinc-900">
          <h2 className="mb-4 text-xl font-bold text-zinc-900 dark:text-zinc-50">Enter password to view this page</h2>
          <p className="mb-4 text-sm text-zinc-700 dark:text-zinc-300">This page is protected. Enter the password to continue.</p>
          <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">Password</label>
          <input
            type="password"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="mb-3 w-full rounded border px-3 py-2 text-white"
            autoFocus
          />
          {error && <div className="mb-3 text-sm text-red-600">{error}</div>}
          <div className="flex gap-2">
            <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white">Unlock</button>
            <button
              type="button"
              onClick={() => setValue("")}
              className="rounded border px-4 py-2"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
