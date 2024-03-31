import React from "react";
import { useData } from "../Context";

export default function TempColor() {
  const { tempColor, setTempColor } = useData();
  const options = [
    "purple",
    "green",
    "cyan",
    "gray",
    "red",
    "orange",
    "#F15BA6",
    "#5a1804",
  ];

  function handleChange(e) {
    setTempColor({
      ...tempColor,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <div className="color">
        <div>
          <label htmlFor="background">Header Color</label>
          <input
            type="color"
            name="background"
            onChange={(e) => handleChange(e)}
            value={tempColor.background}
          />
        </div>
        <div>
          <label htmlFor="color">Header Text Color</label>
          <input
            type="color"
            name="color"
            onChange={(e) => handleChange(e)}
            value={tempColor.color}
          />
        </div>
        <div>
          <label htmlFor="skillBg">Skill Background Color</label>
          <input
            type="color"
            name="skillBg"
            onChange={(e) => handleChange(e)}
            value={tempColor.skillBg}
          />
        </div>
        <div>
          <label htmlFor="skillColor">Skill Text Color</label>
          <input
            type="color"
            name="skillColor"
            onChange={(e) => handleChange(e)}
            value={tempColor.skillColor}
          />
        </div>
      </div>
    </>
  );
}
