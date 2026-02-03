import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import NavMenu from "./NavMenu";
import search from "../assets/Search.png";

const HeaderDiv = styled.header`
  background: rgba(0, 0, 0, 0.50);  
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  padding: 1rem 3rem;
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
`;

function Header() {
  return (
    <HeaderDiv>
      <img src={logo}  />
      <NavMenu />
      <div>
        <img src={search}  />
      </div>
    </HeaderDiv>
  );
}

export default Header;