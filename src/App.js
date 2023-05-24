import logo from './logo.svg';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const[title,setTitle]=useState("")
  const[description,setDescription]=useState("")
  const handleTitle = (event) => {
    // Function Scope
    console.log(event.target.value)
    setTitle(event.target.value)
  };
  return (
   <div>
    <h1>To do list</h1>
    <div className='d-flex justify-content-center'>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control onChange={handleTitle} type="text" placeholder="Title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control type="Description" placeholder="Description" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    </div>
   </div>
  );
}

export default App;
