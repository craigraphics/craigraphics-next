import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { colorValues } from "./colorValues";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    mode: "dark",
    ...colorValues,
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
          backgroundColor: colorValues.secondary.main,
          backgroundImage: "none",
          // color: "red",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        outlined: {
          cursor: "default",
          borderColor: colorValues.tertiary.main,
          color: colorValues.secondary.light,
          "&:hover": {
            backgroundColor: colorValues.tertiary.main,
            borderColor: "transparent",
            color: "black",
          },
        },
        filled: {
          cursor: "default",
          backgroundColor: colorValues.secondary.dark,
          color: colorValues.secondary.light,
          "&:hover": {
            backgroundColor: colorValues.tertiary.main,
            borderColor: "transparent",
            color: "black",
          },
        },
      },
    },
  },
});

export default theme;
