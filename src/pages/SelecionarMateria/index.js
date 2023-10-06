import React                                       from 'react';
import {Keyboard, TouchableWithoutFeedback, View}  from 'react-native';
import HeaderDrawer                                from '../../components/HeaderDrawer';
import OptionMonitor                               from '../../components/OptionMonitor';
import SelectList                                  from '../../components/SelectList';

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
                <SelectList
                  placeholder="Selecione uma Matéria"
                /> 
              </ContainerInput>
              <OptionMonitor nome="Monitor 1" formacao="1º Período" diponibilidade="Seg, Terça"/>
              <OptionMonitor nome="Monitor 2" formacao="2º Período" diponibilidade="Qua, Qui"/>
          </View>
        </Container>
      </TouchableWithoutFeedback>
    </>       
  );
};

export default SelecionarMateria;
