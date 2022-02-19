import React, { useState } from "react";
import Person from "./Person";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import "./TableComponent.css";

interface TableProps {
  data: Person[];
  sortBy: string;
  sortOrder: string;
  handleEdit: (p: Person) => void;
  handleDelete: (p: Person) => void;
  handleSorting: (sortField: string, order: string) => void;
}

const TableComponent: React.FC<TableProps> = ({
  data,
  sortBy,
  sortOrder,
  handleEdit,
  handleDelete,
  handleSorting,
}) => {
  const columnNames: string[] = ["First Name", "Last Name", "Age"];
  const [editingPerson, setEditingPerson] = useState<Person | null>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);

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

  const changeOrder = (column: string) => {
    switch (column) {
      case "First Name": {
        if (sortBy === "firstName") {
          sortOrder === "asc"
            ? handleSorting("firstName", "desc")
            : handleSorting("firstName", "asc");
        } else {
          handleSorting("firstName", "asc");
        }
        break;
      }
      case "Last Name": {
        if (sortBy === "lastName") {
          sortOrder === "asc"
            ? handleSorting("lastName", "desc")
            : handleSorting("lastName", "asc");
        } else {
          handleSorting("lastName", "asc");
        }
        break;
      }
      case "Age": {
        if (sortBy === "age") {
          sortOrder === "asc"
            ? handleSorting("age", "desc")
            : handleSorting("age", "asc");
        } else {
          handleSorting("age", "asc");
        }
        break;
      }
      default: {
        handleSorting("firstName", "asc");
        break;
      }
    }
  };

  return (
    <table className="nametable">
      <thead>
        <tr>
          {columnNames.map((col) => {
            return (
              <th
                onClick={() => changeOrder(col)}
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
