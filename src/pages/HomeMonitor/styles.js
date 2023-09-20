import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
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
  color: #2e3e5c;
`;
