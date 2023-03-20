import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../logo.png';
import './NavBar.css'

function NavBar() {
  return (
    <Navbar expand="lg" variant="light" className="custom-nav">
      <Container fluid>
        <img src={logo} 
             width="30"
             height="30"
             alt="Devops"
        />
        <Navbar.Brand href="/">DevOpardy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-end">
            <Nav.Link href="/" className="nav-link">Home</Nav.Link>
            <Nav.Link href="/changelog" className="nav-link">Changelog</Nav.Link>
            <Nav.Link href="https://www.twitch.tv/devopswithbrian" className="nav-link" target="_blank">Twitch Channel</Nav.Link>
            <Nav.Link href="https://discord.gg/2ZkhQxNs5A" className="nav-link" target="_blank">Discord</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;