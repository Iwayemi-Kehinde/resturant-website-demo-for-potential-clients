import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

// Navbar container
const Nav = styled.nav`
  background: #fff;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

// Logo
const Logo = styled.a`
  font-size: 1.8rem;
  font-weight: bold;
  color: #ff5733;
  text-decoration: none;
`;

// Menu Links container
const Menu = styled.ul`
  display: flex;
  list-style: none;

  @media(max-width: 768px){
    flex-direction: column;
    position: fixed;
    top: 70px;
    left: ${({ open }) => (open ? '0' : '-100%')};
    width: 100%;
    height: calc(100% - 70px);
    background: #fff;
    transition: 0.3s ease-in-out;
    padding-top: 40px;
  }
`;

const MenuItem = styled.li`
  margin-left: 30px;

  @media(max-width: 768px){
    margin: 20px 0;
    text-align: center;
  }
`;

const MenuLink = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.2s ease;

  &:hover {
    color: #ff5733;
  }
`;

// Hamburger Icon
const Hamburger = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media(max-width: 768px){
    display: block;
  }
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <Nav>
      <Logo>Gaby Lagos</Logo>
      <Hamburger onClick={toggleMenu}>
        {open ? <FaTimes /> : <FaBars />}
      </Hamburger>
      <Menu open={open}>
        <MenuItem><MenuLink href="#hero">Home</MenuLink></MenuItem>
        <MenuItem><MenuLink href="#menu">Menu</MenuLink></MenuItem>
        <MenuItem><MenuLink href="#booking">Reserve</MenuLink></MenuItem>
        <MenuItem><MenuLink href="#reviews">Reviews</MenuLink></MenuItem>
        <MenuItem><MenuLink href="#contact">Contact</MenuLink></MenuItem>
      </Menu>
    </Nav>
  );
};

export default Navbar;
