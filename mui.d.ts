import "@mui/material/styles";

interface Tertiary {
  main: string;
  light: string;
  dark: string;
  contrastText: string;
}

declare module "@mui/material/styles" {
  interface Palette {
    tertiary: Tertiary;
  }

  interface PaletteOptions {
    tertiary: Tertiary;
  }
}
