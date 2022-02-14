import React, { useEffect, useState } from "react";
import "./App.css";
import AddPersonForm from "./components/AddPersonForm";
import Person from "./components/Person";
import TableComponent from "./components/TableComponent";

const App: React.FC = () => {
  const [data, setData] = useState<Person[]>([
    { id: 1, firstName: "Jukka", lastName: "Virtanen", age: 30 },
    { id: 2, firstName: "Minna", lastName: "Kuula", age: 22 },
    { id: 3, firstName: "Neea", lastName: "Lattu", age: 27 },
  ]);

  const handleAdd = (e: React.FormEvent, person: Person) => {
    e.preventDefault();
    console.log("Handling add new person in App component");
    console.log(`${person.firstName} ${person.lastName} ${person.age}`);
    setData([...data, person]);
  };

  useEffect(() => {
    console.log("data changed.", data.length);
  }, [data]);

  return (
    <div className="App">
      <h1 className="header">Names</h1>
      <AddPersonForm handleAdd={handleAdd} />
      <TableComponent data={data} />
    </div>
  );
};

export default App;
