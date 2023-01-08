/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: ['./src/**/*.html'],
    safelist: [
      'bg-blue-500',
      'text-center',
      'hover:opacity-100',
      // ...
      'lg:text-right',
    ]
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [ require('@tailwindcss/line-clamp'),],
};
