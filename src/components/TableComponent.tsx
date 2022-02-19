import React, { useState } from "react";
import Person from "./Person";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import "./TableComponent.css";

interface TableProps {
  data: Person[];
  handleEdit: (p: Person) => void;
  handleDelete: (p: Person) => void;
}

const TableComponent: React.FC<TableProps> = ({
  data,
  handleEdit,
  handleDelete,
}) => {
  const columnNames: string[] = ["First name", "Last name", "Age"];
  const [editingPerson, setEditingPerson] = useState<Person | null>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  //const [sortColumn, setSortColumn] = useState("firstName");

  const modifyPerson = () => {
    if (editingPerson) {
      if (
        editingPerson.firstName === firstName &&
        editingPerson.lastName === lastName &&
        editingPerson.age === age
      ) {
        console.log("Nothing to edit");
      } else {
        handleEdit({ id: editingPerson.id, firstName, lastName, age });
      }
      setEditingPerson(null);
    }
  };

  const startEdit = (p: Person) => {
    setEditingPerson(p);
    setFirstName(p.firstName);
    setLastName(p.lastName);
    setAge(p.age);
  };

  return (
    <table className="nametable">
      <thead>
        <tr>
          {columnNames.map((col) => {
            return (
              <th
                onClick={() => console.log(`Sorting by ${col}`)}
                className="tableheader"
                key={col}
              >
                {col}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((person: Person) => {
          if (editingPerson !== person) {
            return (
              <tr key={person.id}>
                <td className="firstcolumn">{person.firstName}</td>
                <td className="lastcolumn">{person.lastName}</td>
                <td className="agecolumn">{person.age}</td>
                <td className="modifycolumn">
                  <button onClick={() => startEdit(person)}>
                    <EditIcon />
                  </button>
                </td>
                <td className="deletecolumn">
                  <button onClick={() => handleDelete(person)}>
                    <DeleteForeverIcon />
                  </button>
                </td>
              </tr>
            );
          } else {
            return (
              <tr key={person.id}>
                <td className="firstcolumn_mod">
                  <input
                    type="input"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  ></input>
                </td>
                <td className="lastcolumn_mod">
                  <input
                    type="input"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  ></input>
                </td>
                <td className="agecolumn_mod">
                  <input
                    type="input"
                    name="age"
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                  ></input>
                </td>
                <td className="modifycolumn">
                  <button onClick={() => modifyPerson()}>
                    <SaveIcon />
                  </button>
                </td>
                <td className="deletecolumn">
                  <button onClick={() => handleDelete(person)}>
                    <DeleteForeverIcon />
                  </button>
                </td>
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );
};

export default TableComponent;
