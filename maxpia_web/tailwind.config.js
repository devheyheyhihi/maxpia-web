/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "localhost-montserrat-bold-upper":
          "var(--localhost-montserrat-bold-upper-font-family)",
        "localhost-montserrat-medium":
          "var(--localhost-montserrat-medium-font-family)",
        "localhost-semantic-button":
          "var(--localhost-semantic-button-font-family)",
        "localhost-semantic-link": "var(--localhost-semantic-link-font-family)",
        "text-111": "var(--text-111-font-family)",
      },
    },
  },
  plugins: [],
};