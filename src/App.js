import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';

export function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
