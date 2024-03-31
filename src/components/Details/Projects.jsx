import React,{ useState } from "react";
import { useData } from "../Context";

export default function Projects() {
  const { projects, setProjects } = useData();
  const [project ,setProject] = useState({
      name: "",
      description: "",
      url: "",
  });

  function handleChange(e){
    let newProject = { ...project, [e.target.name] : e.target.value };
    setProject(newProject);

  }

  function handleSubmit(e) {
    e.preventDefault();

    const newProject = { ...project, id: projects.length + 1 };
    const newProjects = [...projects, newProject];

    setProjects(newProjects);
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
            />
          </div>
        </div>
        <button className="add-btn" type="submit">
          Add Project
        </button>
      </form>
    </>
  );
}
