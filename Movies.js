import { createContext, useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, ActivityIndicator, Linking, Dimensions } from 'react-native';
import Styled from 'styled-components/native'
import {Link, Route, Routes, BrowserRouter, useNavigate} from 'react-router-dom'

// const Container = Styled.SafeAreaView`
//   flex: 1;
//   background-color: #141414;
//   justify-content: center;
//   align-items: center;
// `;
const BigCatalog = ({
        id,
        image,
        year,
        title,
        genres,
        summary,
        onPress
    }) => {
        const Container = Styled.Pressable`
        `;
        const CatalogImage = Styled.Image`
            width: 300px;
            height: 500px;
        `;
        const InfoContainer = Styled.View`
            position: absolute;
            bottom: 0;
            width: 100%;
            align-items: flex-start;
        `;
        const LabelYear = Styled.Text`
            background-color: #E70915;
            color: #FFFFFF;
            padding: 4px 8px;
            font-weight: bold;
            border-radius: 4px;
        `;
        const SubInfoContainer = Styled.View`
        `;
        const Background = Styled.View`
            position: absolute;
            width: 100%;
            height: 100%;
            stop: 0;
            left: 0;
            background-color: #141414;
        `;
        const LabelTitle = Styled.Text`
            font-size: 18px;
            font-weight: bold;
            color: #FFFFFF;
            padding: 8px 16px 4px 16px;
        `;
        const LabelGenres = Styled.Text`
            font-size: 12px;
            color: #FFFFFF;
            padding: 4px 16px 8px 16px;
        `;
        return (
            <Container
                onPress={() => {
                    if (onPress) {
                        onPress(summary)
                    }
                }}
                >
                <CatalogImage 
                    source={{ uri: image }}
                />
                <InfoContainer>
                    <LabelYear>{year} released</LabelYear>
                    <SubInfoContainer>
                        <Background />
                        <LabelTitle>{title}</LabelTitle>
                        <LabelGenres>{genres.join(', ')}</LabelGenres>
                    </SubInfoContainer>
                </InfoContainer>
            </Container>
        )
    }
const BigCatalogList = ({ url, onPress }) => {
    const Container = Styled.View`
      height: 600px;
    `;
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(url)
        .then(response => {
            return (
                response.json()
            )
        })
        // .then(response => response.json)
        .then(json => {
            // const {
            //     data: {
            //       data: { movies },
            //     },
            // } = json
            // console.log(json);
            setData(json.data.movies);
        })
        .catch(error => {
            console.log(error);
        })
    }, [])

    return (
        <Container>
            <FlatList
            horizontal={true}
            pagingEnabled={true}
            data={data}
            keyExtractor={(item, index) => {
                return (
                    `bigScreen-${index}`
                )
            }}
            renderItem={({ item, index }) => {
                return (
                        <BigCatalog 
                            id={item.id}
                            image={item.large_cover_image}
                            year={item.year}
                            title={item.title}
                            genres={item.genres}
                            summary={item.summary}
                            onPress={onPress}
                            // onClick={() => {
                            //     console.log(paragraph)
                            // }}
                        />
                )
            }}
            >
            </FlatList>
        </Container>
    )
}
const SubCatalogList = ({ title, url, onPress }) => {
    const Container = Styled.View``;
    const InfoContainer = Styled.View`
        flex-direction: row;
        justify-content: space-between;
        padding: 8px 16px;
    `;
    const Title = Styled.Text`
        font-size: 16px;
        color: #FFFFFF;
        font-weight: bold;
    `;
    const CatalogContainer = Styled.View`
        height: 201px;
    `;
    const CatalogImageContainer = Styled.Pressable`
        padding: 0px 4px;
    `;
    const CatalogImage = Styled.Image`
        width: 500px;
        height: 500px;
    `;
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(url)
        .then(response => {
            return (
                response.json()
            )
        })
        // .then(response => response.json)
        .then(json => {
            // const {
            //     data: {
            //       data: { movies },
            //     },
            // } = json
            // console.log(json);
            setData(json.data.movies);
        })
        .catch(error => {
            console.log(error);
        })
    }, [])

    return(
        <Container>
            <InfoContainer>
                <Title>{title}</Title>
            </InfoContainer>
            <CatalogContainer>
                <FlatList
                    horizontal={true}
                    data={data}
                    keyExtractor={(item, index) => {
                        return (
                            `catalogList-${item.id}-${index}`
                        )
                    }}
                    renderItem={({ item, index }) => {
                        return (
                                <CatalogImageContainer
                                    onPress={() => {
                                        onPress(item.summary)
                                    }}
                                    >
                                    <CatalogImage 
                                        source={{ uri: item.large_cover_image }} 
                                        />
                                </CatalogImageContainer>
                        )
                    }}
                />
            </CatalogContainer>
        </Container>
    )
}
const Movies = ({ navigation }) => {
    // const [paragraph, setParagraph] = useState(false)
    const Container = Styled.View`
      flex: 1;
      background-color: #141414;
    `;
    const StyleButton = Styled.TouchableOpacity`
        width: 100%;
        height: 40px;
        border: 1px;
        border-color: #333333;
        border-radius: 4px;
        justify-content: center;
        align-items: center;
    `;
    const Icon = Styled.Image``;
    const loggingout = () => {

    }
    const navigate = useNavigate()

    // useEffect(() => {

    // }, []);
    return (
        <Container>
                <BigCatalogList 
                    url="https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
                    onPress={(summary) => {
                        navigate('../moviesdetail')
                        navigation.push(summary)
                    }}
                />
                <SubCatalogList 
                    title='rating order'
                    url="https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
                    onPress={(summary) => {
                        navigate('../moviesdetail')
                        navigation.push(summary)
                    }}
                />
        </Container>
    )
}

export default Movies;