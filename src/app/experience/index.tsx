import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import PlaceIcon from "@mui/icons-material/Place";
import DateRangeIcon from "@mui/icons-material/DateRange";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import Highlight from "@/components/Hightlight";
import CustomIcon from "@/components/CustomIcon";
import UnderLinedTypography from "@/components/UnderlinedTypography";

const experienceList = [
  {
    title: "Globant",
    subtitle: "Lead Web UI Developer - Software Designer",
    places: ["San Francisco, CA"],
    date: "2015 — Present",
    content:
      "I have been working since mid 2020 up to this day as a contractor for Autodesk by developing single-page applications with React (Hooks), GraphQL, serverless environments, component based and microfrontend architectures. I have also worked for clients like Carnival Cruise Lines, Frontier Communications, and Maestro Health.",
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "GraphQL",
      "NX",
      "SCSS",
      "Material UI",
      "Node.js",
      "AWS",
      "Webpack 5",
      "Docker",
      "Jenkins",
      "Git",
      "Jira",
      "Figma",
      "WordPress",
      "D3js",
      "Angular JS",
    ],
  },
  {
    title: "Cinco M Dos",
    subtitle: "Front End Developer Sr.",
    places: ["Mexico City, Mexico"],
    date: "2014 — 2015",
    content:
      "I was in charge of building the front-end of GOB.mx, a website that includes information, services and online procedures for all people in general; along with the creation of a style guide framework for all the public administration agencies and ministries to implement it on their own websites.",
    technologies: [
      "Angular JS",
      "Grunt",
      "SCSS",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Jira",
      "Git",
      "PHP",
      "WordPress",
      "Photoshop",
      "Illustrator",
      "Sketch",
    ],
  },
  {
    title: "Global Hitss",
    subtitle: "Front End Developer Sr.",
    places: ["Mexico City, Mexico"],
    date: "2013 — 2014",
    content:
      "I worked as a consultant inside Telmex’s Digital Strategy team (biggest telecommunications company of  Mexico). The main goal was the complete redesign and rebuild of telmex.com, one of the highest traffic  websites in the country",
    technologies: [
      "JavaScript",
      "Liferay",
      "HTML5",
      "CSS3",
      "jQuery",
      "Bootstrap",
      "Photoshop",
      "SCSS",
    ],
  },
  {
    title: "Interalia",
    subtitle: "Front End Developer Sr.",
    places: ["Mexico City, Mexico"],
    date: "2010 — 2013",
    content:
      "I was in charge of developing different projects for Coca-Cola and General Motors by building websites, microsites and mobile apps released for both national and international audiences.",
    technologies: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "jQuery",
      "Photoshop",
      "Flash",
      "ActionScript",
    ],
  },
];

const Experience = () => {
  return (
    <>
      <Typography variant="h4" sx={{ mb: 4, mt: 5 }} id="experience">
        <Highlight>Professional Experience</Highlight>
      </Typography>
      {experienceList.map(
        ({ date, title, subtitle, technologies, places, content }) => (
          <Grid container key={title} spacing={2} sx={{ mb: 4, ml: { xs: 0 } }}>
            <Grid
              sm={12}
              md={3}
              sx={{
                ml: { xs: 0, sm: 0, md: 0 },
                mr: 1,
              }}
            >
              <Typography component="div">
                <CustomIcon
                  icon={DateRangeIcon}
                  fontSize="16px"
                  transform="translateY(3px)"
                  mr={1}
                />
                {date}
              </Typography>

              {places.map((place) => (
                <Typography component="div" key={place}>
                  <CustomIcon
                    icon={PlaceIcon}
                    fontSize="16px"
                    transform="translateY(3px)"
                    mr={1}
                  />

                  {place}
                </Typography>
              ))}
            </Grid>

            <Grid sm={12} md={8}>
              <UnderLinedTypography variant="h5">
                <CustomIcon
                  icon={WorkOutlineIcon}
                  fontSize="20px"
                  transform="translateY(3px)"
                  mr={1}
                />

                {title}
              </UnderLinedTypography>
              <Typography variant="h6" gutterBottom>
                {subtitle}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {content}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  flexWrap: "wrap",
                  mt: 2,
                  mb: 4,
                }}
              >
                {technologies.map((skill) => (
                  <Chip label={skill} variant="filled" key={skill} />
                ))}
              </Box>
            </Grid>
          </Grid>
        ),
      )}
    </>
  );
};

export default Experience;
