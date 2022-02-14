import React from "react";
import Person from "./Person";

interface TableProps {
  data: Person[];
}

const TableComponent: React.FC<TableProps> = ({ data }) => {
  const columnNames: string[] = ["First name", "Last name", "Age"];

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
          return (
            <tr key={person.id}>
              <td>{person.firstName}</td>
              <td>{person.lastName}</td>
              <td>{person.age}</td>
              <td>
                <button>Modify</button>
              </td>
              <td>
                <button>X</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableComponent;
