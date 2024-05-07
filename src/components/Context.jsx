import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [person, setPerson] = useState({
    name: "",
    role: "",
    intro: "",
    email: "",
    phone: "",
    linkedin: "",
  });
  const [workList, setWorkList] = useState([]);
  const [skills, setSkills] = useState([]);
  const [educationList, setEducationList] = useState([]);
  const [projects, setProjects] = useState([]);
  const [tempColor, setTempColor] = useState({
    background: "#0000ff",
    color: "#ffffff",
    skillColor: "#ffffff",
    skillBg: "#0000ff",
  });
  const [tempChange, setTempChange] = useState(false);
  const [route, setRoute] = useState(false);

  const value = {
    person,
    setPerson,
    educationList,
    setEducationList,
    skills,
    setSkills,
    workList,
    setWorkList,
    projects,
    setProjects,
    tempColor,
    setTempColor,
    tempChange,
    setTempChange,
    route,
    setRoute,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
