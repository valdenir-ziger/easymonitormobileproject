import React from 'react';
import { Button, Text } from './styles';

const SecundaryButton = ({ title, fn }) => {
  return (
    <>
      <Button onPress={fn}>
        <Text>{title}</Text>
      </Button>
    </>
  );
};

export default SecundaryButton;
