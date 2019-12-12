import React, { useState } from "react";
import "./App.css";
import uuid from "uuid";
import Form from "./components/Form";

const intitalTeamList = [
  {
    id: uuid(),
    name: `Jason`,
    email: `jcruz.bmt@gmail.com`,
    role: `Software Engineer`
  }
];

const initialTeamForm = [
  {
    name: "",
    email: "",
    role: ""
  }
];

function App(props) {
  const [teamList, setTeamList] = useState(intitalTeamList);
  const [teamForm, setTeamForm] = useState(initialTeamForm);

  const onNameChange = e => {
    setTeamForm({
      name: e.target.value,
      email: teamForm.email,
      role: teamForm.role
    });
  };

  const onEmailChange = e => {
    setTeamForm({
      name: teamForm.name,
      email: e.target.value,
      role: teamForm.role
    });
  };

  const onRoleChange = e => {
    setTeamForm({
      name: teamForm.name,
      email: teamForm.email,
      role: e.target.value
    });
  };

  const onFormSubmit = e => {
    e.preventDefault();

    const newMember = {
      id: uuid(),
      name: teamForm.name,
      email: teamForm.email,
      role: teamForm.role
    };
    const newTeamList = teamList.concat(newMember);

    setTeamList(newTeamList);
    setTeamForm(initialTeamForm);
  };

  return (
    <div className='App'>
      <Form
        teamForm={teamForm}
        onFormSubmit={onFormSubmit}
        onNameChange={onNameChange}
        onEmailChange={onEmailChange}
        onRoleChange={onRoleChange}
      />
    </div>
  );
}

export default App;
