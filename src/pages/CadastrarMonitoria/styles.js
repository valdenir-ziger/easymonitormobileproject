import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-self: center;
  background-color: #fff3c2;
`;

export const ContainerText = styled.View`
  margin-left: 24px;
  margin-right: 24px;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const TextUser = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 26px;
  color: #643CB4;
  fontWeight: bold;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-size: 19px;
  height: 52px;
  padding-left: 12px;
  color: #2e3e5c;
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
