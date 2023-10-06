import React, { useState }  from 'react';
import {Picker}             from "@react-native-picker/picker";
import { StyleSheet, View } from 'react-native';

const Lista = () => {
  const [Enable , setEnable]  = useState("courses");

  const styles = StyleSheet.create({
    pickerStyles:{
      width: 348,
      height:52,
      backgroundColor:'#fff3c2',
      color: '#643CB4',
      borderColor:'#643CB4',
      fontSize:20
    }
  });

  return (
    <View>
      <Picker
        selectedValue={Enable}
        style={styles.pickerStyles}
        mode={'dialog'}
        onValueChange={(itemValue) => setEnable(itemValue)}>
          <Picker.Item label="Algoritmos 2"                    value="1" />
          <Picker.Item label="Estrutura de Dados"              value="2" />
          <Picker.Item label="Banco de Dados 1"                value="3" />
          <Picker.Item label="Programação Orientada a Objetos" value="4" />
          <Picker.Item label="Algebra Linear"                  value="5" />
          <Picker.Item label="Lógica de Programação"           value="6" />
          <Picker.Item label="Probabilidade e Estatística"     value="7" />
        </Picker>
      </View>
  );
};

export default Lista;
