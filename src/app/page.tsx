import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import About from "./about";
import Leadership from "./leadership";
import Skills from "./skills";
import Experience from "./experience";
import EmailForm from "./contact";
import SolarSystem from "@/components/SolarSystem";

const HomePage = () => (
  <Grid container spacing={2}>
    <Grid smOffset={2} sm={8}>
      <About />
      <Experience />
      <Skills />
    </Grid>

    <Grid lg={5} md={8} smOffset={2}>
      <Leadership />
      <EmailForm />
    </Grid>
    <Grid
      sx={{ display: { xs: "none", sm: "none", md: "none", lg: "block" } }}
      lg={3}
      mt={5}
    >
      <SolarSystem />
    </Grid>
  </Grid>
);

export default HomePage;
