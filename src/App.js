import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Members from "./Components/Members";

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: "Ramonta Lee",
      email: "Viola4lfe@gmail.com",
      role: "Full-Stack Web-Developer"
    },
    {
      id: 2,
      name: "Moses Samuel",
      email: "MosesSamuel@email.com",
      role: "Full-Stack Web-Developer"
    }
  ]);

  const addNewMember = member => {
    console.log(member);
    const newMember = {
      id: Date.now(),
      //object spread
      ...member
      // name: member.name,
      // email: member.email,
      // role: member.role
    };
    setTeamMembers([...teamMembers, newMember]);
  };

  // const [memberToEdit, setMemberToEdit] = useState();
  // function editMember(){
  //   setMemberToEdit()
  // }

  return (
    <div className="App">
      <h1>My Team Members</h1>
      <Form addNewMember={addNewMember} />
      <Members teamMembers={teamMembers} />
    </div>
  );
}

export default App;
