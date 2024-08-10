/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./app/**/*.{js,jsx}", "./src/**/*.{js,jsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-dm_sans)"],
        header: ["var(--font-montserrat)"],
      },
      screens: {
        xs: "1px",
        sm: "640px",
        md: "1024px",
        lg: "1360px",
        xl: "1900px",
        "2xl": "2560px",
        "3xl": "3840px",
      },
      colors: {
        primary: {
          50: "#f2f0ff",
          100: "#e8e4ff",
          200: "#d4ccff",
          300: "#b5a4ff",
          400: "#9270ff",
          500: "#7137ff",
          600: "#630fff",
          700: "#5500ff",
          800: "#4600da",
          900: "#3d00b7",
          950: "#21007a",
        },
        secondary: {
          50: "#f2f5ff",
          100: "#e7eaff",
          200: "#d3dbff",
          300: "#afb9ff",
          400: "#828dff",
          500: "#5058ff",
          600: "#2f2cfb",
          700: "#221ae7",
          800: "#1b15c2",
          900: "#19139f",
          950: "#08085e",
          980: "#020252",
        },
        ternary: {
          50: "#f2f3f5",
          100: "#f7f9fb",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#565656",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#000000",
        },
      },
      animation: {
        fade: "fadeOut .4s ease-in-out",
      },
      keyframes: (theme) => ({
        fadeOut: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      }),
    },
  },
  plugins: [require("tailwindcss-animate")],
};
