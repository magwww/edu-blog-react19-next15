"use client";

import { useRouter } from "next/navigation";
import { startTransition, useEffect } from "react";
// import * as Sentry from "@sentry/nextjs";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  useEffect(() => {
    // Log the error to an error reporting service
    // Sentry.captureException(error);
    console.error("Error in post/id:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center gap-6 lg:px-24 lg:py-16 p-4">
      <h1>Nie udało się załadować posta 😢</h1>
      <button
        className="px-6 py-2 border hover:border-black rounded-xl"
        onClick={() => reload()}
      >
        Spróbuj ponownie
      </button>
    </div>
  );
}
