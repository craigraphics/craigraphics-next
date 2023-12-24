import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import UnderLinedTypography from "@/components/UnderlinedTypography";

import Highlight from "@/components/Hightlight";

const skills = [
  {
    title: "Mentoring and Career Guidance: ",
    text: "Guided career development and improvement strategies for senior developers.",
  },
  {
    title: "Team Leadership and Problem Solving: ",
    text: "Led small teams in problem-solving and task management.",
  },
  {
    title: "Talent Acquisition and Fit Interviews: ",
    text: "Conducted fit interviews to select specialized candidates for project-specific roles.",
  },
  {
    title: "Cross-functional Collaboration: ",
    text: "Collaborated with stakeholders, designers, and product owners to develop optimal project solutions and features.",
  },
];

const Leadership = () => (
  <>
    <Typography variant="h4" sx={{ mb: 2, mt: 5 }} id="leadership">
      <Highlight>Leadership and Team Collaboration</Highlight>
    </Typography>
    <List aria-label="contacts">
      {skills.map((skill) => (
        <ListItem disablePadding disableGutters dense key={skill.title}>
          <ListItemText sx={{ mb: 3 }}>
            <UnderLinedTypography variant="h5">
              {skill.title}
            </UnderLinedTypography>
            {skill.text}
          </ListItemText>
        </ListItem>
      ))}
    </List>
  </>
);

export default Leadership;
