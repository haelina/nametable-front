import React from "react";
import "./App.css";
import AddPersonForm from "./components/AddPersonForm";

interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

const App: React.FC = () => {
  // const example: Person = { firstName: "Jukka", lastName: "Virtanen", age: 30 };
  return (
    <div className="App">
      <h1 className="header">Names</h1>
      <AddPersonForm />
    </div>
  );
};

export default App;
