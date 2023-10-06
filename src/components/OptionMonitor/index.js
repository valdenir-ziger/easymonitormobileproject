import React             from 'react';
import graduation_cap    from '../../assets/graduation_cap.png';
import calendar          from '../../assets/calendar.png';
import imagem            from '../../assets/foto.png';
import { useNavigation } from '@react-navigation/native';

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

const OptionMonitor = ({nome, formacao, diponibilidade, screen }) => {
  
  const navigation = useNavigation();

  const onClickOption = () => {
    navigation.navigate(`${screen}`);
  };

  return (
    <>
      <ButtonOption onPress={onClickOption}>
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
