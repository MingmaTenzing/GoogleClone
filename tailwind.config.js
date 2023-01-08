/** @type {import('tailwindcss').Config} */
module.exports = {
 
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-blue-500',
    'text-center',
    'hover:opacity-100',
    // ...
    'lg:text-right',
  ],
  theme: {
    extend: {},
  },
  plugins: [ require('@tailwindcss/line-clamp'),],
};
