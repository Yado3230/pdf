"use client";

import { createTheme, ThemeOptions } from "@mui/material/styles";

// Light theme
const lightTheme: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#1e90ff",
      light: "#4ba3ff",
      dark: "#0066cc",
    },
    secondary: {
      main: "#d53f8c",
      light: "#e168a5",
      dark: "#b52477",
    },
    background: {
      default: "#000000",
      paper: "#111111",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b8b8b8",
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
      main: "#1e90ff",
      light: "#4ba3ff",
      dark: "#0066cc",
    },
    secondary: {
      main: "#d53f8c",
      light: "#e168a5",
      dark: "#b52477",
    },
    background: {
      default: "#000000",
      paper: "#111111",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b8b8b8",
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
