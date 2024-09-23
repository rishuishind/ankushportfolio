/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        blob: "42% 56% 72% 28% / 42% 42% 56% 48%",
      },
      keyframes: {
        morph: {
          "0% 100%": {
            "border-radius": "42% 56% 72% 28% / 42% 42% 56% 48%",
          },
          "33%": {
            "border-radius": "72% 28% 48% 48% / 28% 28% 72% 72%",
          },
          "66%": {
            "border-radius": "100% 56% 56% 100% / 100% 100% 56% 56%",
          },
        },

        scroll: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-50.5%)",
          },
        },
      },
      animation: {
        morph: "morph 3.75s linear infinite",
        scroll: "scroll 27s linear infinite",
      },
    },
  },
  plugins: [],
};
