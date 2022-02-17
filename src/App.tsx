import React, { useEffect, useState } from "react";
import "./App.css";
import AddPersonForm from "./components/AddPersonForm";
import Person from "./components/Person";
import TableComponent from "./components/TableComponent";
import database from "./DBConnection";

const App: React.FC = () => {
  /*const example:Person[] = [
    { id: 1, firstName: "Jukka", lastName: "Virtanen", age: 30 },
    { id: 2, firstName: "Minna", lastName: "Kuula", age: 22 },
    { id: 3, firstName: "Neea", lastName: "Lattu", age: 27 },
  ];*/
  const [data, setData] = useState<Person[]>([]);

  const handleAdd = async (e: React.FormEvent, person: Person) => {
    e.preventDefault();
    await database.addPerson({
      firstName: person.firstName,
      lastName: person.lastName,
      age: person.age,
    });
    await getData();
  };

  const handleEdit = async (person: Person) => {
    await database.modifyPerson(person);
    await getData();
  };

  const handleDelete = async (person: Person) => {
    if (person.id) {
      await database.deletePerson(person.id);
      await getData();
    }
  };

  const getData = async () => {
    const d = await database.getAll();
    console.log(d);
    setData(d);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <h1 className="header">Names</h1>
      <AddPersonForm handleAdd={handleAdd} />
      <TableComponent
        data={data}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
