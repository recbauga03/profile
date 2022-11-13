import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../styles/experiences.css";

interface Content {
  date: string;
  icon: any;
  title: string;
  subtitle: string;
  link: string;
  description: string;
}

interface Details {
  title: string;
  contents: Content[];
}

type Props = {
  details: Details;
};

const Experiences: React.FC<Props> = ({ details }) => {
  let contents: JSX.Element[] = [];

  details.contents.forEach((record, index) => {
    contents.push(
      <VerticalTimelineElement
        key={"timelineElement" + index}
        className="vertical-timeline-element--work"
        date={record.date}
        onTimelineElementClick={() => {
          window.open(record.link, "_blank");
        }}
        icon={<div className="timelineIcon" onClick={() => {
          window.open(record.link, "_blank");
        }}><record.icon /></div>}
      >
        <h3 className="vertical-timeline-element-title">{record.title}</h3>
        <h4 className="vertical-timeline-element-subtitle">
          {record.subtitle}
        </h4>
        <p>{record.description}</p>
      </VerticalTimelineElement>
    );
  });

  return (
    <div id="timelineMainContent">
      <div className="title">
        <span>{details.title}</span>
      </div>
        <VerticalTimeline layout="1-column-left">{contents}</VerticalTimeline>      
    </div>
  );
};

export default Experiences;
