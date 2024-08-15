import { createContext, useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, ActivityIndicator, Linking } from 'react-native';
import Styled from 'styled-components/native'
import {Link, Route, Routes, BrowserRouter} from 'react-router-dom'

// const Container = Styled.SafeAreaView`
//   flex: 1;
//   background-color: #141414;
//   justify-content: center;
//   align-items: center;
// `;
const FormContainer = Styled.View`
  width: 100%;
  padding: 40px;
`;
const PasswordReset = Styled.Text`
  width: 100%;
  font-size: 12px;
  color: #FFFFFF;
  text-align: center;
`;

const Input = ({
    placeholder,
    secureTextEntry,
}) => {
    const Container = Styled.View`
        width: 100%;
        height: 40px;
        padding-left: 16px;
        padding-right: 16px;
        border-radius: 4px;
        background-color: #333333;
    `;
    const InputField = Styled.TextInput`
        flex: 1;
        color: #FFFFFF;
    `;
    
    return (
        <Container>
            <InputField
                selectionColor='#FFFFFF'
                secureTextEntry={secureTextEntry}
                autoCapitalize='none'
                autoCorrect={false}
                allowFontScaling={false}
                placeholder={placeholder}
                placeholderTextColor='#FFFFFF'
                clearButtonMode='never'
                // onChangeText={onChangeText}
            />
        </Container>
    )
}
const Button = ({ label, onPress, navigation }) => {
    const StyleButton = Styled.TouchableOpacity`
        width: 100%;
        height: 40px;
        border: 1px;
        border-color: #333333;
        border-radius: 4px;
        justify-content: center;
        align-items: center;
    `;
    const Label = Styled.Text`
        color: #FFFFFF;
    `;

    if (navigation.value) {
        return (
            <a href='../movies'>
                <StyleButton onPress={onPress}>
                    <Label>{label}</Label>
                </StyleButton>
            </a>
        )
    } else {
        return (
            <StyleButton onPress={onPress}>
                <Label>{label}</Label>
            </StyleButton>
        )
        
    }
}
const Login = ({ navigation }) => {
    const Container = Styled.SafeAreaView`
        flex: 1;
        background-color: #141414;
        justify-content: center;
        align-items: center;
    `;

    return (
        <Container>
            <FormContainer>
                <Input placeholder='email' secureTextEntry={false} />
                <Input placeholder='password' secureTextEntry={true}/>
                <Button label='login' navigation={navigation} onPress={() => {
                    // navigation.navigate('MovieNavigator')
                }} />
            </FormContainer>
            <PasswordReset
                onPress={() => {
                    Linking.openURL('https://github.com')
                }}
            >
                Password Reset
            </PasswordReset>
        </Container>
    )
}
const navigationOption = {
    title:'movies',
    headerTransparent: true,
    headerTintColor: '#E70915',
    headerTitleStyle: {
        fontWeight: 'bold',
    }
}

export {Login, navigationOption};