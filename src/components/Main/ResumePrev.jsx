import React, { useState } from "react";
import { useData } from "../Context";

import Minimalist from "../Templates/Minimalist";
import TwoColumn from "../Templates/TwoColumn";

export default function ResumePrev() {
  const {tempChange, setTempChange} = useData();

  return (
    <>
      <div className="preview">
        <div className="dropdown">
          <span>Select Template : </span>
          <select onChange={() => setTempChange(!tempChange)}>
            <option value={false}>Two-Column</option>
            <option value={true}>Minimalist</option>
          </select>
        </div>
        {tempChange ? <Minimalist /> : <TwoColumn />}
      </div>
    </>
  );
}
