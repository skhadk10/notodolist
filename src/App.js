import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Container, Row, Col, Button, Alert, Spinner } from "react-bootstrap";
import "./App.css";
import { AddForm } from "./component/AddForm";
import { TaskLists } from "./component/ToDoList";
import { NoToDoList } from "./component/NotToDoList";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createTask,
  deletTaskLists,
  getTaskLists,
  switchTask,
} from "./taskApi.js";
// from actions
import { addTask, fetchTaskLists } from "./component/taskAction.js";

const initialTaskLists = [];

const App = () => {
  const dispatch = useDispatch();

  const { isPending, status, message, totalHrs } = useSelector(
    (state) => state.task
  );

  const [itemTODelete, setItemTODelete] = useState([]);
  const [notoDeleteItem, setnotoDeleteItem] = useState([]);

  const [hdhdhd, setResponse] = useState({
    status: "",
    message: "",
  });

  useEffect(() => {
    const initialTask = async () => {
      dispatch(fetchTaskLists());
    };
  }, []);

  const handOnAddTask = async (frmDt) => {
    if (totalHrs + +frmDt.hr > 168) {
      return alert("you have exceed the total allocated time for the week");
    }

    dispatch(addTask(frmDt));
  };

  const updateTask = async (toUpdate) => {
    // setIsPending(true);
    const result = await switchTask(toUpdate);
    setResponse(result);
    // setIsPending(true);
    // getAllTask();
  };

  const handOnMarkAsNotToDo = (_id) => {
    const toUpdate = {
      _id,
      todo: false,
    };
    updateTask(toUpdate);
  };

  const markAsToDo = (_id) => {
    const toUpdate = {
      _id,
      todo: true,
    };
    updateTask(toUpdate);
  };

  //  Adding and deleting value from list
  const handleonChange1 = (e) => {
    const { checked, value } = e.target;

    if (checked) {
      return setItemTODelete([...itemTODelete, value]);
    }

    // remove from array
    const newlist = itemTODelete.filter((item) => item != value);
    setItemTODelete(newlist);
  };

  //  Adding and deleting value from list
  const handleonChange1NOtToDO = (e) => {
    const { checked, value } = e.target;

    if (checked) {
      return setnotoDeleteItem([...notoDeleteItem, value]);
    }

    // remove from array
    const newlist = notoDeleteItem.filter((item) => item != value);
    setnotoDeleteItem(newlist);
  };

  const deleteItem = async () => {
    if (window.confirm("are you sure you want to delete the selected items?"));
    {
      const deleteArg = itemTODelete.concat(notoDeleteItem);

      const result = await deletTaskLists(deleteArg);
      setResponse(result);
    }
  };

  return (
    <div className="main">
      <Container variant="primary">
        <Row>
          <Col>
            <div className="text-center pt-5">
              <h1>Not To Do List</h1>
            </div>
          </Col>
        </Row>
        <hr></hr>
        {/* success and error massage */}
        {message && (
          <Alert varient={status === "success" ? "primary" : "denger"}>
            {message}
          </Alert>
        )}

        {isPending && <Spinner animation="border" variant="primary" />}
        <AddForm handOnAddTask={handOnAddTask} />
        <hr></hr>
        <Row>
          <Col>
            <TaskLists
              handOnMarkAsNotToDo={handOnMarkAsNotToDo}
              handleonChange1={handleonChange1}
              itemTODelete={itemTODelete}
            />
          </Col>
          <Col>
            <NoToDoList
              handleonChange1NOtToDO={handleonChange1NOtToDO}
              markAsToDo={markAsToDo}
              notoDeleteItem={notoDeleteItem}
            />
          </Col>
        </Row>

        <Row>
          {" "}
          <Alert variant="primary">
            <Alert.Heading>Hey, nice to see you</Alert.Heading>
            <p>your allocated Time={totalHrs}/168 hours</p>
            <hr />
          </Alert>
        </Row>
        {/* list items */}
      </Container>
      <Button onClick={deleteItem} variant="primary">
        Delete
      </Button>
    </div>
  );
};

export default App;
