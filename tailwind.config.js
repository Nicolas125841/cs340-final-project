/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/partials/*.hbs","./views/*.hbs","./public/javascripts/*.js","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}

