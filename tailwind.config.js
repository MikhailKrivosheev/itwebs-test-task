// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      mono: ['', ...defaultTheme.fontFamily.mono],
    },
    fontSize: {
      12: '12px',
      13: '13px',
      14: '14px',
      15: '15px',
      16: '16px',
      18: '18px',
      20: '20px',
      22: '22px',
      24: '24px',
      28: '28px',
      32: '32px',
      36: '36px',
      40: '40px',
      44: '44px',
      46: '46px',
      48: '48px',
      52: '52px',
      56: '56px',
      64: '64px',
      80: '80px',
    },
    lineHeight: {
      ...defaultTheme.lineHeight,
      dense: '1.125',
    },
    letterSpacing: {
      tighter: '-0.04em',
      tight: '-0.02em',
      normal: '0',
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      white: colors.white,
      black: colors.black,
      red: colors.red,
      green: colors.green,
      primary: {
        1: '',
      },
      secondary: {
        1: '',
      },
      gray: {
        1: '',
        2: '#e5e7eb',
        20: '#333',
      },
      blue: {
        light: '#3093E8',
      },
    }),
    screens: {
      xl: { max: '1439px' },
      lg: { max: '1279px' },
      md: { max: '1023px' },
      sm: { max: '767px' },
      xs: { max: '639px' },
      '2xs': { max: '413px' },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [require('tailwindcss-safe-area')],
};
