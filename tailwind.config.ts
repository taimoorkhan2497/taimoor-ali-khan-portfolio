import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#090b0f",
          900: "#101318",
          850: "#171b21",
          800: "#1d222a",
        },
        signal: {
          cyan: "#22d3ee",
          emerald: "#34d399",
          amber: "#f59e0b",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(34, 211, 238, 0.12), 0 18px 80px rgba(0, 0, 0, 0.42)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["SFMono-Regular", "Consolas", "Liberation Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
