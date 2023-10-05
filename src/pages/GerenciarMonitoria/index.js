import React from 'react';
import OptionHome from '../../components/OptionHome';
import HeaderDrawer from '../../components/HeaderDrawer';
import {Container, ContainerText, TextUser} from './styles';

const HomeUsuario = () => {
  return (
    <>
      <HeaderDrawer title="EasyMonitor" />
      <ContainerText>
        <TextUser>Olá Usuário!</TextUser>
      </ContainerText>
      <Container>
        <OptionHome
          option={null}
          screen={null}
          icon="document-text"
          title="Agendar Monitoria"
        />
        <OptionHome
          option={null}
          screen="Login"
          icon="document-text"
          title="Sair"
        />
      </Container>
    </>
  );
};

export default HomeUsuario;
