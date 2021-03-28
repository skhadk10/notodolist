import React,{useState} from 'react'
import {Row,Col,Form,Button} from 'react-bootstrap'

const initialFormData ={
    title:"",
        hr:0,
}
export const AddForm = ({handleOnAddTask}) => {
    const [task, setTask] = useState(initialFormData)

    const handleOnChange = e =>
    {

const {name,value}=e.target;
setTask({...task,[name]:name==='hr'? +value:value,}
)
    }
    const handleOnSubmit =e =>{
        e.preventDefault();

        handleOnAddTask(task);
    }
    return (
       
            
            <Form  onSubmit={handleOnSubmit}>
  <Row>
    <Col>
      <Form.Control data-toggle="tooltip" data-placement="top" title="AddTask Please"  placeholder="Task Name" onChange={handleOnChange}  value={task.title} name="title" required/>
    </Col>
    <Col>
      <Form.Control data-toggle="tooltip" data-placement="top" title="Add HOur Only"   placeholder="Number of hours" value={task.hr} required
       onChange={handleOnChange}  name="hr" />
    </Col>
    <Col>  <Button variant="primary" type="submit">
    Add Task
  </Button></Col>
  </Row>
</Form>
       
    )
}