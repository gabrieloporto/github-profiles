/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fill-300": "repeat(auto-fill, minmax(300px, 1fr))",
      },
      fontFamily: {
        arial: "Arial, Helvetica, sans-serif",
      },
      boxShadow: {
        stock: "0 0 5px #a9e2f7",
        repo: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        'input[type="search"]::-webkit-search-cancel-button': {
          display: "none",
          WebkitAppearance: "none",
        },
      });
    },
  ],
};
