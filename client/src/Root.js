import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/theme/theme';
import { globalStyle as GlobalStyle } from 'assets/styles/globalStyle';
const Root = () => {
  const [serverData, setServerData] = useState([]);

  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((data) => {
        setServerData(data.users);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle></GlobalStyle>
      <div>
        {typeof serverData === 'undefined' ? (
          <p>Loading...</p>
        ) : (
          serverData.map((user, index) => {
            return <p key={index}>{user}</p>;
          })
        )}
      </div>
    </ThemeProvider>
  );
};
export default Root;
