/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      // Configure your color palette here
      'ch-primary': {
        DEFAULT: '#004B96',
        1: '#004B96',
        2: '#2E3192',
      },
      'ch-secondary': {
        DEFAULT: '#3EC2D9',
        1: '#3EC2D9',
        2: '#9FD9DD',
      },
      'ch-indigo': "#2E3192",
      'ch-life-green': "#CCE195",
      'ch-red': "#FF555E",
      'ch-white': "#ffffff",
      'ch-black': "#000000",
      'ch-hope-blue': "#9FD9DD",
      'ch-neutrals': {
        DEFAULT: '#ECF7F8',
        1: '#ECF7F8',
        2: '#F2F2F2',
        3: '#F0F6DF',
        4: '#EAEAF4',
      }
    }
  },
  plugins: [],
}

