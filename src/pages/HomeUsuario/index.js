import React                                from 'react';
import OptionHome                           from '../../components/OptionHome';
import HeaderDrawer                         from '../../components/HeaderDrawer';
import {Container, ContainerText, TextUser} from './styles';

const HomeUsuario = () => {
  // let json = JSON.parse(JSON.stringify(parametros));
  // console.log(json);
  return (
    <>
      <HeaderDrawer title="EasyMonitor" />
      <ContainerText>
        <TextUser>Olá, Usuário!</TextUser>
      </ContainerText>
      <Container>
        <OptionHome
          screen="SelecionarMateria"
          title="Agendar Monitoria"
        />
      </Container>
    </>
  );
};

export default HomeUsuario;
