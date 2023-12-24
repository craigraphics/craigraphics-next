import * as React from "react";
import Typography from "@mui/material/Typography";
import Highlight from "@/components/Hightlight";
import Box from "@mui/material/Box";

const About = () => (
  <Box>
    <Typography variant="h2" gutterBottom id="about">
      <Highlight>William Craig</Highlight>
    </Typography>
    <Typography variant="h3" gutterBottom sx={{ mb: 3, mt: 0 }}>
      I am Software Engineer, Front-End Developer & Graphic Designer.
    </Typography>

    <Typography variant="h5" sx={{ mb: 3, mt: 3 }}>
      My passion for innovation in web development, combined with my experience
      at the intersection of technology and design, enables me to create
      solutions that are both functional and visually appealing.
    </Typography>
    <Typography variant="body1" sx={{ mb: 3, mt: 3 }}>
      With almost a decade of dedication at Globant and other top companies, I
      have been privileged to collaborate with top-tier clients such as
      Autodesk, Carnival, Frontier Communications, Coca-Cola, Telmex, and
      General Motors.
    </Typography>
    <Typography variant="body1" sx={{ mb: 3, mt: 3 }}>
      My role has not only been about coding but also about leadership. Managing
      small and medium-sized teams, I have overseen projects from conception to
      completion, ensuring quality, efficiency, and innovation.
    </Typography>
  </Box>
);

export default About;
