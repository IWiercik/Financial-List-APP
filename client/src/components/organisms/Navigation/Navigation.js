import { Navbar, NavbarList, NavbarListItem } from './Navigation.style';
import LogoImage from 'assets/images/Logo.svg';
import Home from 'assets/images/icons/home.svg';
import LoginIcon from 'assets/images/icons/log-in.svg';
import RegisterIcon from 'assets/images/icons/user.svg';
import LogoutIcon from 'assets/images/icons/log-out.svg';
import { Icon } from 'components/atoms/Icon/Icon.style';
import { Logo } from './Navigation.style';
import { Logout } from './Navigation.style';
import { useEffect } from 'react';
import { selectCurrentToken } from 'redux/auth/authSlice';
import { useSelector } from 'react-redux';

import { useSendLogoutMutation } from 'redux/auth/authApiSlice';
function Navigation() {
  const isUserLogged = useSelector(selectCurrentToken);
  const [sendLogout, { isLoading, isSuccess, isError, error }] = useSendLogoutMutation();
  useEffect(() => {
    if (isSuccess) console.log(isSuccess);
  }, [isSuccess]);
  const onLogoutClicked = async (e) => {
    // console.log(isUserLogged);

    // console.log(isUserLogged);
    sendLogout();
  };
  const logoutButton = isUserLogged && (
    <Logout onClick={onLogoutClicked}>
      <Icon src={LogoutIcon}></Icon>Logout
    </Logout>
  );
  return (
    <Navbar>
      <NavbarList>
        <Logo src={LogoImage}></Logo>
        <NavbarListItem to="/Home">
          <Icon src={Home}></Icon>
          <p>Home</p>
        </NavbarListItem>
        <NavbarListItem to="/Login">
          <Icon src={LoginIcon}></Icon>
          <p>Login</p>
        </NavbarListItem>
        <NavbarListItem to="/Registration">
          <Icon src={RegisterIcon}></Icon>
          <p>Register</p>
        </NavbarListItem>
      </NavbarList>
      {logoutButton}
    </Navbar>
  );
}

export default Navigation;
