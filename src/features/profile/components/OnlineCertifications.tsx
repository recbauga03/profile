import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Chip, Zoom } from "@mui/material";
import { useEffect, useState } from "react";

import "../styles/onlineCert.css";
import PDFViewerDialog from "../../../components/common/PDFViewerDialog";

interface Content {
  title: string;
  type?: string;
  link: string;
}

interface Source {
  title: string;
  certificates: Content[];
}

interface Details {
  title: string;
  sources: Source[];
}

type Props = {
  details: Details;
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const OnlineCertifications: React.FC<Props> = ({ details }) => {
  const [value, setValue] = useState(0);
  const [display, setDisplay] = useState(false);
  const [pdfOpen, setPDFOpen] = useState(false);
  const [pdfTitle, setPDFTitle] = useState("");
  const [pdf, setPDF] = useState("");

  useEffect(() => {
    setDisplay(true);
    setPDFOpen(false);
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleCertClick = (title: string, link: string, type?: string) => {
    console.log({link});

    if (type && type === "pdf") {
      setPDFOpen(true);
      setPDFTitle(title);
      setPDF(link);
      return;
    }

    setPDFOpen(false);
    window.open(link, "_blank");
  };

  const handlePDFClose = () => {
    setPDFOpen(false);
  };

  let certifications: JSX.Element[] = [];
  let sources: JSX.Element[] = [];

  details.sources.forEach((source, index) => {
    sources.push(<Tab label={source.title} key={index} />);
    let count = 0;
    let content: JSX.Element[] = [];

    source.certificates.forEach((cert, index) => {
      let delay = 50 * count++;

      content.push(
        <Zoom
          className="zoomItem"
          in={display}
          style={{ transitionDelay: display ? `${delay}ms` : "0ms" }}
          key={index}
        >
          <div>
            <Chip
              label={cert.title}
              variant="outlined"
              className="certItem"
              key={index}
              onClick={() => {
                handleCertClick(cert.title, cert.link, cert.type);
              }}
            />
          </div>
        </Zoom>
      );
    });

    certifications.push(
      <TabPanel value={value} index={index} key={index}>
        {content}
      </TabPanel>
    );
  });

  return (
    <div id="onlineCertMainContent">
      <div className="title">
        <span>{details.title}</span>
      </div>

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange} centered>
            {sources}
          </Tabs>
        </Box>
        {certifications}
      </Box>

      <PDFViewerDialog
        onClose={handlePDFClose}
        open={pdfOpen}
        pdf={pdf}
        title={pdfTitle}
      />
    </div>
  );
};

export default OnlineCertifications;
