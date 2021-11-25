import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 100%;
`;

const Footer = () => {
  return <Container>&copy; {new Date().getFullYear()} YOSOSU</Container>;
};

export default Footer;