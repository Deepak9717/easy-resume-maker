import React from "react";
import { useData } from "../Context";

export default function TwoColumn() {
  const { person, educationList, projects, skills, workList, tempColor } =
    useData();

  return (
    <>
      <div className="template">
        <div
          className="column-head"
          style={{ background: tempColor.background, color: tempColor.color }}
        >
          <h2>{person.name}</h2>
          <h4>{person.role}</h4>
        </div>

        <div className="col-body">
          <div className="left-body">
            <div className="temp-section contact">
              <h2 className="temp-title">Contact</h2>
              <p>{person.phone}</p>
              <p>{person.email}</p>
              <p>{person.linkedin}</p>
            </div>

            <div className="temp-section">
              <h2 className="temp-title">Skills</h2>
              <div className="skills">
                {skills.map((skill) => (
                  <span
                    key={skill.id}
                    style={{
                      background: tempColor.skillBg,
                      color: tempColor.skillColor,
                    }}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="right-body">
            <div className="temp-section">
              <h2 className="temp-title">Summary</h2>
              <p>{person.intro}</p>
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
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.url}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
