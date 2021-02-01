import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from './hooks/theme';

import './config/Reactotron.config';

import Routes from './routes';
import GlobalStyle from './styles/global';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider>
          <Routes />
          <GlobalStyle />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
