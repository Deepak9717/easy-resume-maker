import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useData } from "../Context";

export default function Projects() {
  const [clicked, setClicked] = useState(false);
  const { projects, setProjects } = useData();
  const [project, setProject] = useState({
    name: "",
    description: "",
    url: "",
  });

  const deleteProject = (id) => {
    setProjects(projects.filter((elem) => elem.id !== id));
  };

  function handleChange(e) {
    let newProject = { ...project, [e.target.name]: e.target.value };
    setProject(newProject);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setClicked(true);

    if (project.name != "" && project.description != "") {
      const newProject = { ...project, id: projects.length + 1 };
      const newProjects = [...projects, newProject];

      setProjects(newProjects);
    }
    setProject({
      name: "",
      description: "",
      url: "",
    });
  }

  return (
    <>
      <form className="section" onSubmit={(e) => handleSubmit(e)}>
        <h6 className="section-title">Projects</h6>
        <div className="section-body">
          <div>
            <label htmlFor="name">Project Name</label>
            <input
              type="text"
              name="name"
              value={project.name}
              onChange={(e) => handleChange(e)}
              placeholder="Ex: E-commerce site"
            />
          </div>
          <div>
            <label htmlFor="description">Project Description</label>
            <textarea
              type="text"
              name="description"
              value={project.description}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label htmlFor="url">Project URL</label>
            <input
              type="url"
              name="url"
              value={project.url}
              onChange={(e) => handleChange(e)}
              placeholder="Ex: https://project.com"
            />
          </div>
        </div>
        <button className="add-btn" type="submit">
          Add Project
        </button>
        {clicked && projects.length === 0 && (
          <div className="alert-msg">Please enter project</div>
        )}

        {projects.map((project, index) => (
          <div key={index} className="list">
            <span>{project.name}</span>
            <button onClick={() => deleteProject(project.id)}>
              <FaTrash />
            </button>
          </div>
        ))}
      </form>
    </>
  );
}
