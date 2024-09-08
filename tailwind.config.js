/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app.vue',
    './src/components/**/*.{vue,js,ts}',
    './src/layouts/**/*.vue',
    './src/pages/**/*.vue',
    './src/composables/**/*.{js,ts}',
    './src/plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        tertiary: 'var(--text-tertiary)',
      },
      fontSize: {
        xl: 'var(--text-xl)',
        lg: 'var(--text-lg)',
        md: 'var(--text-md)',
        sm: 'var(--text-sm)',
      },
    },
  },
  plugins: [],
}
