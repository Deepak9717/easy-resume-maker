import React, { useRef } from "react";
import html2pdf from "html2pdf.js";
import { FaDownload } from "react-icons/fa";

import { useData } from "./Context";
import TwoColumn from "./Templates/TwoColumn";
import Minimalist from "./Templates/Minimalist";

export default function DownloadResume() {
  const { tempChange } = useData();
  const componentRef = useRef(null);

  function handleDownloadPDF() {
    const element = componentRef.current;
    const opt = {
       filename: "myresume.pdf",
       html2canvas: {scale : 3},
    }
    html2pdf().from(element).set(opt).save();
  }

  return (
    <div>
      <button
        type="button"
        className="download-btn"
        onClick={handleDownloadPDF}
      >
        <FaDownload />
        <span>Download PDF</span>
        <div style={{ display: "none" }}>
          <div id="down-resume" ref={componentRef}>
            {tempChange ? <Minimalist /> : <TwoColumn />}
          </div>
        </div>
      </button>
    </div>
  );
}
