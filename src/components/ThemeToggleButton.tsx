import React from "react";
import { observer } from "mobx-react";
import { themeStore } from "@/store/ThemeStore";
import ContrastIcon from "@mui/icons-material/Contrast";
import IconButton from "@mui/material/IconButton";

const ThemeToggleButton: React.FC = observer(() => {
  const handleToggle = () => {
    themeStore.toggleTheme();
  };

  return (
    <IconButton
      size="large"
      aria-label="Github"
      color="inherit"
      onClick={handleToggle}
    >
      <ContrastIcon
        sx={{
          transform:
            themeStore.theme === "dark" ? "rotate(0deg)" : "rotate(180deg)",
          transition: "transform .3s",
        }}
      />
    </IconButton>
  );
});

export default ThemeToggleButton;
