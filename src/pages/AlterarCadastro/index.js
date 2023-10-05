import React, {useState, useEffect}               from 'react';
import {useNavigation}                            from '@react-navigation/native';
import {Keyboard, TouchableWithoutFeedback, View} from 'react-native';
import logo                                       from '../../assets/logo.png';
import PrimaryButton                              from '../../components/PrimaryButton';
import SecundaryButton                            from '../../components/SecundaryButton';
import {
  Container,
  Logo,
  TextLogin,
  TextError,
  ContainerInput,
  TextInput,
} from './styles';

const AlterarCadastro = () => {
  const navigation              = useNavigation();
  const [user, setUser]         = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState(false);

  //----------------------------------------------------------------------------

  useEffect(() => {
    clearForm();
  }, []);

  const clearForm = () => {
    setUser('');
    setPassword('');
  };

  //----------------------------------------------------------------------------

  function Login() {
      navigation.navigate('Login');
      setError(false);
      clearForm();
  }

  //----------------------------------------------------------------------------

  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Container>
          <View style={{width: '90%', alignSelf: 'center'}}>
            <Logo source={logo} />
            <TextLogin>Acessar</TextLogin>
            <ContainerInput>
              <TextInput
                placeholder="Usuário"
                placeholderTextColor="#9FA5C0"
                autoCapitalize="none"
                autoCorrect={false}
                maxLength={35}
                returnKeyType="done"
                blurOnSubmit={false}
                value={user}
                onChangeText={t => setUser(t)}
              />
            </ContainerInput>
            <ContainerInput>
              <TextInput
                placeholder="Senha"
                placeholderTextColor="#9FA5C0"
                autoCapitalize="none"
                autoCorrect={false}
                maxLength={35}
                returnKeyType="done"
                blurOnSubmit={false}
                value={password}
                onChangeText={t => setPassword(t)}
              />
            </ContainerInput>
            <PrimaryButton title={'Criar Contra'} fn={Login} />
            <SecundaryButton title={'Inicio'} fn={Login} />
            {error && <TextError>Dados inválido(s)</TextError>}
          </View>
        </Container>
      </TouchableWithoutFeedback>
    </>
  );
};

export default AlterarCadastro;
