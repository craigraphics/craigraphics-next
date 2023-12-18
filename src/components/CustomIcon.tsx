"use client";

import React from "react";
import { observer } from "mobx-react";
import {
  dark as darkTheme,
  light as lightTheme,
} from "@/components/ThemeRegistry/colorValues";
import { themeStore } from "@/store/ThemeStore";

type CustomIconProps = {
  icon: React.ElementType;
  [key: string]: any;
};

const CustomIcon: React.FC<CustomIconProps> = observer(
  ({ icon: IconComponent, ...props }) => {
    const theme = themeStore.theme === "dark" ? darkTheme : lightTheme;

    return <IconComponent sx={{ ...props, color: theme.tertiary.main }} />;
  },
);

export default CustomIcon;
