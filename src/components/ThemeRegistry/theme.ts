import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { dark, light } from "./colorValues";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    ...dark,
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h2: {
      fontWeight: 400,
    },
    h3: {
      fontWeight: 300,
    },
    h4: {
      fontWeight: 300,
    },
    h5: {
      fontWeight: 400,
    },
    h6: {
      fontWeight: 400,
      lineHeight: 1.35,
      letterSpacing: "0.00938em",
    },
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: dark.secondary.main,
          backgroundImage: "none",
          // color: "red",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        outlined: {
          cursor: "default",
          borderColor: dark.tertiary.main,
          color: dark.secondary.light,
          "&:hover": {
            backgroundColor: dark.tertiary.main,
            borderColor: "transparent",
            color: "black",
          },
        },
        filled: {
          cursor: "default",
          backgroundColor: dark.secondary.dark,
          color: dark.secondary.light,
          "&:hover": {
            backgroundColor: dark.tertiary.main,
            borderColor: "transparent",
            color: "black",
          },
        },
      },
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    ...light,
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h2: {
      fontWeight: 400,
    },
    h3: {
      fontWeight: 300,
    },
    h4: {
      fontWeight: 300,
    },
    h5: {
      fontWeight: 400,
    },
    h6: {
      fontWeight: 400,
      lineHeight: 1.35,
      letterSpacing: "0.00938em",
    },
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: light.secondary.main,
          backgroundImage: "none",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        filled: {
          cursor: "default",
          backgroundColor: light.secondary.main,
          color: light.primary.dark,
          "&:hover": {
            backgroundColor: light.tertiary.main,
            borderColor: "transparent",
            color: "white",
          },
        },
      },
    },
  },
});
