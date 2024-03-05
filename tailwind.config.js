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
                    dark: "#DB3737",
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
                    dark: "#1F2937",
                },
                default: {
                    DEFAULT: "#6B7280",
                    foreground: "#ffffff",
                    hover: "#9CA3AF",
                    dark: "#4B5563",
                },
                dark: {
                    DEFAULT: "#1F2937",
                    foreground: "#ffffff",
                    hover: "#3E4C59",
                    dark: "#111827",
                },
                light: {
                    DEFAULT: "#E5E7EB",
                    foreground: "#1F2937",
                    hover: "#F1F5F9",
                    dark: "#D1D5DB",
                },
                success: {
                    DEFAULT: "#10B981",
                    foreground: "#ffffff",
                    hover: "#34D399",
                    dark: "#047857",
                },
                danger: {
                    DEFAULT: "#EF4444",
                    foreground: "#ffffff",
                    hover: "#F87171",
                    dark: "#991B1B",
                },
                warning: {
                    DEFAULT: "#F59E0B",
                    foreground: "#ffffff",
                    hover: "#FBBF24",
                    dark: "#D97706",
                },
                info: {
                    DEFAULT: "#3B82F6",
                    foreground: "#ffffff",
                    hover: "#60A5FA",
                    dark: "#2563EB",
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
