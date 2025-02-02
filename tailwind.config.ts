import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  safelist: [
    "bg-[#444E8D]",
    "bg-[#FFBF42]",
    "bg-[#D94F4F]",
    "bg-[#82E49A]",
    "text-[#444E8D]",
    "text-[#FFBF42]",
    "text-[#D94F4F]",
    "text-[#82E49A]",
  ],
  plugins: [],
} satisfies Config;
