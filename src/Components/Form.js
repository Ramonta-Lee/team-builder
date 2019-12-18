import React, { useState, useEffect } from "react";

const Form = props => {
  const initialState = {
    name: "",
    email: "",
    role: ""
  };
  const [member, setMember] = useState(initialState);

  const handleFormChange = event => {
    setMember({
      ...member,
      [event.target.name]: event.target.value
    });
    console.log(event.target.name);
  };

  // const resetForm = setMember.bind(this, initialState)
  const resetForm = () => {
    setMember(initialState);
  };

  const SubmitForm = event => {
    event.preventDefault();
    props.addNewMember(member);
    //this setMember resets the member back to initial state
    // setMember({ name: "", email: "", role: "" });
    resetForm();
  };

  // useEffect((props) => {

  //   return () => {
  //     cleanup
  //   };
  // }, [input])

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
