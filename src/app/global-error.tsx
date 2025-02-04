"use client";

import { useEffect } from "react";
// import * as Sentry from "@sentry/nextjs";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    // Sentry.captureException(error);
    console.error("Global error:", error);
  }, [error]);

  return (
    <html>
      <body>
        <h1>Coś poszło nie tak...</h1>
        <button
          className="px-6 py-2 border hover:border-black rounded-xl"
          onClick={() => reset()}
        >
          Spróbuj ponownie
        </button>
      </body>
    </html>
  );
}
