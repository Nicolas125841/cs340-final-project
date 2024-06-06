/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.hbs","./views/partials/*.hbs","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}

