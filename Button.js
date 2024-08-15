import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Styled from 'styled-components/native'

const Container = Styled.Pressable``;
const Icon = Styled.Image``;

const Button = ({ iconName, onPress }) => {
  return (
    <Container onPress={onPress}>
      <Icon source={iconName === 'plus' ? require('../assets/add.png') : require('../assets/remove.png')} />
    </Container>
  )
}

export default Button

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
