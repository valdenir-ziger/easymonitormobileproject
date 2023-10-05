import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-self: center;
  background-color: #fff3c2;
`;

export const Logo = styled.Image`
  align-self: center;
  margin-top: 2%;
  margin-bottom: 2%;
  max-width: 120px;
  min-width: 80px;
  max-height: 120px;
  min-height: 80px;
`;

export const TextLogin = styled.Text`
  font-size: 26px;
  fontWeight: bold;
  color: #643CB4;
  margin-bottom: 12px;
  left: 4px;
`;

export const TextError = styled.Text`
  color: red;
  font-size: 17px;
  align-self: center;
  top: 8px;
`;

export const ContainerInput = styled.View`
  justify-content: center;
  height: 52px;
  margin-bottom: 16px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 4px;
  border-width: 1px;
  border-color: #d0dbea;
  background-color: #fff;
  color: #2e3e5c;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-size: 19px;
  height: 52px;
  padding-left: 12px;
  color: #2e3e5c;
`;
