import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#06080b",
        surface: "#0b1117",
        panel: "#111922",
        line: "#202b38",
        text: "#f4f6f8",
        textMuted: "#97a2b2",
        accent: {
          DEFAULT: "#09bfd1",
          soft: "#0b2b31"
        }
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(9, 191, 209, 0.22), 0 14px 48px -24px rgba(9, 191, 209, 0.4)",
        metal: "0 18px 50px -30px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
        panel: "0 28px 60px -36px rgba(0, 0, 0, 0.95)"
      },
      borderRadius: {
        xl2: "1.25rem"
      },
      backgroundImage: {
        "grain-light": "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.06), transparent 45%), radial-gradient(circle at 80% 10%, rgba(9, 191, 209, 0.12), transparent 35%), linear-gradient(130deg, rgba(18, 24, 33, 0.92), rgba(8, 11, 15, 0.95))"
      }
    }
  },
  plugins: []
};

export default config;
