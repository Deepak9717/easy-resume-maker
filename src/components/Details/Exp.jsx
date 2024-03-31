import { useState } from "react";
import { useData } from "../Context";

export default function Exp() {
  const { workList, setWorkList } = useData();
  const [work, setWork] = useState({
    position: "",
    company: "",
    startYr: "",
    endYr: "",
    description: "",
  });

  function handleChange(e) {
    let newWork = { ...work, [e.target.name]: e.target.value };
    setWork(newWork);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newWork = { ...work, id: workList.length + 1 };
    const newWorkList = [...workList, newWork];

    setWorkList(newWorkList);
    setWork({
        position: "",
        company: "",
        startYr: "",
        endYr: "",
        description: "",
    });
  }

  return (
    <>
      <form className="section" onSubmit={(e) => handleSubmit(e)}>
        <h6 className="section-title">Work Experience</h6>
        <div className="section-body">
          <div>
            <label htmlFor="position">Position</label>
            <input
              type="text"
              name="position"
              value={work.position}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label htmlFor="company">Company Name</label>
            <input
              type="text"
              name="company"
              value={work.company}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label htmlFor="startYr">Starting Date</label>
            <input
              type="month"
              name="startYr"
              value={work.startYr}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label htmlFor="endYr">Ending Date</label>
            <input
              type="month"
              name="endYr"
              value={work.endYr}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              name="description"
              value={work.description}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <button className="add-btn" type="submit">
          Add Experience
        </button>
      </form>
    </>
  );
}
