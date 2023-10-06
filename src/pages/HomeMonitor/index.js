import React from 'react';
import OptionHome from '../../components/OptionHome';
import HeaderDrawer from '../../components/HeaderDrawer';
import {Container, ContainerText, TextUser} from './styles';

const HomeMonitor = () => {
  return (
    <>
      <HeaderDrawer title="EasyMonitor" />
      <ContainerText>
        <TextUser>Olá, Monitor!</TextUser>
      </ContainerText>
      <Container>
        <OptionHome
          screen="AlterarCadastro"
          title="Dados Pessoais"
        />
        <OptionHome
          screen="CadastrarMonitoria"
          title="Nova Monitoria"
        />
        <OptionHome
          screen="GerenciarMonitoria"
          title="Gerenciar Monitoria(s)"
        />
      </Container>
    </>
  );
};

export default HomeMonitor;
