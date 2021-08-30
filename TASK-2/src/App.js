import React, { useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./App.css";
import { User } from "./components/User.js";
import { render } from "@testing-library/react";

function App() {
  function getApiData() {
    render(<User />);
  }
  useEffect(() => {
    document.title = "DataFetcher";
  }, []);
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">LGM TASK-2</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <button className="btn btn-success" onClick={getApiData}>
                Get Users
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
