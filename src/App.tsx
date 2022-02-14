import React from "react";
import "./App.css";
import InputField from "./components/InputField";

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
      <InputField></InputField>
    </div>
  );
};

export default App;
