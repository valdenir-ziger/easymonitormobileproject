import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login              from '../pages/Login';
import HomeUsuario        from '../pages/HomeUsuario';
import HomeMonitor        from '../pages/HomeMonitor';
import NovoCadastro       from '../pages/NovoCadastro';
import AlterarCadastro    from '../pages/AlterarCadastro';
import CadastrarMonitoria from '../pages/CadastrarMonitoria';
import DetalheMonitor     from '../pages/DetalheMonitor';
import GerenciarMonitoria from '../pages/GerenciarMonitoria';
import SelecionarMateria  from '../pages/SelecionarMateria';
import SelecionarMonitor  from '../pages/SelecionarMonitor';

const Routes = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false, gestureEnabled: false}}>
      <Stack.Screen name="Login"              component={Login} />
      <Stack.Screen name="HomeUsuario"        component={HomeUsuario} />
      <Stack.Screen name="HomeMonitor"        component={HomeMonitor} />
      <Stack.Screen name="NovoCadastro"       component={NovoCadastro} />
      <Stack.Screen name="AlterarCadastro"    component={AlterarCadastro} />
      <Stack.Screen name="CadastrarMonitoria" component={CadastrarMonitoria} />
      <Stack.Screen name="DetalheMonitor"     component={DetalheMonitor} />
      <Stack.Screen name="GerenciarMonitoria" component={GerenciarMonitoria} />
      <Stack.Screen name="SelecionarMateria"  component={SelecionarMateria} />
      <Stack.Screen name="SelecionarMonitor"  component={SelecionarMonitor} />
    </Stack.Navigator>
  );
};

export default () => {
  return <Routes />;
};
