import React from 'react';
import { useNavigation } from '@react-navigation/native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { ButtonOption, TextOption } from './styles';

const OptionHome = ({ screen, icon, title }) => {
  const navigation = useNavigation();

  const onClickOption = () => {
    navigation.navigate(`${screen}`);
  };

  return (
    <>
      <ButtonOption onPress={onClickOption}>
        <IonIcon name={icon} size={38} color="#2E3E5C" />
        <TextOption>{title}</TextOption>
        <IonIcon name="chevron-forward" size={28} color="#2E3E5C" />
      </ButtonOption>
    </>
  );
};

export default OptionHome;
