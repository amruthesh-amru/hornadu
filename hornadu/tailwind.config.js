/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-pink': '#fee9d6',
        'dark-pink': '#f9bf8f',
        'white': '#fff',
        'black': '#000',
        'light-black': '#212529',
      },
    },
  },
  plugins: [],
}

