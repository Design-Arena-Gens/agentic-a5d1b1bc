import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Inter'", "system-ui", "sans-serif"]
      },
      colors: {
        "ecogic-green": "#009b4f",
        "ecogic-sand": "#f4f1e1",
        "ecogic-forest": "#004225",
        "ecogic-sunset": "#f99c46"
      },
      boxShadow: {
        glow: "0 0 60px rgba(0, 155, 79, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
