/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs:"390",
        sm: "640px",

        md: "	768px",
        lg: "1024px",

        xl: "1363px",
        free:"1440px",
        xxl:"1536px",
        xlxl:"2550px",
      },
    },
  },
  plugins: [],
}
