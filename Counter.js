import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Styled from 'styled-components/native';
import { useState } from 'react';
import Button from './Button';

const Container = Styled.SafeAreaView`
  flex: 1;
`;
const TitleContainer = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const TitleLabel = Styled.Text`
  font-size: 24px;
`;
const CountContainer = Styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`;
const CountLabel = Styled.Text`
  font-size: 24px;
  font-weight: bold;
`;
const ButtonContainer = Styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Counter = ({ title, initValue }) => {
  const[num, setNum] = useState(0);
  return (
    <Container>
      {title && (
        <TitleContainer>
          <TitleLabel>{title}</TitleLabel>
        </TitleContainer>
      )}
      <CountContainer>
        <CountLabel>{initValue + num}</CountLabel>
      </CountContainer>
      <ButtonContainer>
        <Button iconName='plus' onPress={() => setNum(num+1)} />
        <Button iconName='minus' onPress={() => setNum(num-1)} />
      </ButtonContainer>
    </Container>
  )
}

export default Counter

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
const styles = StyleSheet.create({
  container: {
    alignItems: 'baseline',
  }
})
