import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/theme/theme';
import { globalStyle as GlobalStyle } from 'assets/styles/globalStyle';
import PreAuth from 'layout/PreAuth/PreAuth';
import MainTemplate from 'layout/MainTemplate/MainTemplate';
import { RootContainer } from 'Root.style';
const Root = () => {
  const [serverData, setServerData] = useState([]);
  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((data) => {
        setServerData(data.users);
      });
  }, []);
  console.log(serverData);
  const userIsAuthorized = false;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle></GlobalStyle>
      <RootContainer>{userIsAuthorized ? <MainTemplate /> : <PreAuth />}</RootContainer>
    </ThemeProvider>
  );
};
export default Root;
