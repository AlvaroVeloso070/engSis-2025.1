import type { Config } from "tailwindcss";
import headlessUI from "@headlessui/tailwindcss";
import forms from "@tailwindcss/forms";
import aspectRatio from "@tailwindcss/aspect-ratio";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          black: "#000000",
          transparent: "#ffffff00",
        },
        grays: {
          gray: "#8e8e93",
          gray2: "#aeaeb2",
          gray3: "#c7c7cc",
          gray4: "#d1d1d6",
          gray5: "#e5e5ea",
          gray6: "#f2f2f7",
          gray7: "#f9fafb",
        },
        brand: {
          15: "#FFF3F5",
          25: "#FFEFF1",
          50: "#FFE0E6",
          100: "#ffc6d3",
          200: "#ff97ae",
          300: "#ff5d83",
          400: "#ff245e",
          500: "#ff004d",
          600: "#d70041",
          700: "#b4003f",
          800: "#99023c",
          900: "#57001b",
          950: "#430318",
        },
        accent: {
          15: "#FCF9FF",
          25: "#f9f5ff",
          50: "#f7f2ff",
          100: "#efe8ff",
          200: "#e1d4ff",
          300: "#ccb1ff",
          400: "#b485ff",
          500: "#9747ff",
          600: "#9330f7",
          700: "#851ee3",
          800: "#6f18bf",
          900: "#5b169c",
          950: "#390b6a",
        },
        error: {
          25: "#FFFBFA",
          50: "#FEF3F2",
          100: "#FEE4E2",
          200: "#FECDCA",
          300: "#FDA29B",
          400: "#F97066",
          500: "#F04438",
          600: "#D92D20",
          700: "#B42318",
          800: "#912018",
          900: "#7A271A",
          950: "#55160C",
        },
        success: {
          25: "#F7FFF8",
          50: "#F1FCF3",
          100: "#DEFAE4",
          200: "#BEF4CB",
          300: "#8BEAA2",
          400: "#51D772",
          500: "#30D158",
          600: "#1D9C3D",
          700: "#1A7B32",
          800: "#1A612D",
          900: "#175027",
          950: "#072C12",
        },
        levels: {
          25: "#FAFAFA",
          50: "#F5F5F7",
          100: "#F0F0F1",
          200: "#ECECED",
          300: "#CECFD2",
          400: "#94969C",
          500: "#85888E",
          600: "#61646C",
          700: "#333741",
          800: "#1F242F",
          900: "#161B26",
          950: "#0C111D",
        },
        graph: {
          yellow: "#FACC15",
          green: "#14B8A6",
          blue: "#007ED1",
          violet: "#933A90",
          purple: "#6860BB",
          orange: "#FA5A15",
          cyan: "#15FACC",
          pink: "#FFE6FF",
          salmon: "#FFA17A",
          gray: "#2F4858",
          beige: "#FFEFCA",
          brown: "#4A2F00",
        },
        label: {
          light: {
            primary: "#1d1d1f",
            secondary: "rgb(60, 60, 67, 70%)",
            tertiary: "rgb(60, 60, 67, 40%)",
            quaternary: "rgb(60, 60, 67, 18%)",
          },
          dark: {
            primary: "#ffffff",
            secondary: "ebebf599",
            tertiary: "#ebebf54d",
            quaternary: "#ebebf52e",
          },
        },
        layers: {
          light: {
            primary: "#ffffff",
            secondary: "#f2f2f7",
            // revisar cor terciária
          },
          dark: {
            primary: "#000000",
            secondary: "#1c1c1e",
            tertiary: "#2c2c2e",
          },
        },
      },
      fontFamily: {
        inter: "var(--font-inter)",
      },
      fontSize: {
        display2xl: ["72px", "90px"],
        displayxl: ["60px", "72px"],
        displaylg: ["48px", "60px"],
        displaymd: ["36px", "44px"],
        displaysm: ["30px", "38px"],
        displayxs: ["24px", "32px"],
        textxl: ["20px", "30px"],
        textlg: ["18px", "28px"],
        textmd: ["16px", "24px"],
        textsm: ["14px", "20px"],
        textxs: ["12px", "16px"],
        text2xs: [
          "10.01px",
          {
            lineHeight: "12px",
            letterSpacing: "-0.128px",
          },
        ],
      },
      fontWeight: {
        thin: "100",
        hairline: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "650",
        extrabold: "750",
        black: "850",
      },
      opacity: {
        "3": ".03",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        glass:
          "linear-gradient(0deg,#FF0000_0%,#FF0000_100%),rgba(190,190,190,0.82)",
      },
      spacing: {
        "spacing-2": "2px",
        "spacing-3": "3px",
        "spacing-6": "6px",
        "spacing-xs": "4px",
        "spacing-sm": "8px",
        "spacing-md": "12px",
        "spacing-lg": "16px",
        "spacing-xl": "24px",
        "spacing-2xl": "32px",
        "spacing-3xl": "64px",
        "spacing-4xl": "128px",
      },
      borderRadius: {
        "2xs": "3px",
        xs: "4px",
        sm: "6px",
        md: "8px",
        lg: "12px",
      },
      boxShadow: {
        sm: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
        md: "0px 4px 6px 2px rgba(16, 24, 40, 0.02), 0px 4px 4px 0px rgba(0, 0, 0, 0.05)",
        lg: "0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)",
        "light-shadow":
          "0px 1px 2px 0px rgba(0, 0, 0, 0.05), 0px 2.5px 3.2px 0px rgba(255, 255, 255, 0.48) inset",
        "gray-shadow":
          "0px 0px 0px 1px #EBECEE inset, 0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
        "inverse-shadow":
          "0px -4px 8px -2px rgba(16, 24, 40, 0.02), 0px -2px 4px -2px rgba(16, 24, 40, 0.06)",
        popup:
          "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
        overlay: "-1px 2px 2.6px 0px rgba(0, 0, 0, 0.04)",
        layer:
          "0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.02)",
        layer2:
          "0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 21.5px 16.8px -4px rgba(16, 24, 40, 0.04)",
      },
      gridTemplateColumns: {
        "layout-lg":
          "1fr 4px minmax(223.333px,1fr) 4px minmax(223.333px,1fr) 24px minmax(223.333px,1fr) 4px minmax(223.333px,1fr) 4px 1fr",
        "layout-sm": "20px 4px 1fr 4px 1fr 24px 1fr 4px 1fr 4px 20px",
        "layout-default": "8px 4px 1fr 4px 1fr 24px 1fr 4px 1fr 4px 8px",
        "layout32-lg":
          "1fr 32px minmax(214px,1fr) 4px minmax(214px,1fr) 24px minmax(214px,1fr) 4px minmax(214px,1fr) 32px 1fr",
        "layout32-sm": "10px 32px 1fr 4px 1fr 24px 1fr 4px 1fr 32px 10px",
        "layout32-default": "0px 32px 1fr 4px 1fr 24px 1fr 4px 1fr 32px 0px",
      },
      screens: {
        lg: "1088px",
        "2xs": "376px",
        "3xl": "1920px",
      },
      keyframes: {
        "bounce-twice": {
          "0%, 100%": { transform: "translateY(0)" },
          "25%": { transform: "translateY(-1px)" },
          "50%": { transform: "translateY(0px)" },
          "75%": { transform: "translateY(1px)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
      },
      animation: {
        "bounce-twice": "bounce-twice 300ms cubic-bezier(0.12, 0, 0.39, 0) 2",
        pulse: "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [headlessUI, forms, aspectRatio],
};
export default config;
