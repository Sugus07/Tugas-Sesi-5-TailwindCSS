/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html'],
  theme: {
    extend: {
      colors : {
        'sugus' :'#125960',
      },
      width : {
        '30%' : '30%',
        '25%' : '25%',
        '15%' : '15%',
        '20%' : '20%',
        '80%' : '80%',
        '10' : '10%',
        '90%' : '90%'
      }
    },
  },
  plugins: [],
}
