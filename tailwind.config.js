/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(63deg, rgba(5, 4, 42, 0.88) 50.74%, rgba(3, 17, 64, 0.80) 79.43%, rgba(30, 180, 163, 0.74) 100%)',
      },
    },
    },
  plugins: [],
}

