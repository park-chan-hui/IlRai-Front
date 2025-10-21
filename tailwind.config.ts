import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      /* 색상 토큰 */
      colors: {
        primary: {
          50: "#F2F7FF",
          100: "#E0EEFF",
          200: "#B8D8FF",
          300: "#8EBFFF",
          400: "#5E9EFF",
          500: "#007BFF", // 기본
          600: "#0062CC",
          700: "#004999",
          800: "#003366",
          900: "#001F3F",
        },
        secondary: {
          100: "#FDF2F8",
          300: "#F9A8D4",
          500: "#EC4899",
          700: "#BE185D",
        },
        gray: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
        background: "#F9FAFB",
        surface: "#FFFFFF",
        border: "#E5E7EB",
        text: {
          primary: "#111827",
          secondary: "#6B7280",
          inverse: "#FFFFFF",
        },
      },

      /* 간격 (Spacing) */
      spacing: {
        "2xs": "4px",
        xs: "8px",
        sm: "12px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "40px",
      },

      /* 모서리 (Border Radius) */
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "20px",
      },

      /*  폰트 (Typography) */
      fontFamily: {
        sans: ["Pretendard", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        xs: ["12px", "18px"],
        sm: ["14px", "20px"],
        base: ["16px", "24px"],
        lg: ["20px", "28px"],
        xl: ["24px", "32px"],
        "2xl": ["32px", "40px"],
      },
    },
  },
  plugins: [],
};

export default config;
