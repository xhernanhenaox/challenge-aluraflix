// src/components/Footer/Footer.jsx
import React from "react";
import logo from "../../assets/logo.png";
import { FooterContainer, Logo } from "./Footer.styled";

const Footer = () => {
  return (
    <FooterContainer>
      <Logo src={logo} alt="AluraFlix logo" />
      <p>Hernan Henao &copy; 2025</p>
    </FooterContainer>
  );
};

export default Footer;
