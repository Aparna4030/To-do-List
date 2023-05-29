import logo from "./logo.svg";
import "./App.css";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todo, setTodo] = useState([]);
  const arr = ["hey", "hello", "hi"];

  const handleTitle = (event) => {
    // Function Scope
    console.log(event.target.value);
    setTitle(event.target.value);
  };
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const createtodo = (event) => {
    event.preventDefault();
    event.target.reset();
    const newTodo = { title: title, description: description, status: false, id:uuidv4()};
    setTodo((oldArray) => [...oldArray, newTodo]);
    console.log(todo);
  };
  const handleCheckbox = (event,id) =>{
    setTodo((oldarray) => {
      let temp=[...oldarray]
      temp[id]= {...temp[id],status: event.target.checked}
      return temp
    }) 
    console.log(event,id)
  }
  return (
    <div>
      <h1>To do list</h1>
      <div className="d-flex justify-content-center">
        <Form onSubmit={createtodo}>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control
              onChange={handleTitle}
              type="text"
              placeholder="Title"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control
              onChange={handleDescription}
              type="Description"
              placeholder="Description"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Create
          </Button>
        </Form>
      </div>

      {todo.map((item,position) => {
        console.log(item);
        if (item.status===true) {
          return(
             <div key={item.id}>
          <InputGroup className="mb-3">
          <InputGroup.Checkbox onChange={(event) => handleCheckbox(event,position)}></InputGroup.Checkbox>
          <InputGroup.Text>{item.title}</InputGroup.Text>
          <InputGroup.Text>{item.description}</InputGroup.Text>
          <div>Done</div>
        </InputGroup>
        </div>
          )
        } else {
          
          return (
            // <div className="d-flex justify-content-center mt-3 ">
            // <div className="row">
  
            //   <div className="col">{item.title}</div> 
            //   <div className="col">{item.description}</div>
            // </div>
            // </div>
            <div key={item.id}>
            <InputGroup className="mb-3">
            <InputGroup.Checkbox onChange={(event) => handleCheckbox(event,position)}></InputGroup.Checkbox>
            <InputGroup.Text>{item.title}</InputGroup.Text>
            <InputGroup.Text>{item.description}</InputGroup.Text>
            <div>To complete</div>
          </InputGroup>
          </div>
          );
        }
      })}
    </div>
  );
}

export default App;
