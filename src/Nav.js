import React from 'react'
import { Navbar, Form, Button, FormControl } from "react-bootstrap"

function Navigation () {

  return(
  
    <Navbar className="bg-light justify-content-between">
    <Navbar.Brand href="#home" className="pr-lg-5">Trailer Buddy</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav"> 
   
      <Form inline className="text-right">
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>

  );
}

export default Navigation