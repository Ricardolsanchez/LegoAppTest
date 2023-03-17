
import React from 'react';

import { Router } from './src/router';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from './src/constants/Theme';
import { Provider } from 'react-redux';


const App = () => {
  return (
 
      <ThemeProvider>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </ThemeProvider>

  );
};


export default App;