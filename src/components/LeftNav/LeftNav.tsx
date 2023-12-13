"use client";
import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WorkspacesOutlinedIcon from "@mui/icons-material/WorkspacesOutlined";
import ChecklistIcon from "@mui/icons-material/Checklist";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

const DRAWER_WIDTH = 240;

interface LeftNavProps {
  onToggleMenu: () => void;
  isOpen: boolean;
}

const LeftNav: React.FC<LeftNavProps> = ({ onToggleMenu, isOpen }) => {
  const toggleMenu = () => {
    onToggleMenu();
  };

  const SECTIONS = [
    { text: "About me", href: "/", icon: AccountCircleIcon },
    { text: "Experience", href: "/#experience", icon: WorkHistoryIcon },
    { text: "Skills", href: "/#skills", icon: ChecklistIcon },
    { text: "Leadership", href: "/#leadership", icon: WorkspacesOutlinedIcon },
    { text: "Contact", href: "/#contact", icon: AlternateEmailIcon },
  ];
  return (
    <Drawer
      anchor="left"
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: DRAWER_WIDTH,
          boxSizing: "border-box",
          top: ["56px", "64px", "64px"],
          height: "auto",
          bottom: 0,
        },
      }}
      open={isOpen}
      onClose={toggleMenu}
    >
      <List>
        {SECTIONS.map(({ text, href, icon: Icon }) => (
          <ListItem key={href} disablePadding>
            <ListItemButton component={Link} href={href} onClick={toggleMenu}>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default LeftNav;
