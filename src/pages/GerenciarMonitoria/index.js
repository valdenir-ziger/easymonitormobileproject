import React                                       from 'react';
import {Keyboard, TouchableWithoutFeedback, View}  from 'react-native';
import HeaderDrawer                                from '../../components/HeaderDrawer';
import OptionMonitoria                             from '../../components/OptionMonitoria';

import {ContainerText, 
        TextUser, 
        Container
      } from './styles';

const GerenciarMonitoria = () => {

  return (
    <>
      <HeaderDrawer title="EasyMonitor" />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Container>
          <View style={{width: '90%', alignSelf: 'center'}}>
              <ContainerText>
                <TextUser>Gerenciar Monitoria</TextUser>
              </ContainerText>
              <OptionMonitoria nome="Aluno 1" formacao="1º Período" diponibilidade="Seg, Terça"/>
              <OptionMonitoria nome="Aluno 2" formacao="2º Período" diponibilidade="Qua, Qui"/>
          </View>
        </Container>
      </TouchableWithoutFeedback>
    </>       
  );
};

export default GerenciarMonitoria;
