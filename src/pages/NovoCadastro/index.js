import api                                        from "../../config_axios";
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
  const [curso, setCurso]         = useState('');
  const [periodo, setPeriodo]     = useState('');
  const [email, setEmail]         = useState('');
  const [tipo, setTipo]           = useState('');
  const [error, setError]         = useState(false);

  //----------------------------------------------------------------------------

  useEffect(() => {
    clearForm();
  }, []);

  const clearForm = () => {
    setNome('');
    setUser('');
    setPassword('');
    setCurso('');
    setPeriodo('');
    setEmail('');
    setTipo('');
  };
  //----------------------------------------------------------------------------
  function novoCadastro() {
    let headers = {headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
    }}
    let notification = JSON.stringify({
      login   : user,
      senha   : password,
      nome    : nome, 
      curso   : curso, 
      periodo : periodo, 
      email   : email, 
      tipo    : tipo
    })
    
    api.post('/cadastrarpessoa', notification, headers).then((response) => {
      console.log(response.status);
      if (response.status == 200) {
        let json = JSON.parse(JSON.stringify(response.data.data));
        console.log(json.pessoas);
        navigation.navigate('Login');
        setError(false);
        clearForm();
      }
      else{
        setError(true);
      }
    }).catch(error => {
      console.log(error);
      setError(true);
    });
  }

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
            <ContainerInput>
              <TextInput
                placeholder="E-Mail"
                placeholderTextColor="#643CB4"
                autoCapitalize="none"
                autoCorrect={false}
                maxLength={35}
                returnKeyType="done"
                blurOnSubmit={false}
                value={email}
                onChangeText={t => setEmail(t)}
              />
            </ContainerInput>
            <RadioButton
              id={tipo}
              selectedId={tipo}
              onPress={t => setTipo(t)}
            />
            <PrimaryButton title={'Criar Contra'} fn={novoCadastro} />
            <SecundaryButton title={'Inicio'} fn={AbrirTelaLogin} />
            {error && <TextError>Dados inválido(s)</TextError>}
          </View>
        </Container>
      </TouchableWithoutFeedback>
    </>
  );
};
 
export default NovoCadastro;
