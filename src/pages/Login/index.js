import api                                        from "../../config_axios";
import React, {useState, useEffect}               from 'react';
import {useNavigation}                            from '@react-navigation/native';
import {Keyboard, TouchableWithoutFeedback, View} from 'react-native';
import logo                                       from '../../assets/logo.png';
import PrimaryButton                              from '../../components/PrimaryButton';
import SecundaryButton                            from '../../components/SecundaryButton';
import {Container,Logo,TextLogin,TextError,ContainerInput,TextInput,} from './styles';

const Login = () => {

  const navigation             = useNavigation();
  const [login, setUser]       = useState('');
  const [senha, setPassword]   = useState('');
  const [isError, setIsError]  = useState(false);

  //----------------------------------------------------------------------------
  useEffect(() => {
    clearForm();
  }, []);

  const clearForm = () => {
    setUser('');
    setPassword('');
  };

  //----------------------------------------------------------------------------
  function loginValidate() {
    let headers = {headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
    }}
    let notification = JSON.stringify({
      login: login,
      senha: senha
    })
    
    api.post('/login', notification, headers).then((response) => {
      if (response.status == 200) {
        let json = JSON.parse(JSON.stringify(response.data.data));
        console.log(json.pessoas);
        if (json.pessoas.tipo == 1) {
          navigation.navigate('HomeMonitor', response.data.data);
          setIsError(false);
          clearForm();
        } 
        else {
          navigation.navigate('HomeUsuario', response.data.data);
          setIsError(false);
          clearForm();
        }
      }
      else{
        setIsError(true);
      }
    }).catch(error => {
      console.log(error);
      setIsError(true);
    });
  }

  //----------------------------------------------------------------------------
  function NovoCadastro() {
      navigation.navigate('NovoCadastro');
      setIsError(false);
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
                placeholderTextColor="#643CB4"
                autoCapitalize="none"
                autoCorrect={false}
                maxLength={35}
                returnKeyType="done"
                blurOnSubmit={false}
                value={login}
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
                value={senha}
                onChangeText={t => setPassword(t)}
              />
            </ContainerInput>
            <PrimaryButton title={'Entrar'} fn={loginValidate} />
            <SecundaryButton title={'Registrar - se'} fn={NovoCadastro} />
            {isError && <TextError>Usuário e/ou senha inválido(s)</TextError>}
          </View>
        </Container>
      </TouchableWithoutFeedback>
    </>
  );
};

export default Login;
