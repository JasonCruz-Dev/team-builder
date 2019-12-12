import React from "react";

function Forms(props) {
  const { name, email, role } = props.teamForm;
  const { onNameChange, onEmailChange, onRoleChange, onFormSubmit } = props;

  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor='nameInput'>Name</label>
      <input value={name} onChange={onNameChange} id='nameInput' type='text' />

      <label htmlFor='emailInput'>Email</label>
      <input value={email} onChange={onEmailChange} id='emailInput' type='text' />

      <label htmlFor='roleInput'>Email</label>
      <input value={role} onChange={onEmailChange} id='roleInput' type='text' />

      <button>onSubmit</button>
    </form>
  );
}

export default Form;
