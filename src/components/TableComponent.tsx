import React, { useState } from "react";
import Person from "./Person";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import "./TableComponent.css";

interface TableProps {
  data: Person[];
  handleDelete: (p: Person) => void;
}

const TableComponent: React.FC<TableProps> = ({ data, handleDelete }) => {
  const columnNames: string[] = ["First name", "Last name", "Age"];
  const [editingPerson, setEditingPerson] = useState<Person | null>(null);

  return (
    <table className="nametable">
      <thead>
        <tr>
          {columnNames.map((col) => {
            return (
              <th className="tableheader" key={col}>
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
                  <button onClick={() => setEditingPerson(person)}>
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
                  <input type="input" defaultValue={person.firstName}></input>
                </td>
                <td className="lastcolumn_mod">
                  <input defaultValue={person.lastName}></input>
                </td>
                <td className="agecolumn_mod">
                  <input defaultValue={person.age}></input>
                </td>
                <td className="modifycolumn">
                  <button onClick={() => setEditingPerson(null)}>
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
