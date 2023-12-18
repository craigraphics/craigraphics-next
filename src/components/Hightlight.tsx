"use client";

import React from "react";
import { observer } from "mobx-react";
import {
  dark as darkTheme,
  light as lightTheme,
} from "@/components/ThemeRegistry/colorValues";
import { themeStore } from "@/store/ThemeStore";

const Highlight: React.FC<{
  children: React.ReactNode;
  isPrimary?: boolean;
}> = observer(({ children, isPrimary = false }) => {
  const theme = themeStore.theme === "dark" ? darkTheme : lightTheme;

  return (
    <span
      style={{
        backgroundColor: isPrimary ? theme.primary.main : theme.secondary.main,
      }}
    >
      {children}
    </span>
  );
});

export default Highlight;
