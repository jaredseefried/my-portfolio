//Dependencies
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { HashLink as Link } from 'react-router-hash-link';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { AppContext } from "./libs/contextLib";
import { Auth } from "aws-amplify";

import Routes from "./Routes";

import "./App.css";

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const history = useHistory();

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    }
    catch (e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }

    setIsAuthenticating(false);
  }

  async function handleLogout() {
    await Auth.signOut();

    userHasAuthenticated(false);

    history.push("/login");
  }

  return (
    !isAuthenticating && (
      <div className="App">

        <Navbar fixed='top' collapseOnSelect expand="md" className="mb-3">
          <LinkContainer to="/">
            <Link to='#home-container' className="font-weight-bold nav-brand-link">Web Dev</Link>
          </LinkContainer>
          <LinkContainer to='/'>
            <Link className='nav-link' to="#languages-container">Skills</Link>
          </LinkContainer>
          <LinkContainer to='/'>
            <Link className='nav-link' to="#features-container">Features</Link>
          </LinkContainer>
          <LinkContainer to='/'>
            <Link className='nav-link' to="#projects-container">My Projects</Link>
          </LinkContainer>
          <LinkContainer to='/'>
            <Link className='nav-link' to="#contact-container">Contact</Link>
          </LinkContainer>
          <LinkContainer to='/'>
            <Link className='nav-link' to="#footer-container">Footer</Link>
          </LinkContainer>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav activeKey={window.location.pathname}>
              {isAuthenticated ? (
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              ) : (
                <>
                  <LinkContainer to="/signup">
                    <Nav.Link>Signup</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/login">
                    <Nav.Link>Login</Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
          <Routes />
        </AppContext.Provider>
      </div >
    )
  );
}

export default App;