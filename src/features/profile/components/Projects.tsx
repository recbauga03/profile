import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Zoom } from "@mui/material";
import { Grid } from "@mui/material";
import "../styles/projects.css";

interface Project {
  name: string;
  description: string;
  url: string;
  img: string;
}

interface Details {
  title: string;
  contents: Project[];
}

type Props = {
  details: Details;
};

const Projects: React.FC<Props> = ({ details }) => {
  let contents: JSX.Element[] = [];  
  let count = 0;
  
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setDisplay(true);
  }, []);

  details.contents.forEach((project, index) => {
    let delay = 100 * count++;
    contents.push(
      <Zoom
        className="zoomItem"
        in={display}
        style={{ transitionDelay: display ? `${delay}ms` : "0ms" }}
        key={index}
      >
        <Grid item xs={12} sm={12} md={4}>
          <Card
            sx={{ maxWidth: 345 }}
            onClick={() => {
              window.open(project.url, "_blank");
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={project.img}
                alt={project.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Zoom>
    );
  });

  return (
    <div id="projectMainContent">
      <div className="title">
        <span>{details.title}</span>
      </div>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {contents}
      </Grid>
    </div>
  );
};

export default Projects;
