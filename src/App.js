import logo from './logo.svg';
import React,{useState} from 'react'

import {Container,Row,Col, Button} from 'react-bootstrap';
import './App.css';
import { AddForm } from './component/AddForm';
import { TaskLists } from './component/ToDoList';
import { NoToDoList } from './component/NotToDoList';
import { waitForElementToBeRemoved } from '@testing-library/dom';


const initialTaskLists=[

]

const App = () => {
  const [taskLists, setTaskLists] = useState(initialTaskLists);
  const [noToDoList, setNoToDoList] = useState([])
  const [totalHrs, setTotalHrs] = useState(0);
  const [itemTODelete, setItemTODelete] = useState([])
  const [notoDeleteItem, setnotoDeleteItem] = useState([])
  // // total function
  // const calculateTotalHours=() =>{
  //   //tasklist
  //   const totalFrmToDo=0; 
  //   // nottodolist
  //   const totalFrmNotToDo=0;
  //   const total=totalFrmNotToDo+totalFrmNotToDo
  // }

  const handOnAddTask= (frmDt) =>{
    console.log("Data type check>>", typeof(frmDt.hr))
    if(
      totalHrs+ +frmDt.hr>168)
    {
      return alert("you have exceed the total allocated time for the week")
    }
    setTotalHrs(Number(frmDt.hr)+totalHrs);

    setTaskLists([...taskLists,frmDt]);
    console.log(setTaskLists)
  }



  const handOnMarkAsNotToDo= index =>{
   
    const item=taskLists.splice(index,1)
    setNoToDoList([...noToDoList,item[0]]);
    
     }


     const markAsToDo = index =>{
       const item =noToDoList[index];
       const newArg= noToDoList.filter((item,i)=>i!== index)
       setNoToDoList(newArg);
       setTaskLists([...taskLists,item]);

     }

    
//  Adding and deleting value from list
   const handleonChange1=e=>{
     const{checked,value}=e.target;

     if(checked){
       return setItemTODelete([...itemTODelete, +value])
     }


    // remove from array 
    const newlist=itemTODelete.filter(item=> item !=value);
    setItemTODelete(newlist)
   }
     


  //  delete  item when delete button is clicked
    const deleteItemfromTaskList=()=>
    {
      
      const newArg=taskLists.filter((item,i)=>!itemTODelete.includes(i))
      setNoToDoList(newArg)
        
  }


  
//  Adding and deleting value from list
   const handleonChange1NOtToDO=e=>{
     const{checked,value}=e.target;

     if(checked) 
     {
       return setItemTODelete([...notoDeleteItem, +value])
     }

    // remove from array 
    const newlist=notoDeleteItem.filter(item=> item !=value);
    setnotoDeleteItem(newlist)
   }
     
  //  delete Not TO DO item when delete button is clicked
    const deleteItemFromNOtTODOList=()=>
    {
      const newArg=noToDoList.filter((item,i)=>!notoDeleteItem.includes(i))
      setTaskLists(newArg)
  }

  

const deleteItem=()=>{
  if(window.confirm("are you sure you want to delete the selected items?"));
      {

  deleteItemFromNOtTODOList();
  deleteItemfromTaskList()
   // total hours from new Arg
  //  setItemTODelete([]);
  //  const newHrTtl=newArg.reduce((subTtl,item)=>{
  //    return subTtl+= item.hr;
  //  },0)
   
  //  setTotalHrs(newHrTtl);

  
 }
}
  

return (
    <div className="main">
<Container variant="primary" >
  <Row>
    <Col>
    <div className="text-center pt-5"><h1>Not To Do List</h1></div>
    </Col>
  </Row>
  <hr></hr>

<AddForm handleOnAddTask={handOnAddTask}
/>
<hr></hr>
<Row>
  <Col>
  <TaskLists taskLists={taskLists}
  handOnMarkAsNotToDo={handOnMarkAsNotToDo} handleonChange1={handleonChange1}
  />
  </Col>
  <Col>
  <NoToDoList  noToDoList={noToDoList} handleonChange1NOtToDO={handleonChange1NOtToDO}
  markAsToDo={markAsToDo} />
  </Col>
  <Col> your allocated  Time={totalHrs}/168 hours</Col>
</Row>
{/* list items */}

</Container>
<Button  onClick={deleteItem} variant="primary">Delete</Button>
    </div>
  );
}

export default App;