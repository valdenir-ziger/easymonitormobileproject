import React, {useState, useEffect}                    from 'react';
import {useNavigation}                                 from '@react-navigation/native';
import {Keyboard, TouchableWithoutFeedback, View}      from 'react-native';
import PrimaryButton                                   from '../../components/PrimaryButton';
import HeaderDrawer                                    from '../../components/HeaderDrawer';

import {ContainerInput, 
        ContainerText, 
        TextUser, 
        TextInput,
        Container
      } from './styles';

const CadastrarMonitoria = () => {

  const navigation            = useNavigation();
  const [materia, setMateria] = useState('');
  const [periodo, setPeriodo] = useState('');
  const [disponibilidade, setDisponibilidade] = useState('');

  //----------------------------------------------------------------------------

  function Atualizar() {
    navigation.navigate('HomeMonitor');
  }

//----------------------------------------------------------------------------

  return (
    <>
      <HeaderDrawer title="EasyMonitor" />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Container>
          <View style={{width: '90%', alignSelf: 'center'}}>
              <ContainerText>
                <TextUser>Nova Monitoria</TextUser>
              </ContainerText>
              <ContainerInput>
                <TextInput
                  placeholder="Matéria"
                  placeholderTextColor="#643CB4"
                  autoCapitalize="none"
                  autoCorrect={false}
                  maxLength={35}
                  returnKeyType="done"
                  blurOnSubmit={false}
                  value={materia}
                  onChangeText={t => setMateria(t)}
                />
              </ContainerInput>
              <ContainerInput>
                <TextInput
                  placeholder="Período"
                  placeholderTextColor="#643CB4"
                  autoCapitalize="none"
                  autoCorrect={false}
                  maxLength={35}
                  returnKeyType="done"
                  blurOnSubmit={false}
                  value={periodo}
                  onChangeText={t => setPeriodo(t)}
                />
              </ContainerInput>
              <ContainerInput>
                <TextInput
                  placeholder="Disponibilidade"
                  placeholderTextColor="#643CB4"
                  autoCapitalize="none"
                  autoCorrect={false}
                  maxLength={35}
                  returnKeyType="done"
                  blurOnSubmit={false}
                  value={disponibilidade}
                  onChangeText={t => setDisponibilidade(t)}
                />
              </ContainerInput>
              <PrimaryButton title={'Criar'} fn={Atualizar}/>
          </View>
        </Container>
      </TouchableWithoutFeedback>
    </>       
  );
};

export default CadastrarMonitoria;
