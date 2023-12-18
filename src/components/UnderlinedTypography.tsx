"use client";

import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const UnderLinedTypography = styled(Typography)(({ theme }) => ({
  textDecoration: "underline",
  textDecorationColor:
    theme.palette.mode == "dark"
      ? theme.palette.tertiary.main
      : theme.palette.tertiary.dark,
}));

export default UnderLinedTypography;
