// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      12: '12px',
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
      72: '72px',
      80: '80px',
      96: '96px',
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
    boxShadow: {
      base: '0 2px 20px 0 rgba(0, 0, 0, 0.05)',
      big: '0 4px 40px 0 rgba(0, 0, 0, 0.15)',
      logo: '0 1px 5px 0 rgba(0, 0, 0, 0.1)',
      bento: '0 0 4px 0 rgba(0, 0, 0, 0.12)',
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: '#000000',
      white: '#FFFFFF',
      blue: '#0C79FE',
      'blue-light': '#3093E8',
      gray: {
        10: '#1A1A1A',
        20: '#333333',
        30: '#4D4D4D',
        40: '#666666',
        50: '#808080',
        60: '#999999',
        70: '#B3B3B3',
        80: '#CCCCCC',
        90: '#E6E6E6',
        94: '#F0F0F0',
        98: '#FAFAFA',
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
    extend: {
      spacing: {
        4.5: '1.125rem',
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [require('tailwindcss-safe-area')],
};
