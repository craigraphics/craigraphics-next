"use client";
import React, { useState, FC } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LeftNav from "@/components/LeftNav/LeftNav";
import ClearIcon from "@mui/icons-material/Clear";
import Box from "@mui/material/Box";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { colorValues } from "../ThemeRegistry/colorValues";

const Logo: FC<SvgIconProps> = (props) => (
  <SvgIcon
    {...props}
    viewBox="0 0 26 26"
    sx={{ position: "relative", top: "5px" }}
  >
    <g>
      <circle
        style={{ fill: colorValues.primary.light }}
        cx="13"
        cy="13"
        r="5"
      />
    </g>
    <g>
      <path
        style={{ fill: "#FFFFFF" }}
        d="M13,2c6.07,0,11,4.93,11,11s-4.93,11-11,11S2,19.07,2,13S6.93,2,13,2 M13,0C5.82,0,0,5.82,0,13
		c0,7.18,5.82,13,13,13s13-5.82,13-13C26,5.82,20.18,0,13,0L13,0z"
      />
    </g>
  </SvgIcon>
);

function appBarLabel(
  label: string,
  isOpen: boolean,
  handleMenuToggle: () => void,
) {
  return (
    <Toolbar>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={handleMenuToggle}
      >
        {!isOpen ? <MenuIcon /> : <ClearIcon />}
      </IconButton>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ flexGrow: 1 }}
        title={label}
      >
        <Logo /> {label}
      </Typography>

      <Box sx={{ flexGrow: 1 }} />
      <Box>
        <IconButton
          size="large"
          aria-label="Linkedin"
          color="inherit"
          href="https://github.com/craigraphics"
          target="_blank"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          size="large"
          aria-label="Github"
          color="inherit"
          href="https://www.linkedin.com/in/willcraigz/"
          target="_blank"
        >
          <GitHubIcon />
        </IconButton>
      </Box>
    </Toolbar>
  );
}

export default function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <AppBar
        position="sticky"
        color="primary"
        enableColorOnDark
        sx={{
          backgroundImage: "none",
          background: "rgba(18, 18, 18, 0.8)",
          backdropFilter: "saturate(180%) blur(20px)",
          boxShadow: "none",
        }}
      >
        {appBarLabel("craigraphics", menuOpen, toggleMenu)}
      </AppBar>
      <LeftNav onToggleMenu={toggleMenu} isOpen={menuOpen} />
    </>
  );
}
