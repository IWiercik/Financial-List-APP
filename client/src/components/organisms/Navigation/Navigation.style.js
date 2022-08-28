import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Navbar = styled.nav`
  position: absolute;
  width: 300px;
  height: 100%;
  border-right: 1px solid rgba(4, 110, 232, 0.6);
  box-shadow: 8px 1px 30px -15px rgba(4, 110, 232, 0.71);
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
`;
export const NavbarList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  align-content: center;
  align-items: center;
`;
export const NavbarListItem = styled(Link)`
  padding: 15px;
  cursor: pointer;
  text-decoration: none;
  width: 40%;
  text-shadow: 0 0 2px #1e81f2, 0 0 2px black;
  &&:hover {
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
  width: 40%;
  &&:hover {
    color: #1e81f2;
  }
`;
