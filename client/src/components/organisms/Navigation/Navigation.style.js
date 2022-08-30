import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Navbar = styled.nav`
  position: absolute;
  width: 300px;
  height: 100%;
  border-right: 1px solid rgba(4, 110, 232, 0.6);
  box-shadow: 8px 1px 30px -15px rgba(4, 110, 232, 0.71);
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  display: grid;
  background: rgba(0, 0, 0, 0.5);
  /* React Router Active Class */
  .active {
    border-radius: 10px;
    border-left: 2px solid #1e81f2;
    border-right: 2px solid #1e81f2;
  }
`;
export const NavbarList = styled.ul`
  justify-self: center;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  && a {
    margin-left: 25px; // missing space of logo
  }
`;
export const NavbarListItem = styled(NavLink)`
  padding: 15px;
  width: max-content;
  text-decoration: none;
  text-shadow: 0 0 2px #1e81f2, 0 0 2px black;
  cursor: pointer;
  && * {
    transition: 0.5s all;
    display: inline;
  }
  &&:hover * {
    transform: scale(1.4);
  }
  &&:hover p {
    color: #1e81f2;
    text-shadow: none;
  }
`;

export const Logo = styled.img`
  margin-top: 25px;
  margin-bottom: 30px;
  width: 200px;
  height: 180px;
`;
export const Logout = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: 0;
  margin-bottom: 30px;
  min-width: max-content;
  margin-left: 25px; // missing space of logo
  &&:hover {
    color: #1e81f2;
  }
`;
