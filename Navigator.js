import { createContext, useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import Styled from 'styled-components/native'
import {Link, Route, BrowserRouter} from 'react-router-dom'
import CheckLogin from './CheckLogin';

// const LoginNavigator = createStackNavigator({
    
// })
const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: #EEE;
`;
const WeatherContainer = Styled(FlatList)``;
const LoadingView = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Loading = Styled.ActivityIndicator``;
const LoadingLabel = Styled.Text`
    font-size: 16px;
`;
const WeatherItemContainer = Styled.View`
    height: 100%;
    justify-content: center;
    align-items: center;
`;
const Weather = Styled.Text`
    font-size: 24px;
    font-weight: bold;
`;
const Temperature = Styled.Text`
    font-size: 16px;
`

const Navigator = ({navigation}) => {
    let checklogin
    if (navigation.value) {
        checklogin = './movie'
    } else {
        checklogin = './login'
    }
    return (
        <Container>
            <ul>
                <li><a href='./'>Home</a></li>
                <li><a href='./checklogin'>CheckLogin</a></li>
                <li><a href={checklogin}>checklogin</a></li>
                <li><a href='./login'>Login</a></li>
                <li><a href='./movies'>Movies</a></li>
            {/* <BrowserRouter> */}
                {/* <li><Link to='/links'>Links</Link></li> */}
            {/* </BrowserRouter> */}
            </ul>
        </Container>
    )
}

export default Navigator;