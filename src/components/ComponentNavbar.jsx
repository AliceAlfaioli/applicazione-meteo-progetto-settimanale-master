import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
const ComponentNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Link to={"/"} className="nav-link">
          <Navbar.Brand>Mᴇᴛᴇ☀️ - Wʜᴀᴛs ᴛʜᴇ Wᴇᴀᴛʜᴇʀ 🌦️ </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Weather</Nav.Link>
            <Nav.Link>Today</Nav.Link>
            <Nav.Link>Tomorrow</Nav.Link>
            <Nav.Link>Last Week</Nav.Link>
            <Nav.Link>About</Nav.Link>
            <Nav.Link>Infos</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>Login ☂</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default ComponentNavbar;
