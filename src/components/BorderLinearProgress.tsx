import LinearProgress, {
  linearProgressClasses,
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { colorValues } from "@/components/ThemeRegistry/colorValues";

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 15,
  borderRadius: 0,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.mode === "light"
        ? colorValues.primary.light
        : colorValues.secondary.dark,
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 0,
    backgroundColor:
      theme.palette.mode === "light"
        ? colorValues.tertiary.main
        : colorValues.tertiary.main,
  },
}));

const BorderLinearProgress = (
  props: LinearProgressProps & { value: number },
) => (
  <Box sx={{ display: "flex", alignItems: "center" }}>
    <Box sx={{ width: "100%" }}>
      <StyledLinearProgress variant="determinate" {...props} />
    </Box>
    <Box sx={{ minWidth: 35, position: "absolute", ml: 1, fontWeight: "600" }}>
      <Typography
        variant="body2"
        color={colorValues.primary.dark}
      >{`${Math.round(props.value)}`}</Typography>
    </Box>
  </Box>
);

export default BorderLinearProgress;
