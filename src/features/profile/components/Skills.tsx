import { Chip, Zoom, Divider, Grid, Paper } from "@mui/material";

import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import "../styles/skills.css";

interface Content {
  title: string;
  link: string;
}

interface Details {
  title: string;
  certifications: Content[];
  technologies: Content[];
}

type Props = {
  details: Details;
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Skills: React.FC<Props> = ({ details }) => {
  let certifications: JSX.Element[] = [];
  let technologies: JSX.Element[] = [];
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setDisplay(true);
  }, []);

  let sortedTech = details.technologies.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  let count = 0;

  details.certifications.forEach((content, index) => {
    let delay = 50 * count++;
    certifications.push(
      <Zoom
        className="zoomItem"
        in={display}
        style={{ transitionDelay: display ? `${delay}ms` : "0ms" }}
        key={index}
      >
        <div>
          <Chip
            label={content.title}
            variant="outlined"
            className="skillItem"
            onClick={() => {
              window.open(content.link, "_blank");
            }}
          />
        </div>
      </Zoom>
    );
  });

  sortedTech.forEach((content, index) => {
    let delay = 50 * count++;
    technologies.push(
      <Zoom
        className="zoomItem"
        in={display}
        style={{ transitionDelay: display ? `${delay}ms` : "0ms" }}
        key={index}
      >
        <div>
          <Chip
            label={content.title}
            variant="outlined"
            className="skillItem"
            onClick={() => {
              window.open(content.link, "_blank");
            }}
          />
        </div>
      </Zoom>
    );
  });

  return (
    <div id="skillsMainContent">
      <div className="title">
        <span>{details.title}</span>
      </div>

      <Grid container columns={2}>
        <Grid xs={2} sm={1} md={1}>
          <Item className="skillsContainer">
            <Divider id="dividerCert">
              <Chip label="Certificates" />
            </Divider>
            {certifications}
          </Item>
        </Grid>
        <Grid xs={2} sm={1} md={1}>
          <Item className="skillsContainer">
            <Divider id="dividerTech">
              <Chip label="Technologies" />
            </Divider>
            {technologies}
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default Skills;
