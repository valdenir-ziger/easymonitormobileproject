import React, { useState } from 'react';
import { SelectList }               from 'react-native-dropdown-select-list'
import {Container}                  from './styles';

const Lista = () => {

  const data = [
      {key:'1', value:'Algoritmos 2', disabled:true},
      {key:'2', value:'Estrutura de Dados'},
      {key:'3', value:'Banco de Dados 1'},
      {key:'4', value:'Programação Orientada a Objetos', disabled:true},
      {key:'5', value:'Algebra Linear'},
      {key:'6', value:'Lógica de Programação'},
      {key:'7', value:'Probabilidade e Estatística'},
  ]

  const [selected, setSelected] = useState();

  return (
    <Container>
      <SelectList 
          setSelected={(val) => setSelected(val)} 
          data={data} 
          save="value"
          search={false} 
      />
    </Container>
  );
};

export default Lista;
