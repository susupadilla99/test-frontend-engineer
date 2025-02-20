import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content:[
    flowbite.content(),
  ],
  plugin: [
    flowbite.plugin(),
  ],
};

export default {
  content: [
    "./src/app/*",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
