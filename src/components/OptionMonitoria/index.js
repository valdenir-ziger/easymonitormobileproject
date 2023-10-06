import React             from 'react';
import graduation_cap    from '../../assets/graduation_cap.png';
import calendar          from '../../assets/calendar.png';
import imagem            from '../../assets/foto.png';
import PrimaryButton     from '../../components/PrimaryButton';

import { 
  ButtonOption, 
  ButtonOptionColumn,
  TextOption, 
  IconeGraduacao, 
  Calendario, 
  Foto, 
  TextFormacao,
  TextDisponibilidade,
  Container } from './styles';

const OptionMonitoria = ({nome, formacao, diponibilidade }) => {
  return (
    <>
      <ButtonOption>
        <Foto source={imagem} />
        <TextOption>{nome}</TextOption>
        <ButtonOptionColumn>
           <IconeGraduacao source={graduation_cap} />
           <TextFormacao>{formacao}</TextFormacao>
        </ButtonOptionColumn>
        <ButtonOptionColumn>
            <Calendario source={calendar} />
            <TextDisponibilidade>{diponibilidade}</TextDisponibilidade>
        </ButtonOptionColumn>
        <ButtonOptionColumn>
          <Container>
            <PrimaryButton title={'Aceitar'}/>
          </Container>
          <Container>
            <PrimaryButton title={'Recusar'}/>
          </Container>
        </ButtonOptionColumn>
      </ButtonOption>
    </>
  );
};

export default OptionMonitoria;
