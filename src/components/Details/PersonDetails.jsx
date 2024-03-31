import React from "react";
import { useData } from "../Context";

export default function PersonDetails() {
  const { person, setPerson } = useData();

  function handleChange(e) {
    setPerson({ ...person, [e.target.name]: e.target.value });
  }
  return (
    <>
      <div className="section">
        <h5 className="section-title">Personal Details</h5>

        <div className="section-body">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={person.name}
              onChange={handleChange}
              placeholder="Ex: John"
            />
          </div>
          <div>
            <label htmlFor="role">Role</label>
            <input
              type="text"
              name="role"
              value={person.role}
              onChange={handleChange}
              placeholder="Ex: Data Scientist"
            />
          </div>
          <div>
            <label htmlFor="intro">Summary</label>
            <textarea
              type="text"
              name="intro"
              value={person.intro}
              onChange={handleChange}
              placeholder="Write about your career objective or yourself"
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={person.email}
              onChange={handleChange}
              placeholder="abc@gmail.com"
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="number"
              name="phone"
              value={person.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="linkedin">LinkedIn</label>
            <input
              type="text"
              name="linkedin"
              value={person.linkedin}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}
