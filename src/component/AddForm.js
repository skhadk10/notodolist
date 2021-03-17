import React ,{useState} from 'react'
import { Form, Button} from 'react-bootstrap';

const initailTasklist=[
    {
        
        title:"sanish",
        hrs:0
    }
]

export const AddForm = () => {


    const [taskList, setssettaskList] = useState(initailTasklist);

    const initailInputValue= e=>{
        const[name,value]= e.target
        setssettaskList([...taskList,title:hrs])
    }

    return (
  <>
    <Form>
        <Row>
          <Col>
            <Form.Control onChange={initailInputValue} placeholder="Task Name" name="" value="text" />
          </Col>
          <Col>
            <Form.Control  onChange={initailInputValue} placeholder="hrs" name="" value="number" />
          </Col>
          <Col><Button variant="outline-primary">Add</Button></Col>
        </Row>
      </Form>

    </>
    )
}
