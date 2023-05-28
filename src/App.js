import logo from "./logo.svg";
import "./App.css";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";

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
    const newTodo = { title: title, description: description, status: false };
    setTodo((oldArray) => [...oldArray, newTodo]);
    console.log(todo);
  };
  return (
    <div>
      <h1>To do list</h1>
      <div className="d-flex justify-content-center">
        <Form>
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
          <Button onClick={createtodo} variant="primary" type="submit">
            Create
          </Button>
        </Form>
      </div>
      {todo.map((item) => {
        console.log(item);
        return (
          <div className="d-flex justify-content-center mt-3 ">
          <div className="row">
            <div className="col">{item.title}</div> 
            <div className="col">{item.description}</div>
          </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
