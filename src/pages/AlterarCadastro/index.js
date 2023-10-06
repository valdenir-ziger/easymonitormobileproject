import React, {useState, useEffect}                    from 'react';
import {useNavigation}                                 from '@react-navigation/native';
import {Keyboard, TouchableWithoutFeedback, View}      from 'react-native';
import PrimaryButton                                   from '../../components/PrimaryButton';
import HeaderDrawer                                    from '../../components/HeaderDrawer';
import foto                                            from '../../assets/foto.png';

import {ContainerInput, 
        ContainerText, 
        TextUser, 
        TextInput,
        Container,
        Quadrado
      } from './styles';

const AlterarCadastro = () => {

  const navigation            = useNavigation();
  const [nome, setNome]       = useState('');
  const [periodo, setPeriodo] = useState('');
  const [curso, setCurso]     = useState('');

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
                <TextUser>Seus dados</TextUser>
              </ContainerText>
              <Quadrado source={foto}/>
              <ContainerText>
              <PrimaryButton title={'Alterar Foto'} fn={Atualizar}/>
              </ContainerText>
              <ContainerInput>
                <TextInput
                  placeholder="Nome Completo"
                  placeholderTextColor="#643CB4"
                  autoCapitalize="none"
                  autoCorrect={false}
                  maxLength={35}
                  returnKeyType="done"
                  blurOnSubmit={false}
                  value={nome}
                  onChangeText={t => setNome(t)}
                />
              </ContainerInput>
              <ContainerInput>
                <TextInput
                  placeholder="Curso"
                  placeholderTextColor="#643CB4"
                  autoCapitalize="none"
                  autoCorrect={false}
                  maxLength={35}
                  returnKeyType="done"
                  blurOnSubmit={false}
                  value={curso}
                  onChangeText={t => setCurso(t)}
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
              <PrimaryButton title={'Atualizar'} fn={Atualizar}/>
          </View>
        </Container>
      </TouchableWithoutFeedback>
    </>       
  );
};

export default AlterarCadastro;
