import React, { useState } from "react";

const Form = props => {
  const [member, setMember] = useState({
    name: "",
    email: "",
    role: ""
  });

  const handleFormChange = event => {
    setMember({
      ...member,
      [event.target.name]: event.target.value
    });
    console.log(event.target.name);
  };

  const SubmitForm = event => {
    event.preventDefault();
    props.addNewMember(member);
    setMember({ name: "", email: "", role: "" });
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={SubmitForm}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          onChange={handleFormChange}
          type="text"
          placeholder=" Name"
          name="name"
          value={member.name}
        />

        <label htmlFor="email">Email: </label>
        <input
          id="email"
          onChange={handleFormChange}
          type="text"
          placeholder=" JohnSmith@email.com"
          name="email"
          value={member.email}
        />

        <label htmlFor="role">Role: </label>
        <input
          id="role"
          onChange={handleFormChange}
          type="text"
          placeholder=" Developer"
          name="role"
          value={member.role}
        />

        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
};

export default Form;
