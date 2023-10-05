import React, { useMemo, useState } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import {Container} from './styles';

const RadioButton = ({seleciona}) => {
  const radioButtons = useMemo(() => ([
      {
          id: 'A', 
          label: 'Aluno',
          value: 'aluno',
          selected: true,
          color: "#643CB4",
          size: 26
      },
      {
          id: 'M',
          label: 'Monitor',
          value: 'monitor',
          selected: false,
          color: "#643CB4",
          size: 26
      }
  ]), []);

  const [selectedId, setSelectedId] = useState();

  return (
    <Container>
      <RadioGroup 
          radioButtons={radioButtons} 
          onPress={setSelectedId}
          selectedId={selectedId}
      />
    </Container>
  );
};

export default RadioButton;
