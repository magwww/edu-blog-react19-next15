import Link from "next/link";
import { ArrowRight } from "react-feather";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-6 lg:px-24 lg:py-16 p-4">
      <h1>Nie znaleziono podanego adresu</h1>
      <div className="group flex items-center gap-2 px-6 py-2 border rounded-xl">
        <Link href="/">Wróc do strony głównej</Link>{" "}
        <ArrowRight className="transition group-hover:translate-x-1 duration-300 delay-50 ease-in-out size-4" />
      </div>
    </div>
  );
}
