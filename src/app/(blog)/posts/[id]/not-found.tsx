import Link from "next/link";
import { ArrowRight } from "react-feather";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 p-4 lg:p-24 w-full">
      <h1 className="font-bold">Nie znaleziono posta o podanym id</h1>
      <div className="group flex items-center gap-2 px-6 py-2 border rounded-xl">
        <Link href="/">Wróc do strony głównej</Link>{" "}
        <ArrowRight className="transition group-hover:translate-x-1 duration-300 delay-50 ease-in-out size-4" />
      </div>
    </div>
  );
}
