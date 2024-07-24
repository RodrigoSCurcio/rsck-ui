/** @type {import('tailwindcss').Config} */
export default {
  content: ["./lib/**/*{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "op-dark-coral": "#c8472c",
        "op-dark-chocolate": "#412a1e",
        "op-lemon-yellow": "#f8de3c",
        "op-white": "#fefefe",
        "op-sky-blue": "#58acf4",
        "op-royal-blue": "#105edd",
        "op-navy-blue": "#0b3075",
      },
      boxShadow: {
        top: "0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
