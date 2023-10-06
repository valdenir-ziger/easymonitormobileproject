import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ContainerText = styled.View`
  margin-left: 5px;
  margin-right: 24px;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const TextUser = styled.Text.attrs({numberOfLines: 1,})`
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
  justify-content: left;
  height: 9%;
  width: 100%;
  margin-bottom: 15px;
  padding-left: 1px;
  border-radius: 4px;
  border-width: 2px;
  border-color:  #643CB4;
  background-color: #fff3c2;
`;
