import { Container,Table, Row, Col } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddForm } from './component/AddForm';
import { NotToDoList } from './component/NotToDoList';
import { ToDoList } from './component/ToDoList';

function App() {
  return (
    <div className="App">
      <h1 className="text-center">NOT to DO List</h1>
      <hr/>
     <AddForm  className="text-center"/>
     <Container>
    
      <Row>
        <Col><h3>TaskList <ToDoList/> </h3>
        </Col>
        <Col><h3>Not To Do Task List <NotToDoList/> </h3>
        </Col>
      </Row>
     
</Container>

     
    </div>
  );
}

export default App;
