import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from 'Root';
import { store } from 'redux/store/store';
import { Provider } from 'react-redux';
import { fetchUsers } from 'redux/slices/usersSlice';

store.dispatch(fetchUsers());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>
);
