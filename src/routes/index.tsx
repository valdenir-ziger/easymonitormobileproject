import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login       from '../pages/Login';
import HomeUsuario from '../pages/HomeUsuario';
import HomeMonitor from '../pages/HomeMonitor';

const Routes = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false, gestureEnabled: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="HomeUsuario" component={HomeUsuario} />
      <Stack.Screen name="HomeMonitor" component={HomeMonitor} />
    </Stack.Navigator>
  );
};

export default () => {
  return <Routes />;
};
