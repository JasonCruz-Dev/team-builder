import React from "react";
import "./App.css";
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

function App() {
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

  return (
    <div className='App'>
      <Form
        teamForm={teamForm}
        onFormSubmit={onFormSubmit}
        onNameChange={onNameChange}
        onEmailChange={onEmailChange}
        onTitleChange={onTitleChange}
      />
    </div>
  );
}

export default App;
