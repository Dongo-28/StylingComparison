import React from 'react';
import styled from 'styled-components/native';

export default function App() {
  return (
    <Container>
      <Title>Tela com Styled Components</Title>

      <Button>
        <ButtonText>Clique aqui</ButtonText>
      </Button>
    </Container>
  );
}
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
`;

const Title = styled.Text`
  font-size: 22px;
  margin-bottom: 20px;
  font-weight: bold;
`;

const Button = styled.TouchableOpacity`
  background-color: #007aff;
  padding: 12px 25px;
  border-radius: 8px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;