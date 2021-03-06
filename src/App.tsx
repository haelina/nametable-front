import React, { useEffect, useState } from "react";
import "./App.css";
import AddPersonForm from "./components/AddPersonForm";
import Person from "./components/Person";
import sortArray from "./components/Sorter";
import TableComponent from "./components/TableComponent";
import database from "./DBConnection";

const App: React.FC = () => {
  const [data, setData] = useState<Person[]>([]);
  const [sortBy, setSortBy] = useState<string>("firstName");
  const [sortOrder, setSortOrder] = useState<string>("asc");

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

  const handleSorting = (sortField: string, order: string) => {
    if (sortBy !== sortField || sortOrder !== order) {
      setData(sortArray(data, sortField, order));
      setSortBy(sortField);
      setSortOrder(order);
    }
  };

  const getData = async () => {
    const d = await database.getAll();
    sortArray(d, sortBy, sortOrder);
    setData(d);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <div className="header">
        <h1>Persons</h1>
      </div>

      <AddPersonForm handleAdd={handleAdd} />
      <TableComponent
        data={data}
        sortBy={sortBy}
        sortOrder={sortOrder}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleSorting={handleSorting}
      />
    </div>
  );
};

export default App;
