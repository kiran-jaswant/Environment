/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-pattern': "url('./Images/footer1.jpg')",
      },
      opacity: {
        'custom': '10px',
      },
      boxShadow: {
        'custom': '0 10px 14px white', // Customize as needed
      },

    },
  },
  plugins: [],
}

