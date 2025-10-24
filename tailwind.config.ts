import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      //     colors: {
      //       primary: {
      //         50: 'var(--color-primary-50)',
      //         100: 'var(--color-primary-100)',
      //         200: 'var(--color-primary-200)',
      //         300: 'var(--color-primary-300)',
      //         400: 'var(--color-primary-400)',
      //         500: 'var(--color-primary-500)',
      //         600: 'var(--color-primary-600)',
      //         700: 'var(--color-primary-700)',
      //         800: 'var(--color-primary-800)',
      //         900: 'var(--color-primary-900)',
      //       },
      //       secondary: {
      //         100: 'var(--color-secondary-100)',
      //         300: 'var(--color-secondary-300)',
      //         500: 'var(--color-secondary-500)',
      //         700: 'var(--color-secondary-700)',
      //       },
      //       gray: {
      //         50: 'var(--color-gray-50)',
      //         100: 'var(--color-gray-100)',
      //         200: 'var(--color-gray-200)',
      //         300: 'var(--color-gray-300)',
      //         400: 'var(--color-gray-400)',
      //         500: 'var(--color-gray-500)',
      //         600: 'var(--color-gray-600)',
      //         700: 'var(--color-gray-700)',
      //         800: 'var(--color-gray-800)',
      //         900: 'var(--color-gray-900)',
      //       },
      //       background: 'var(--color-background)',
      //       surface: 'var(--color-surface)',
      //       border: 'var(--color-border)',
      //       text: {
      //         primary: 'var(--color-text-primary)',
      //         secondary: 'var(--color-text-secondary)',
      //         inverse: 'var(--color-text-inverse)',
      //       },
      //     },
      //     spacing: {
      //       '2xs': 'var(--spacing-2xs)',
      //       xs: 'var(--spacing-xs)',
      //       sm: 'var(--spacing-sm)',
      //       md: 'var(--spacing-md)',
      //       lg: 'var(--spacing-lg)',
      //       xl: 'var(--spacing-xl)',
      //       '2xl': 'var(--spacing-2xl)',
      //     },
      //     fontFamily: {
      //       sans: ['var(--font-sans)'],
      //     },
      //     fontSize: {
      //       xs: ['var(--font-size-xs)', { lineHeight: 'var(--line-height-xs)' }],
      //       sm: ['var(--font-size-sm)', { lineHeight: 'var(--line-height-sm)' }],
      //       base: ['var(--font-size-base)', { lineHeight: 'var(--line-height-base)' }],
      //       lg: ['var(--font-size-lg)', { lineHeight: 'var(--line-height-lg)' }],
      //       xl: ['var(--font-size-xl)', { lineHeight: 'var(--line-height-xl)' }],
      //       '2xl': ['var(--font-size-2xl)', { lineHeight: 'var(--line-height-2xl)' }],
      //     },
    },
  },
  plugins: [],
};

export default config;
