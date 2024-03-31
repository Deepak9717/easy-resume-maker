import { useState } from "react";
import { useData } from "../Context";
import { FaTrash } from "react-icons/fa"

export default function Skills() {
  const [clicked, setClicked] = useState(false);
  const [skill, setSkill] = useState("");
  const { skills, setSkills } = useData();

  const handleSubmit = (e) => {
    e.preventDefault();
    setClicked(true);

    if (skill != "") {
      const newSkill = {
        id: skills.length + 1,
        name: skill,
      };
      setSkills([...skills, newSkill]);
    }
    setSkill("");
  };

  const deleteSkill = (id) => {
    setSkills(skills.filter((elem) => elem.id !== id));
  };
  return (
    <>
      <form className="section" onSubmit={(e) => handleSubmit(e)}>
        <h6 className="section-title">Skills</h6>
        <div className="section-body">
          <div>
          <input
            type="text"
            value={skill}
            name="skill"
            onChange={(e) => setSkill(e.target.value)}
            placeholder="Skill..."

          />
          <button type="submit" className="add-btn">
            Add Skill
          </button>
          </div>
          {clicked && skills.length === 0 && (
            <div className="alert-msg">Please enter at least one skill</div>
          )}
        </div>

        {skills.map((skill, index) => (
          <div key={index} className="list">
            <span>{skill.name}</span>
            <button onClick={() => deleteSkill(skill.id)}>
              <FaTrash />
            </button>
          </div>
        ))}
      </form>
    </>
  );
}
