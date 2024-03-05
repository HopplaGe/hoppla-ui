/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF6363",
          foreground: "#ffffff",
          hover: "#FF7D7D",
        },
        // primary: {
        //   DEFAULT: "#4F46E5",
        //   foreground: "#ffffff",
        //   hover: "#6B66E5",
        // },
        secondary: {
          DEFAULT: "#4B5563",
          foreground: "#ffffff",
          hover: "#6B7280",
        },
        default: {
          DEFAULT: "#6B7280",
          foreground: "#ffffff",
          hover: "#9CA3AF",
        },
        dark: {
          DEFAULT: "#1F2937",
          foreground: "#ffffff",
          hover: "#3E4C59",
        },
        light: {
          DEFAULT: "#E5E7EB",
          foreground: "#1F2937",
          hover: "#F1F5F9",
        },
        success: {
          DEFAULT: "#10B981",
          foreground: "#ffffff",
          hover: "#34D399",
        },
        danger: {
          DEFAULT: "#EF4444",
          foreground: "#ffffff",
          hover: "#F87171",
        },
        warning: {
          DEFAULT: "#F59E0B",
          foreground: "#ffffff",
          hover: "#FBBF24",
        },
        info: {
          DEFAULT: "#3B82F6",
          foreground: "#ffffff",
          hover: "#60A5FA",
        },
      },
      fontFamily: {
        FiraGO: [
          '"FiraGO", "sans-serif"',
          {
            fontFeatureSettings: '"case", "1"',
          },
        ],
      },
      borderWidth: {
        3: "3px",
      },
    },
  },
  plugins: [],
};
