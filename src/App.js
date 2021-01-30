import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './hooks/theme';
import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
