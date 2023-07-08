import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { pdfjs, Document, Page } from "react-pdf";

export default function Resume({ screen, setScreen }) {
  const [file, setFile] = useState("");
  const [numPages, setNumPages] = useState();

  const options = {
    cMapUrl: "cmaps/",
    standardFontDataUrl: "standard_fonts/",
  };

  function onFileChange(event) {
    const { files } = event.target;

    if (files && files[0]) {
      setFile(files[0] || null);
    }
  }

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }, []);

  if (screen === "editBio") {
    return (
      <div className="Example__container">
        <div className="Example__container__load">
          <label htmlFor="file">{!file && "Upload Resume"}</label>
          <input onChange={onFileChange} accept=".pdf" type="file" />
        </div>
        <div className="Example__container__document">
          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
          >
            {Array.from(new Array(1), (el, index) => (
              <Page
                scale={0.3}
                key={`page_${index + 1}`}
                pageNumber={index + 1}
              />
            ))}
          </Document>
        </div>
      </div>
    );
  }

  return (
    <Card sx={{ minWidth: 275, mt: 3 }}>
      <CardContent>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "15px",
          }}
        >
          <Typography variant="h5" component="div">
            Resume
          </Typography>
          <ChevronRightIcon />
        </div>
      </CardContent>
    </Card>
  );
}
