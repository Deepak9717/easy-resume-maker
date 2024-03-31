import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [person, setPerson] = useState({
    name: "Deepak Kumar",
    role: "Web Developer",
    intro:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, dolor, expedita ab repellendus iusto, distinctio cum minus omnis delectus vitae a unde maiores quae nisi tempore mollitia tempora odio fuga.",
    email: "abc@gmail.com",
    phone: "9717696939",
    linkedin: "deepakkumar07.linkedin",
  });
  const [workList, setWorkList] = useState([
    {
      position: "Web Developer",
      id: 1,
      company: "ABC",
      startDate: "05/2024",
      endDate: "09/2026",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, dolor, expedita ab repellendus iusto, distinctio cum minus omnis delectus vitae a unde maiores quae nisi tempore mollitia tempora odio fuga.",
    },
    {
      id: 2,
      position: "Web Developer",
      company: "ABC",
      startDate: "25/10/2026",
      endDate: "15/07/2028",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, dolor, expedita ab repellendus iusto, distinctio cum minus omnis delectus vitae a unde maiores quae nisi tempore mollitia tempora odio fuga.",
    },
  ]);
  const [skills, setSkills] = useState([
    { id: 1, name: "NextJs" },
    { id: 2, name: "ReactJS" },
    { id: 3, name: "TailwindCSS" },
    { id: 4, name: "BootstrapCSS" },
    { id: 5, name: "JavaScript" },
    { id: 6, name: "AngularJS" },
    { id: 7, name: "NodeJS" },
    { id: 8, name: "VueJS" },
  ]);
  const [educationList, setEducationList] = useState([
    {
      id: 1,
      school: "Adarsh School, New Delhi",
      degree: "Higher Secondary School",
      grade: 9,
      startYr: "04/2019",
      endYr: "03/2020",
    },
    {
      id: 2,
      school: "P.G.D.A.V. College, New Delhi",
      degree: "Bachelor of Science Computer Science (Hons.)",
      grade: 7.9,
      startYr: "08/2020",
      endYr: "05/2023",
    },
  ]);
  const [projects, setProjects] = useState([
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quisquam magnam illum laboriosam aut vero? Dolore optio aperiam sapiente, reiciendis illum exercitationem corrupti vitae quos laudantium quod, animi, quas nisi?",
      id: 1,
      name: "To Do List",
      url: "http://www.todo.com",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quisquam magnam illum laboriosam aut vero? Dolore optio aperiam sapiente, reiciendis illum exercitationem corrupti vitae quos laudantium quod, animi, quas nisi?",
      id: 2,
      name: "Resume Maker",
      url: "http://www.resume-maker-online.com",
    },
  ]);
  const [tempColor, setTempColor] = useState({
    background: "#0000ff",
    color: "#ffffff",
    skillColor: "#ffffff",
    skillBg: "#0000ff",
  });
  const [tempChange, setTempChange] = useState(false);

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
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
