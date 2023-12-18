import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import BorderLinearProgress from "@/components/BorderLinearProgress";

interface SkillItemProps {
  name: string;
  value: number;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, value }) => (
  <Grid container spacing={2}>
    <Grid xs={6} sm={5}>
      <Typography variant="h6" sx={{ mb: 0, mt: 2, textAlign: "right" }}>
        {name}
      </Typography>
    </Grid>
    <Grid xsOffset={0} smOffset={0} mdOffset={1} xs={6} sm={5} md={4}>
      <Box sx={{ width: "100%", mb: 0, mt: 3, position: "relative" }}>
        <BorderLinearProgress variant="determinate" value={value} />
      </Box>
    </Grid>
  </Grid>
);

export default SkillItem;
