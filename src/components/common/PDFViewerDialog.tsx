
import { useEffect, useState } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { Document, Page, pdfjs } from "react-pdf";
import "../../styles/pdfViewerDialog.css";

import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

export interface Props {
  open: boolean;
  title: string;
  pdf: string;
  onClose: () => void;
}

const PDFViewerDialog: React.FC<Props> = ({ open, title, pdf, onClose }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const handleClose = () => {
    onClose();
  };

  const onDocumentLoadSuccess = (num: any) => {
    setNumPages(num);
  };

  console.log(window.location.origin + pdf);
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{title}</DialogTitle>

      <Document
        file={pdf}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={console.error}
      >
        <Page pageNumber={pageNumber} />
      </Document>
    </Dialog>
  );
};

export default PDFViewerDialog;
