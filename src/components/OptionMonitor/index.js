import React             from 'react';
import graduation_cap    from '../../assets/graduation_cap.png';
import calendar          from '../../assets/calendar.png';
import imagem            from '../../assets/foto.png';

import { 
  ButtonOption, 
  ButtonOptionColumn,
  TextOption, 
  IconeGraduacao, 
  Calendario, 
  Foto, 
  TextFormacao,
  TextDisponibilidade
 } from './styles';

const OptionMonitor = ({nome, formacao, diponibilidade }) => {
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
      </ButtonOption>
    </>
  );
};

export default OptionMonitor;
