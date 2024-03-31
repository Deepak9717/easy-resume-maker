import { useState } from "react";
import { useData } from "../Context";
import { FaTrash } from "react-icons/fa";

export default function EduDetails() {
  const [clicked, setClicked] = useState(false);
  const { educationList, setEducationList } = useData();
  const [education, setEducation] = useState({
    degree: "",
    school: "",
    startYr: "",
    endYr: "",
    grade: "",
  });

  const deleteEducation = (id) => {
    setEducationList(educationList.filter((elem) => elem.id !== id));
  };

  function handleSubmit(e) {
    e.preventDefault();
    setClicked(true);

    if (education.degree != "" && education.school != "") {
      const updateEdu = { ...education, id: educationList.length + 1 };
      const updateEduList = [...educationList, updateEdu];

      setEducationList(updateEduList);
    }

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
              placeholder="Ex: B.Sc.Chemistry"
            />
          </div>
          <div>
            <label htmlFor="school">School</label>
            <input
              type="text"
              name="school"
              value={education.school}
              onChange={(e) => handleChange(e)}
              placeholder="Ex: Boston University"
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
              placeholder="CGPA"
            />
          </div>
        </div>
        <button className="add-btn" type="submit">
          Add Education
        </button>
        {clicked && educationList.length === 0 && (
          <div className="alert-msg">Please enter education details</div>
        )}

        {educationList.map((education, index) => (
          <div key={index} className="list">
            <span>{education.degree + ", " + education.school + "..."}</span>
            <button onClick={() => deleteEducation(education.id)}>
              <FaTrash />
            </button>
          </div>
        ))}
      </form>
    </>
  );
}
