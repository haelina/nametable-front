import React, { FormEvent, useState } from "react";
import "./AddPersonForm.css";
import Person from "./Person";

interface NewPersonProps {
  handleAdd: (e: React.FormEvent, p: Person) => void;
}

const AddPersonForm: React.FC<NewPersonProps> = ({ handleAdd }) => {
  const [person, setPerson] = useState<Person>({
    firstName: "",
    lastName: "",
    age: -1,
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.name === "age" && e.currentTarget.value === "") {
      setPerson({ ...person, [e.currentTarget.name]: -1 });
    } else {
      setPerson({ ...person, [e.currentTarget.name]: e.currentTarget.value });
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    handleAdd(e, person);
    resetFields();
  };

  const resetFields = () => {
    setPerson({
      firstName: "",
      lastName: "",
      age: -1,
    });
  };

  const validPerson = (): boolean => {
    if (
      person.firstName.length >= 2 &&
      person.lastName.length >= 2 &&
      person.age >= 0 &&
      person.age < 115
    ) {
      return true;
    }
    return false;
  };

  return (
    <form className="inputs" onSubmit={(event) => onSubmit(event)}>
      <input
        className="firstname"
        type="input"
        name="firstName"
        placeholder="First Name"
        value={person.firstName}
        onChange={handleChange}
      />
      <input
        className="lastname"
        type="input"
        name="lastName"
        placeholder="Last Name"
        value={person.lastName}
        onChange={handleChange}
      />
      <input
        className="age"
        type="input"
        name="age"
        placeholder="Age"
        value={person.age > -1 ? person.age : ""}
        onChange={handleChange}
      />
      <button
        disabled={!validPerson()}
        className={`${validPerson() ? "submit_new" : "submit_disabled"}`}
        type="submit"
      >
        Add person
      </button>
    </form>
  );
};

export default AddPersonForm;
