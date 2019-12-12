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
