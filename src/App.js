import React from "react";
import "./App.css";
import Form from "./components/Form";

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
