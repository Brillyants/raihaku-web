import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/img/brillyant-logo.png";
import LoginButton from "./Button/LoginButton";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const headerElement = document.getElementById("header");
      if (headerElement) {
        const headerHeight = headerElement.offsetHeight;
        if (window.scrollY > headerHeight) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <Navbar
      id="header"
      expand="lg"
      className={scrolled || isToggled ? "scrolled bg-grey" : ""}
    >
      <Container>
        <Navbar.Brand href="#hero">
          <img src={logo} alt="Logo" id="logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={handleToggle}
          aria-expanded={isToggled}
        >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="text-end">
          <Nav className="me-auto">
            <Nav.Link href="#features" className="navbar-link">
              Features
            </Nav.Link>
            <Nav.Link href="#why-us" className="navbar-link">
              Why Us
            </Nav.Link>
            <Nav.Link href="#tutorial" className="navbar-link">
              Tutorial
            </Nav.Link>
            <Nav.Link href="#faq" className="navbar-link">
              FAQ
            </Nav.Link>
            <Nav.Link href="#video" className="navbar-link">
              Video
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <LoginButton />
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
