"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global error:", error);
  }, [error]);

  return (
    <html>
      <body>
        <h2>Coś poszło nie tak...</h2>
        <button onClick={() => reset()}>Spróbuj ponownie</button>
      </body>
    </html>
  );
}
