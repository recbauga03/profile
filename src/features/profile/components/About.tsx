import { Typography } from "@mui/material";
import "../styles/about.css";

interface Content {
  title: string;
  content: string[];
}

interface Details {
  title: string;
  content: Content[];
}

type Props = {
  details: Details;
};

const About: React.FC<Props> = ({ details }) => {
  let contents: JSX.Element[] = [];
  let counter = 0;

  details.content.forEach((desc) => {
    contents.push(<Typography variant="h6" className="title" key={++counter}>{desc.title}</Typography>);

    desc.content.forEach((text) => {
      contents.push(<Typography variant="subtitle1" className="content" key={++counter}>{text}</Typography>);
    });
  });

  return (
    <div id="aboutMainContent">
      <div className="title">
        <span>{details.title}</span>
        {contents}
      </div>
    </div>
  );
};

export default About;
