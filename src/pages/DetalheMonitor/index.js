import React         from 'react';
import { View}       from 'react-native';
import HeaderDrawer  from '../../components/HeaderDrawer';
import PrimaryButton from '../../components/PrimaryButton';
import foto          from '../../assets/foto.png';
import {
  Container, 
  ContainerText,
  TextUser,
  TextoLivre,
  TextoTopico,
  Quadrado,
  ButtonOptionColumn,
  ButtonOptionRow
} from './styles';

const DetalheMonitor = () => {
  return (
    <>
      <HeaderDrawer title="EasyMonitor" />
      <Container>
        <View style={{width: '90%', height: '100%', alignSelf: 'center', color: '#643CB4'}}>
          <ContainerText>
            <TextUser>Monitor 1</TextUser>
          </ContainerText>
          <ButtonOptionRow>
            <Quadrado source={foto}/>
            <ButtonOptionColumn> 
              <TextoLivre>Estudante da UTFPR-DV</TextoLivre>
              <TextoLivre>4º Período</TextoLivre>
              <TextoLivre>Disponível a tarde</TextoLivre>
            </ButtonOptionColumn>
          </ButtonOptionRow>
          <Container>
            <TextoTopico>Matérias</TextoTopico>
            <Container>
              <TextoLivre>* Algoritmo</TextoLivre>
              <TextoLivre>* Estrutura de Dados</TextoLivre>
              <TextoLivre>* Programação Orientada a Objetos</TextoLivre>
            </Container>
          </Container>
          <Container>
            <TextoTopico>Horários disponíveis</TextoTopico>
            <Container>
              <TextoLivre>Terca-feira</TextoLivre>
              <TextoLivre>* 14h às 17h</TextoLivre>
              <TextoLivre>Quarta-feira</TextoLivre>
              <TextoLivre>* 13:30h às 15h</TextoLivre>
              <TextoLivre>Sexta-feira</TextoLivre>
              <TextoLivre>* 16h às 18h</TextoLivre>
            </Container>
          </Container>
          <TextoTopico> </TextoTopico>
          <Container>
            <PrimaryButton title={'Agendar Monitoria'} />
          </Container>
        </View>
      </Container>
    </>
  );
};

export default DetalheMonitor;
