import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Members from "./Components/Members";

function App() {
  const [teamMember, setTeamMember] = useState([
    {
      id: 1,
      name: "Ramonta Lee",
      email: "Viola4lfe@gmail.com",
      role: "Full-Stack Web-Developer"
    }
  ]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setTeamMember([...teamMember, newMember]);
  };

  return (
    <div className="App">
      <h1>My Team Members</h1>
      <Form addNewMember={addNewMember} />
      <Members teamMember={teamMember} />
    </div>
  );
}

export default App;
