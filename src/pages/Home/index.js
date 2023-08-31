import React from 'react';
import OptionHome from '../../components/OptionHome';
import HeaderDrawer from '../../components/HeaderDrawer';
import {Container, ContainerText, TextUser} from './styles';

const Home = () => {
  return (
    <>
      <HeaderDrawer title="EasyMonitor" />
      <ContainerText>
        <TextUser>Olá!</TextUser>
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

export default Home;
