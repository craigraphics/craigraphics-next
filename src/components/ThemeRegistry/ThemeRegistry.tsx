"use client";
import React, { PropsWithChildren } from "react";
import { observer } from "mobx-react";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import NextAppDirEmotionCacheProvider from "./EmotionCache";
import { darkTheme, lightTheme } from "./theme";
import { themeStore } from "@/store/ThemeStore";

const ThemeRegistry: React.FC<PropsWithChildren<{}>> = observer(
  ({ children }) => {
    return (
      <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
        <ThemeProvider
          theme={themeStore.theme === "dark" ? darkTheme : lightTheme}
        >
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {children}
        </ThemeProvider>
      </NextAppDirEmotionCacheProvider>
    );
  },
);

export default ThemeRegistry;
