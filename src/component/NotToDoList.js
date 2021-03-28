import React, { useState } from "react";
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
  noToDoList,
  markAsToDo,
  handleonChange1NOtToDO,
  notoDeleteItem,
}) => {
  // removing Data
  // const [checkBox, setcheckBox] = useState([])

  // const handleOnCheckbox=e=>{
  //     const{checked,value}=e.target
  //     setcheckBox({...checkBox,[checked]:value})

  //   const handleOnCheck=e=>{
  //   e.preventDefault();

  //   checkBoxRemove(checkBox);
  // }

  const totaSavedTime = noToDoList.reduce((subTtl, item) => {
    return (subTtl += +item.hr);
  }, 0);

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
          {noToDoList.map((row, i) => (
            <tr key={i}>
              <td>
                <input
                  type="checkbox"
                  defaultValue={i}
                  onChange={handleonChange1NOtToDO}
                  checked={notoDeleteItem.includes(i)}
                />
                {""}
              </td>
              <label>{row?.title}</label>
              <td>{row?.hr}</td>
              <td>
                <button
                  data-toggle="tooltip"
                  data-placement="top"
                  title="it move to TO DO List"
                  onClick={() => markAsToDo(i)}
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
