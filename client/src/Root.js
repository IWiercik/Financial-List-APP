import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/theme/theme';
import { globalStyle as GlobalStyle } from 'assets/styles/globalStyle';
import PreAuth from 'layout/PreAuth/PreAuth';
import MainTemplate from 'layout/MainTemplate/MainTemplate';
import { RootContainer } from 'Root.style';
import { useGetUsersQuery } from 'redux/users/usersApiSlice';
const Root = () => {
  const { data: users, isLoading, isSuccess, isError, error } = useGetUsersQuery();
  console.log(users);
  const userIsAuthorized = false;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle></GlobalStyle>
      <RootContainer>{userIsAuthorized ? <MainTemplate /> : <PreAuth />}</RootContainer>
    </ThemeProvider>
  );
};
export default Root;
