/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary palette - Forest green
        primary: {
          50: '#f0fdf8',
          100: '#dffbf1',
          200: '#bff5e4',
          300: '#7dee88',
          400: '#4a8b73',
          500: '#2d5f4f',
          600: '#1a3a2f',
          700: '#0f241f',
          800: '#051008',
        },
        // Secondary palette - Rust/Terracotta
        secondary: {
          50: '#fef6f2',
          100: '#fde8e0',
          200: '#fcc7ac',
          300: '#dfa47a',
          400: '#c97c5c',
          500: '#a95d3f',
          600: '#8b4a2f',
          700: '#6d3a23',
          800: '#4f2816',
        },
        // Accent colors
        accent: {
          purple: '#5c4b66',
          gold: '#d4a574',
          blue: '#6b9fb0',
          blush: '#d9a5a0',
        },
        // Semantic colors
        success: '#4a7d6b',
        warning: '#c9884b',
        error: '#b85c54',
        info: '#6b9fb0',
        
        // Background palette
        bg: {
          primary: '#f5f1e8',
          secondary: '#faf7f1',
          tertiary: '#ebe5d9',
          contrast: '#2c2420',
        },
        
        // Text colors
        text: {
          primary: '#2c2420',
          secondary: '#6b6560',
          tertiary: '#a9a39a',
          inverse: '#f5f1e8',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', '"Poppins"', '"Roboto"', '"Helvetica Neue"', 'sans-serif'],
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.2' }],
        sm: ['0.875rem', { lineHeight: '1.5' }],
        base: ['1rem', { lineHeight: '1.5' }],
        lg: ['1.125rem', { lineHeight: '1.5' }],
        xl: ['1.25rem', { lineHeight: '1.2' }],
        '2xl': ['1.5rem', { lineHeight: '1.2' }],
        '3xl': ['1.875rem', { lineHeight: '1.2' }],
        '4xl': ['2.25rem', { lineHeight: '1.2' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
      },
      spacing: {
        0: '0',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        8: '2rem',
        10: '2.5rem',
        12: '3rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        32: '8rem',
        40: '10rem',
        48: '12rem',
        56: '14rem',
        64: '16rem',
      },
      borderRadius: {
        sm: '0.375rem',
        md: '0.5rem',
        lg: '0.875rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        full: '9999px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(44, 36, 32, 0.1)',
        md: '0 4px 6px rgba(44, 36, 32, 0.2)',
        lg: '0 10px 15px rgba(44, 36, 32, 0.2)',
        xl: '0 20px 25px rgba(44, 36, 32, 0.2)',
        '2xl': '0 25px 50px rgba(44, 36, 32, 0.2)',
        inner: 'inset 0 2px 4px rgba(44, 36, 32, 0.1)',
      },
      transitionDuration: {
        fast: '150ms',
        base: '250ms',
        slow: '350ms',
        slower: '500ms',
      },
      transitionTimingFunction: {
        'ease-smooth': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      animation: {
        fadeIn: 'fadeIn 300ms ease-out forwards',
        slideInUp: 'slideInUp 500ms ease-out forwards',
        slideInDown: 'slideInDown 500ms ease-out forwards',
        slideInLeft: 'slideInLeft 500ms ease-out forwards',
        slideInRight: 'slideInRight 500ms ease-out forwards',
        scaleIn: 'scaleIn 300ms ease-out forwards',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        spin: 'spin 1s linear infinite',
        timerTick: 'timerTick 200ms ease-in-out',
        timerComplete: 'timerComplete 600ms cubic-bezier(0.34, 1.56, 0.64, 1)',
        glow: 'glow 2s cubic-bezier(0.4, 0, 0.2, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideInUp: {
          from: { transform: 'translateY(20px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        slideInDown: {
          from: { transform: 'translateY(-20px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          from: { transform: 'translateX(-20px)', opacity: '0' },
          to: { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          from: { transform: 'translateX(20px)', opacity: '0' },
          to: { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          from: { transform: 'scale(0.9)', opacity: '0' },
          to: { transform: 'scale(1)', opacity: '1' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        timerTick: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
        timerComplete: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 0 0 rgba(201, 124, 92, 0.7)',
          },
          '50%': {
            boxShadow: '0 0 0 10px rgba(201, 124, 92, 0)',
          },
        },
      },
      screens: {
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '80rem',
      },
    },
  },
  plugins: [],
}