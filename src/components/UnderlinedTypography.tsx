"use client";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { colorValues } from "@/components/ThemeRegistry/colorValues";

const UnderLinedTypography = styled(Typography)({
  textDecoration: "underline",
  textDecorationColor: colorValues.tertiary.main,
});

export default UnderLinedTypography;
