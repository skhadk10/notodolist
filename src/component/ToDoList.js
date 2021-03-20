import React from 'react'
import {Card,Button,Table,InputGroup,FormControl} from 'react-bootstrap';

export const TaskLists = ({taskLists,handOnMarkAsNotToDo,handleonChange1}) => {
    return (
        <>
        <h2>Task Lists</h2>
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
      {taskLists.map((row,i)=>
    <tr key={i}>
      <td> 
      <input type="checkbox" defaultValue={i} onChange={handleonChange1}  />{""}
    </td>
      <td>{row?.title}</td>
      <td>{row?.hr}</td>
      <td><button onClick={() => handOnMarkAsNotToDo(i)}>Mark as not to</button></td>
    
    </tr>)}
  
    
  </tbody>
</Table>
</>
    )
}