import React from "react";

const Members = props => {
  return (
    <div className="member-list">
      {props.teamMembers.map(member => (
        <div className="member" key={member.id}>
          <h2>{member.name}</h2>
          <p>{member.email}</p>
          <p>{member.role}</p>
          <button>Edit Member</button>
        </div>
      ))}
    </div>
  );
};

export default Members;
