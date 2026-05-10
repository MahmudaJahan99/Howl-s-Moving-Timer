/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          '"Poppins"',
          '"Roboto"',
          '"Helvetica Neue"',
          "sans-serif",
        ],
        serif: ['"DM Serif Display"', "Georgia", "serif"],
        mono: ['"JetBrains Mono"', '"Fira Code"', "monospace"],
      },

      boxShadow: {
        sm: "0 1px 2px rgba(44, 36, 32, 0.1)",
        md: "0 4px 6px rgba(44, 36, 32, 0.2)",
        lg: "0 10px 15px rgba(44, 36, 32, 0.2)",
        xl: "0 20px 25px rgba(44, 36, 32, 0.2)",
        "2xl": "0 25px 50px rgba(44, 36, 32, 0.2)",
        inner: "inset 0 2px 4px rgba(44, 36, 32, 0.1)",
      },
      transitionDuration: {
        fast: "150ms",
        base: "250ms",
        slow: "350ms",
        slower: "500ms",
      },
      transitionTimingFunction: {
        "ease-smooth": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};
