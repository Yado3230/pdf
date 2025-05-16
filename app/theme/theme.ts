"use client";

import { createTheme, ThemeOptions } from "@mui/material/styles";

// Light theme
const lightTheme: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#0F0C3D",
      light: "#2d2a5b",
      dark: "#070624",
    },
    secondary: {
      main: "#F7B844",
      light: "#f9c66e",
      dark: "#d99e2c",
    },
    background: {
      default: "#ffffff",
      paper: "#f9f9f9",
    },
    text: {
      primary: "#333355",
      secondary: "#555577",
    },
    error: {
      main: "#d32f2f",
    },
  },
  typography: {
    fontFamily: "var(--font-geist-sans)",
    h1: {
      fontWeight: 800,
      fontSize: "2.5rem",
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 700,
      fontSize: "2rem",
      lineHeight: 1.2,
    },
    h3: {
      fontWeight: 700,
      fontSize: "1.5rem",
      lineHeight: 1.2,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    button: {
      fontWeight: 600,
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "12px 24px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
};

// Dark theme
const darkTheme: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#313082",
      light: "#4e4da3",
      dark: "#1f1e55",
    },
    secondary: {
      main: "#F7B844",
      light: "#f9c66e",
      dark: "#d99e2c",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#e0e0e0",
      secondary: "#a0a0a0",
    },
    error: {
      main: "#f44336",
    },
  },
  typography: {
    fontFamily: "var(--font-geist-sans)",
    h1: {
      fontWeight: 800,
      fontSize: "2.5rem",
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 700,
      fontSize: "2rem",
      lineHeight: 1.2,
    },
    h3: {
      fontWeight: 700,
      fontSize: "1.5rem",
      lineHeight: 1.2,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    button: {
      fontWeight: 600,
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "12px 24px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
};

// Create a theme instance based on mode
export const getTheme = (mode: "light" | "dark") => {
  return createTheme(mode === "light" ? lightTheme : darkTheme);
};

export default getTheme;
