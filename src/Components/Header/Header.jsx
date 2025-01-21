import React from "react";

import Button from "../Button/Button";
import { LinkNav, Logo, Nav, NavContainer } from "./Header.styled";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header>
      <Nav>
        <Logo src={logo} alt="AluraFlix Logo" />
        <NavContainer>
          <LinkNav
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <Button>INICIO</Button>
          </LinkNav>
          <LinkNav
            to="/new-video"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <Button>NUEVO VIDEO</Button>
          </LinkNav>
        </NavContainer>
      </Nav>
    </header>
  );
};

export default Header;
