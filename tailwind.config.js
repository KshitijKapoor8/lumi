/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'wave': "url('/waveBackground.svg')",
      },
      gridTemplateColumns: {
        "tiles": "repeat(auto-fit, 400px)"
      },
    },
  },
  plugins: [],
}

