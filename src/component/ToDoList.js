import React from "react";
import { Card, Button, Table, InputGroup, FormControl } from "react-bootstrap";

export const TaskLists = ({
  taskLists,
  itemTODelete,
  handOnMarkAsNotToDo,
  handleonChange1,
}) => {
  return (
    <>
      <h2>
        Task Lists <i class="fas fa-info-circle"></i>
      </h2>
      <Table striped bordered hover size="lg">
        <thead>
          <tr>
            <th>check</th>
            <th>Task</th>
            <th>Hours</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {taskLists.map((row, i) => (
            <tr key={i}>
              <td>
                <input
                  type="checkbox"
                  defaultValue={row._id}
                  onChange={handleonChange1}
                  checked={itemTODelete.includes(row._id)}
                />
                {""}
              </td>
              <td>{row?.title}</td>
              <td>{row?.hr}</td>
              <td>
                <button
                  data-toggle="tooltip"
                  data-placement="top"
                  title="it move to Not TO DO List"
                  onClick={() => handOnMarkAsNotToDo(row._id)}
                >
                  Mark as not to
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
