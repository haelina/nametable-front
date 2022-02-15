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
  const [nextId, setNextId] = useState<number>(data.length + 1);

  const handleAdd = (e: React.FormEvent, person: Person) => {
    e.preventDefault();
    setData([...data, person]);
    setNextId(nextId + 1);
  };

  const handleDelete = (person: Person) => {
    const updatedData = data.filter((obj) => obj !== person);
    setData(updatedData);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="App">
      <h1 className="header">Names</h1>
      <AddPersonForm nextId={nextId} handleAdd={handleAdd} />
      <TableComponent data={data} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
