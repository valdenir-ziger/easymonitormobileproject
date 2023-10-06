import styled from 'styled-components/native';

export const ButtonOption = styled.TouchableOpacity`
  width: 90%;
  height: 130px;
  margin-bottom: 8px;
  background-color: #fff3c2;
  border-width: 1px;
  border-color: #643CB4;
  border-radius: 4px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
`;

export const TextOption = styled.Text`
  flex: 1;
  font-size: 20px;
  color: #643CB4;
  fontWeight: bold;
  padding-left: 16px;
  text-align: left;
`;

export const Icone = styled.Image`
  align-self: center;
  margin-top: 5%;
  margin-bottom: 5%;
  max-width: 40px;
  min-width: 40px;
  max-height: 40px;
  min-height: 40px;
`;

export const SetaDireita = styled.Image`
  align-self: center;
  margin-top: 5%;
  margin-bottom: 5%;
  max-width: 20px;
  min-width: 20px;
  max-height: 20px;
  min-height: 20px;
`;
