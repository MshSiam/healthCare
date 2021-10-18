import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import logo from "../../../images/—Pngtree—heart care icon with a_3670173.png"
import css from "./header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons"
import useAuth from "../../../hooks/useAuth"

const element1 = <FontAwesomeIcon icon={faSignInAlt} />

const Header = () => {
  const { user, logOut } = useAuth()
  return (
    <>
      <Navbar bg="dark" collapseOnSelect expand="lg" sticky="top">
        <Container fluid>
          <Navbar.Brand>
            <NavLink to="/home" className="nav-link color-dark fw-bold">
              <img className="nav-img" src={logo} alt="" />
              Health Care
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle className="toggle" aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0 fw-bold" navbarScroll>
              <Nav.Link>
                <NavLink to="/home" className="nav-link">
                  <button className="menuBtn">Home</button>
                </NavLink>
              </Nav.Link>

              <Nav.Link>
                <NavLink to="/services" className="nav-link">
                  <button className="menuBtn">Services</button>
                </NavLink>
              </Nav.Link>

              <Nav.Link>
                <NavLink to="/about" className="nav-link">
                  <button className="menuBtn">About Us</button>
                </NavLink>
              </Nav.Link>

              <Nav.Link>
                <NavLink to="/contact" className="nav-link">
                  <button className="menuBtn">Contact Us</button>
                </NavLink>
              </Nav.Link>

              {user?.email ? (
                <button onClick={logOut} className="btn-warning rounded-3">
                  Logout
                </button>
              ) : (
                <NavLink to="/login" className="nav-link">
                  <button className="btn-danger2 rounded-3">
                    {" "}
                    {element1} Login
                  </button>
                </NavLink>
              )}
            </Nav>
            <Navbar.Text className="text-light">
              Sign in as :{" "}
              <a className="text-light" href="">
                {user?.displayName}
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
