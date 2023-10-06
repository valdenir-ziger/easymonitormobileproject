import styled from 'styled-components/native';

export const ButtonOption = styled.TouchableOpacity`
  width: 75%;
  height: 42%;
  margin-bottom: 5px;
  background-color: #fff3c2;
  border-width: 2px;
  border-color: #643CB4;
  border-radius: 5px;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
`;

export const ButtonOptionColumn = styled.TouchableOpacity`
  width: 250px;
  height: 40px;
  background-color: #fff3c2;
  border-color: #fff3c2;
  align-self: center;
  flex-direction: row;
`;

export const TextOption = styled.Text`
  font-size: 24px;
  color: #643CB4;
  fontWeight: bold;
`;

export const TextFormacao = styled.Text`
  margin-top: 3%;
  margin-left: 3%;
  font-size: 16px;
  color: #643CB4;
  text-align: left;
`;

export const TextDisponibilidade = styled.Text`
  margin-top: 3%;
  margin-left: 3%;
  font-size: 16px;
  color: #643CB4;
  text-align: left;
`;

export const IconeGraduacao = styled.Image`
  max-width: 30px;
  min-width: 30px;
  max-height: 30px;
  min-height: 30px;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  height: 55px;
  margin-bottom: 1px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 4px;
  border-width: 1px;
  background-color: #fff3c2;
  border-color: #fff3c2;
`;

export const Calendario = styled.Image`
  margin-top: 1%;
  margin-bottom: 1%;
  max-width: 30px;
  min-width: 30px;
  max-height: 30px;
  min-height: 30px;
`;

export const Foto = styled.Image`
  align-self: top;
  margin-top: 2%;
  margin-bottom: 1%;
  max-width: 100px;
  min-width: 100px;
  max-height: 100px;
  min-height: 100px;
`;
