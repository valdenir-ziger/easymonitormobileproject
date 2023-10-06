import React                                       from 'react';
import {Keyboard, TouchableWithoutFeedback, View}  from 'react-native';
import HeaderDrawer                                from '../../components/HeaderDrawer';
import OptionMonitor                               from '../../components/OptionMonitor';
import Picker                                      from '../../components/Picker';

import {ContainerText, 
        TextUser, 
        Container,
        ContainerInput
      } from './styles';

const SelecionarMateria = () => {

  return (
    <>
      <HeaderDrawer title="EasyMonitor" />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Container>
          <View style={{width: '90%', alignSelf: 'center'}}>
              <ContainerText>
                <TextUser>O que vamos estudar?</TextUser>
              </ContainerText>
              <ContainerInput>
                <Picker/> 
              </ContainerInput>
              <OptionMonitor 
                nome="Monitor 1" 
                formacao="1º Período" 
                diponibilidade="Seg, Terça"
                screen="DetalheMonitor"/>
              <OptionMonitor 
                nome="Monitor 2" 
                formacao="2º Período" 
                diponibilidade="Qua, Qui"
                screen="DetalheMonitor"/>
          </View>
        </Container>
      </TouchableWithoutFeedback>
    </>       
  );
};

export default SelecionarMateria;
