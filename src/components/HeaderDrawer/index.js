import React from 'react';
import {SafeAreaView} from 'react-native';
import {Container, MenuButton, Title} from './styles';

const HeaderDrawer = ({title}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#fdfdfd'}}>
      <Container>
        <Title>{title}</Title>
      </Container>
    </SafeAreaView>
  );
};

export default HeaderDrawer;
