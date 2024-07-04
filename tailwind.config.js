/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        cores: {
          azul: "#071952",
          azul_medio: "#088395",
          azul_fraco: "#37B7C3",
          branco: "#EBF4F6"
        }
      }
    },
  },
  plugins: [],
}

