import React from "react";
import { useData } from "../Context";

export default function Minimalist() {
  const { person, educationList, projects, skills, workList } = useData();
  return (
    <>
      <div className="minimalist template">
        <div className="temp-head">
          <h2>{person.name}</h2>
          <div>
            <span>{person.email}</span>|
            <span>{person.phone}</span>|
            <span>{person.linkedin}</span>
          </div>
        </div>

        <div className="temp-section">
          <h2 className="temp-title">Education</h2>
          <ul>
            {educationList.map((education) => (
              <li key={education.id} className="temp-content">
                <div>
                  <h4>{education.degree}</h4>
                  <p>{education.startYr + " - " + education.endYr}</p>
                </div>
                <p>{education.school}</p>
                <p>{education.grade}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="temp-section">
          <h2 className="temp-title">Experience</h2>
          <ul>
            {workList.map((work) => (
              <li key={work.id} className="temp-content">
                <div>
                  <h4>{work.position}</h4>
                  <p>{work.startDate + " - " + work.endDate}</p>
                </div>
                <p>{work.company}</p>
                <p>{work.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="temp-section">
          <h2 className="temp-title">Projects</h2>
          <ul>
            {projects.map((project) => (
              <li key={project.id} className="temp-content">
                <h4>{project.name}</h4>
                <p>{project.description}</p>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  {project.url}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="temp-section">
          <h2 className="temp-title">Skills</h2>
          <div style={{display: "flex", flexWrap: "wrap", gap: "0.5rem"}}>
            {skills.map((skill) => (
              <h4 key={skill.id}>{skill.name}</h4>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
