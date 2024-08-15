import { createContext, useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, ActivityIndicator } from 'react-native';
import Styled from 'styled-components/native'
import {Link, Route, Routes, BrowserRouter} from 'react-router-dom'

const Container = Styled.View`
  flex: 1;
  background-color: #141414;
  justify-content: center;
  align-items: center;
`;

const CheckLogin = ({ navigation }) => {
    if (navigation.value) {
        // navigation.navigate('MovieNavigator')
    } else {
        // navigation.navigate('LoginNavigator')
    }
    return (
        <Container>
            <ActivityIndicator size='large' color='#E70915' />
        </Container>
    )
}

export default CheckLogin;