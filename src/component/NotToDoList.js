import React,{useState} from 'react'
import {Card,Button,Table, InputGroup} from 'react-bootstrap';

export const NoToDoList = ({noToDoList,markAsToDo,handleonChange1NOtToDO}) => {
  // removing Data
  // const [checkBox, setcheckBox] = useState([])
  
  // const handleOnCheckbox=e=>{
  //     const{checked,value}=e.target
  //     setcheckBox({...checkBox,[checked]:value})
      
  
  
//   const handleOnCheck=e=>{
//   e.preventDefault();

//   checkBoxRemove(checkBox);
// }


  const totaSavedTime= noToDoList.reduce((subTtl, item)=>
     {return subTtl+= +item.hr},0);
  
    return (
        <>
             <h2>Not To Do list</h2>
      <Table striped bordered hover size="lg">
  <thead>
    <tr>
   
      <th>Task</th>
      <th>Hours</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
      {noToDoList.map((row,i)=>
    <tr key={i}>
      <td><input type="checkbox" defaultValue={i} onChange={handleonChange1NOtToDO}  />{""}</td>
      <label>{row?.title}</label>
      <td>{row?.hr}</td>
      <td><button onClick={() => markAsToDo(i)}>Mark as to do</button></td>
    
    </tr>)}
  
   
  </tbody>
</Table>
your saved= {totaSavedTime} hours
</>
    )
 

    return (
        <>
             <h2>Not To Do list</h2>
      <Table striped bordered hover size="lg">
  <thead>
    <tr>
     
      <th>Task</th>
      <th>Hours</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
      {noToDoList.map((row,i)=>
    <tr key={i}>
      <td>{row?.title}</td>
      <td>{row?.hr}</td>
      <td><button onClick={() => markAsToDo(i)}>Mark as to do</button></td>
    
    </tr>)}
  
   
  </tbody>
</Table>
your saved= {totaSavedTime} hours

</>
    )
}