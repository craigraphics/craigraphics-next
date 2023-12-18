"use client";

import React, { useState } from "react";
import { observer } from "mobx-react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";

import Highlight from "@/components/Hightlight";
import SkillItem from "@/app/skills/SkillItem";
import { themeStore } from "@/store/ThemeStore";

import { hexToRgb } from "@/helpers/hexToRgb";
import {
  dark as darkTheme,
  light as lightTheme,
} from "@/components/ThemeRegistry/colorValues";

const skillsList = [
  {
    name: "JavaScript (ES6) & TypeScript",
    value: 88,
  },
  {
    name: "React (Hooks, Context, Redux)",
    value: 92,
  },
  {
    name: "HTML5 & CSS3",
    value: 90,
  },
  {
    name: "Next.js, Gatsby & CRA",
    value: 80,
  },
  {
    name: "Node.js & Express",
    value: 62,
  },
  {
    name: "GraphQL",
    value: 70,
  },
  {
    name: "Webpack, Rollup & NX",
    value: 78,
  },
  {
    name: "Git & GitHub",
    value: 85,
  },
  {
    name: "Material UI, Tailwind, Bootstrap",
    value: 90,
  },
  {
    name: "Figma & Sketch",
    value: 72,
  },
  {
    name: "DevOps & CI/CD",
    value: 58,
  },
  {
    name: "Adobe Photoshop & Ilustrator",
    value: 90,
  },
  {
    name: "Responsive & Mobile-First Design",
    value: 92,
  },
  {
    name: "RESTful APIs",
    value: 70,
  },
  {
    name: "Jest, Enzyme, Cypress & Testing Library",
    value: 76,
  },
  {
    name: "Performance & Optimization",
    value: 79,
  },
  {
    name: "Web Standards, Accessibility & SEO",
    value: 84,
  },
  {
    name: "Progressive Web Apps",
    value: 85,
  },
  {
    name: "Angular & Vue.js",
    value: 65,
  },
  {
    name: "Agile Methodologies",
    value: 80,
  },
];

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Skills: React.FC = observer(() => {
  const [expanded, setExpanded] = useState(false);
  const theme = themeStore.theme === "dark" ? darkTheme : lightTheme;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx={{ marginBottom: "100px" }}>
      <Typography variant="h4" sx={{ mb: 1, mt: 5 }}>
        <Highlight>Skills & Career Development </Highlight>
      </Typography>

      <Collapse in={expanded} collapsedSize={400}>
        {skillsList.map(({ name, value }) => (
          <SkillItem name={name} value={value} key={name} />
        ))}
      </Collapse>
      <Container
        sx={{
          position: "relative",
          marginTop: "-100px",
          height: "100px",
          borderBottom: !expanded ? "1px solid rgb(31, 55, 93)" : "none",
          background: !expanded
            ? `linear-gradient(0deg, rgba(${hexToRgb(
                theme.background.default,
              )},0.9) 50%, rgba(${hexToRgb(
                theme.background.default,
              )},0.5) 100%)`
            : "transparent",
        }}
      >
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          sx={{
            position: "absolute",
            left: "50%",
            marginLeft: "-20px",
            marginTop: "105px",
          }}
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </Container>
    </Box>
  );
});

export default Skills;
