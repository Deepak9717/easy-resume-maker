import { useState } from "react";
import { useData } from "../Context";

export default function EduDetails() {
  const { educationList, setEducationList } = useData();
  const [education, setEducation] = useState({
    degree: "",
    school: "",
    startYr: "",
    endYr: "",
    grade: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    const updateEdu = { ...education, id: educationList.length + 1 };
    const updateEduList = [...educationList, updateEdu];

    setEducationList(updateEduList);
    setEducation({
      degree: "",
      school: "",
      startYr: "",
      endYr: "",
      grade: "",
    });
  }

  function handleChange(e) {
    let updateEducation = { ...education, [e.target.name]: e.target.value };
    setEducation(updateEducation);
  }

  return (
    <>
      <form className="section" onSubmit={(e) => handleSubmit(e)}>
        <h6 className="section-title">Education</h6>
        <div className="section-body">
          <div>
            <label htmlFor="school">Degree</label>
            <input
              type="text"
              name="degree"
              value={education.degree}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label htmlFor="school">School</label>
            <input
              type="text"
              name="school"
              value={education.school}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label htmlFor="startDate">Start date</label>
            <input
              type="month"
              name="startYr"
              value={education.startYr}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label htmlFor="endYr">End date</label>
            <input
              type="month"
              name="endYr"
              value={education.endYr}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label htmlFor="grade">Grade</label>
            <input
              type="text"
              name="grade"
              value={education.grade}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <button className="add-btn" type="submit">
          Add Education
        </button>
      </form>
    </>
  );
}
