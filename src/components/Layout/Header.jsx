import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import logo from "/src/assets/cv-logo.png";
import DownloadResume from "../DownloadResume";

export default function Header() {
  const location = useLocation();
  const [route, setRoute] = useState(false);

  useEffect(() => {
    setRoute(location.pathname === "/create-resume");
  }, [location]);

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
        <h3>Eazy Resume Maker</h3>
      </div>
      {route && <DownloadResume />}
    </div>
  );
}
