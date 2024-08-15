import { createContext, useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, ActivityIndicator, Linking, Dimensions } from 'react-native';
import Styled from 'styled-components/native'
import {Link, Route, Routes, BrowserRouter} from 'react-router-dom'

const Container = Styled.ScrollView`
  flex: 1;
  background-color: #EEE;
`;
const LoadingContainer = Styled.View`
  flex: 1;
  background-color: #EEE;
  align-item: center;
  justify-content: center;
`
const ContainerTitle = Styled.Text`
  font-size: 16px;
  color: #FFFFFF;
  font-weight: bold;
  padding: 24px 16px 8px 16px;
`
const DescriptionContainer = Styled.View``;
const Description = Styled.Text`
    padding: 0 16px;
    color: #FFFFFF;
`;
const SubInfoContainer = Styled.View``;
const InfoContainer = Styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 0 16px;
`
const LabelInfo = Styled.Text`
    color: #FFFFFF;
`

const MoviesDetail = ({navigation}) => {
    return (
        <Container>
            <Text>{navigation.value}</Text>
        </Container>
    )
}

export default MoviesDetail;