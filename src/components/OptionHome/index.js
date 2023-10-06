import React                        from 'react';
import { useNavigation }            from '@react-navigation/native';
import topico                       from '../../assets/topico.png';
import setaDireita                  from '../../assets/seta_direita.png';
import { ButtonOption, TextOption, Icone, SetaDireita } from './styles';

const OptionHome = ({ screen, title }) => {
  const navigation = useNavigation();

  const onClickOption = () => {
    navigation.navigate(`${screen}`);
  };

  return (
    <>
      <ButtonOption onPress={onClickOption}>
        <Icone source={topico} />
        <TextOption>{title}</TextOption>
        <SetaDireita source={setaDireita} />
      </ButtonOption>
    </>
  );
};

export default OptionHome;
