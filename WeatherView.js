import { createContext, useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import Styled from 'styled-components/native'
import Geolocation from 'react-native-geolocation-service'

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
const APIKEY = 'e9f8a415cef0c0bb87f7da5e167bdaf1'

const WeatherView = () => {
    const [weatherInfo, setWeatherInfo] = useState({
        temperature: undefined,
        weather: undefined,
        isLoading: false,
    })
    
    const showError = (message) => {
        setTimeout(() => {
            Alert.alert(message)
            console.log(message)
        }, 500)
    }
    const getCurrentWeather = () => {
        setWeatherInfo({
            isLoading: false,
        })
        Geolocation.getCurrentPosition(
            (position) => {
                console.log(position.coords)
                const { latitude, longitude } = position.coords;
                fetch(
                    `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${APIKEY}&units=metric`
                )
                .then((response) => {
                    console.log(response)
                    return (
                        response.json()
                    )
                })
                .then((json) => {
                    console.log(json)
                    setWeatherInfo({
                        temperature: json.main.temp,
                        weather: json.weather[0].main,
                        isLoading: true,
                    })
                })
                .then(() => {
                    showError('Failed to load weatherinfo')
                })
                .catch((error) => {
                    setWeatherInfo({
                        isLoading: true,
                    })
                    showError('Failed to load weatherinfo')
                })
            },
            (error) => {
                setWeatherInfo({
                    isLoading: true,
                })
                showError('Failed to load positioninfo')
            }
        )
    }
    useEffect(() => {
        getCurrentWeather();
    }, []);
    let data = [];
    const {
        isLoading,
        weather,
        temperature
    } = weatherInfo;
    if (weather && temperature) {
        data.push(weatherInfo);
    }

    return (
            <Container>
                <WeatherContainer 
                    onRefresh={() => getCurrentWeather()}
                    refreshing={isLoading}
                    data={data}
                    keyExtractor={(item, index) => {
                        return (
                            `Weather-${index}`
                            );
                    }}
                    ListEmptyComponent = {
                        <LoadingView>
                            <Loading size='large' color='#1976D2' />
                            <LoadingLabel>Loading</LoadingLabel>
                        </LoadingView>
                    }
                    renderItem={({ item, index }) => {
                        return (
                            <WeatherItemContainer>
                                <Weather>{item.weather}</Weather>
                                <Temperature>{item.temperature}celsius</Temperature>
                            </WeatherItemContainer>
                        )
                    }}
                    contentContainerStyle={{flex: 1}}
                />
            </Container>
    )
}

export default WeatherView;