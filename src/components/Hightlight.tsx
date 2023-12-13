import React from "react";
import { colorValues as theme } from "@/components/ThemeRegistry/colorValues";

const Highlight: React.FC<{
  children: React.ReactNode;
  isPrimary?: boolean;
}> = ({ children, isPrimary = false }) => (
  <span
    style={{
      backgroundColor: isPrimary ? theme.primary.main : theme.secondary.main,
    }}
  >
    {children}
  </span>
);

export default Highlight;
