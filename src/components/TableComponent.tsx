import React, { useState } from "react";
import Person from "./Person";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";

interface TableProps {
  data: Person[];
  handleDelete: (p: Person) => void;
}

const TableComponent: React.FC<TableProps> = ({ data, handleDelete }) => {
  const columnNames: string[] = ["First name", "Last name", "Age"];
  const [editingPerson, setEditingPerson] = useState<Person | null>(null);

  return (
    <table>
      <thead>
        <tr>
          {columnNames.map((col) => {
            return <th key={col}>{col}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((person: Person) => {
          if (editingPerson !== person) {
            return (
              <tr key={person.id}>
                <td>{person.firstName}</td>
                <td>{person.lastName}</td>
                <td>{person.age}</td>
                <td>
                  <button onClick={() => setEditingPerson(person)}>
                    <EditIcon />
                  </button>
                </td>
                <td>
                  <button onClick={() => handleDelete(person)}>
                    <DeleteForeverIcon />
                  </button>
                </td>
              </tr>
            );
          } else {
            return (
              <tr key={person.id}>
                <td>
                  <input type="input" value={person.firstName}></input>
                </td>
                <td>
                  <input value={person.lastName}></input>
                </td>
                <td>
                  <input value={person.age}></input>
                </td>
                <td>
                  <button onClick={() => setEditingPerson(null)}>
                    <SaveIcon />
                  </button>
                </td>
                <td>
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
