import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: left;
  justify-content: center;
  background-color: #fff3c2;
`;

export const ContainerText = styled.View`
  margin-left: 24px;
  margin-right: 24px;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const TextUser = styled.Text.attrs({numberOfLines: 1})`
  textAlign: left;
  fontSize: 26px;
  color: #643CB4;
  fontWeight: bold;
  margin-left: 10px;
`;

export const TextoTopico = styled.Text.attrs({numberOfLines: 1})`
  textAlign: left;
  fontSize: 26px;
  color: #643CB4;
  fontWeight: bold;
  margin-left: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const TextoLivre = styled.Text.attrs({numberOfLines: 1})`
  textAlign: left;
  font-size: 20px;
  color: #643CB4;
  margin-left: 20px;
`;

export const Quadrado = styled.Image`
  alignSelf: left;
  height: 100px;
  width: 100px;
  margin-bottom: 1px;
  margin-left: 5px;
  border-radius: 15px;
  border-width: 2px;
`;

export const ButtonOptionColumn = styled.TouchableOpacity`
  width: 250px;
  height: 100px;
  background-color: #fff3c2;
  alignSelf: left;
  flex-direction: Column;
`;

export const ButtonOptionRow = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  background-color: #fff3c2;
  alignSelf: left;
  flex-direction: row;
`;
