import React from "react";
import "./AddPersonForm.css";

const AddPersonForm: React.FC = () => {
  return (
    <form className="inputs">
      <input className="firstname" type="input" placeholder="First Name" />
      <input className="lastname" type="input" placeholder="Last Name" />
      <input className="age" type="input" placeholder="Age" />
      <button className="submit_new" type="submit">
        Add person
      </button>
    </form>
  );
};

export default AddPersonForm;
