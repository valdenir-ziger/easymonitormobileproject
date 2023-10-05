import React, {useState, useEffect}               from 'react';
import {useNavigation}                            from '@react-navigation/native';
import {Keyboard, TouchableWithoutFeedback, View} from 'react-native';
import logo                                       from '../../assets/logo.png';
import PrimaryButton                              from '../../components/PrimaryButton';
import SecundaryButton                            from '../../components/SecundaryButton';
import RadioButton                                from '../../components/RadioButton';
import {
  Container,
  Logo,
  TextLogin,
  TextError,
  ContainerInput,
  TextInput,
} from './styles';

const NovoCadastro = () => {
  const navigation                = useNavigation();
  const [nome, setNome]           = useState('');
  const [user, setUser]           = useState('');
  const [password, setPassword]   = useState('');
  const [password2, setPassword2] = useState('');
  const [curso, setCurso]         = useState('');
  const [error, setError]         = useState(false);

  //----------------------------------------------------------------------------

  useEffect(() => {
    clearForm();
  }, []);

  const clearForm = () => {
    setNome('');
    setUser('');
    setPassword('');
    setPassword2('');
    setCurso('');
  };

  //----------------------------------------------------------------------------

  function AbrirTelaLogin() {
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
            <TextLogin>Criar Conta</TextLogin>
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
                placeholder="Usuário"
                placeholderTextColor="#643CB4"
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
                placeholderTextColor="#643CB4"
                autoCapitalize="none"
                autoCorrect={false}
                maxLength={35}
                returnKeyType="done"
                blurOnSubmit={false}
                value={password}
                onChangeText={t => setPassword(t)}
              />
            </ContainerInput>
            <ContainerInput>
              <TextInput
                placeholder="Repita a Senha"
                placeholderTextColor="#643CB4"
                autoCapitalize="none"
                autoCorrect={false}
                maxLength={35}
                returnKeyType="done"
                blurOnSubmit={false}
                value={password2}
                onChangeText={t => setPassword2(t)}
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
            <RadioButton
              selectedId='A'
            />
            <PrimaryButton title={'Criar Contra'} fn={AbrirTelaLogin} />
            <SecundaryButton title={'Inicio'} fn={AbrirTelaLogin} />
            {error && <TextError>Dados inválido(s)</TextError>}
          </View>
        </Container>
      </TouchableWithoutFeedback>
    </>
  );
};

export default NovoCadastro;
