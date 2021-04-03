import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Card,
  Button,
  Table,
  InputGroup,
  Alert,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";

export const NoToDoList = ({
  totaSavedTime,
  notoDeleteItem,
  markAsToDo,
  handleonChange1NOtToDO,
}) => {
  const { noToDoList } = useSelector((state) => state.task);

  return (
    <>
      <h2>
        Not To Do list{" "}
        <i
          style={{ backgroundColor: "yellow", borderRadius: "5px" }}
          class="fas fa-info-circle"
          data-toggle="tooltip"
          data-placement="top"
          title="it move to TO DO List"
        ></i>
      </h2>
      <Table striped bordered hover size="lg">
        <thead>
          <tr>
            <th>Task</th>
            <th>Hours</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {noToDoList?.map((row, i) => (
            <tr key={i}>
              <td>
                <input
                  type="checkbox"
                  defaultValue={row._id}
                  onChange={handleonChange1NOtToDO}
                  checked={notoDeleteItem.includes(row._id)}
                />
                {""}
                <label>{row?.title}</label>
              </td>

              <td>{row?.hr}</td>
              <td>
                <button
                  data-toggle="tooltip"
                  data-placement="top"
                  title="it move to TO DO List"
                  onClick={() => markAsToDo(row._id)}
                >
                  Mark As TO DO
                </button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Alert variant="success">
        <Alert.Heading>Hey, nice to see you</Alert.Heading>
        <p>your saved= {totaSavedTime} hours</p>
        <hr />
      </Alert>
    </>
  );
};
