import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { PropsWithChildren } from "react";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "Blog Edukacyjny",
    default: "Blog Edukacyjny - Wiedza, Inspiracja",
  },
  description:
    "Blog edukacyjny z artykułami o rozwoju osobistym, wiedzy i inspiracji",
  keywords: ["edukacja", "rozwój osobisty", "blog", "wiedza"],
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="pl">
      <body className={`${openSans.variable} antialiased`}>
        <Header />
        <main className="max-w-[1920px]">{children}</main>
      </body>
    </html>
  );
}
