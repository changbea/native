import { StatusBar } from 'expo-status-bar';
import { createContext, useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Styled from 'styled-components/native'

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
                      <a href='./moviesdetail'>    
                          <CatalogImageContainer
                              onPress={(item) => {
                                  summary = item.summary
                              }}
                              >
                              <CatalogImage 
                                  source={{ uri: item.large_cover_image }} 
                                  />
                          </CatalogImageContainer>
                      </a>
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
                  navigate('../moviesdetail', {value: summary})
                  // setParagraph(summary)
                  // paragraph = [];
                  // if(paragraph.length !== 0) {
                  //   paragraph = [];
                  // }
                  paragraph.push(summary)
                  console.log(summary)
              }}
              // onPress={(id) => {
              //     id = id;
              //     navigation.navigate('MoviesDetail')    
              // }}
          />
          <SubCatalogList 
              title='rating order'
              url="https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
              onPress={(id) => {
                  id = id
                  // navigation.navigate('MoviesDetail')    
              }}
          />
  </Container>
)
}
const MoviesDetail = ({navigation}) => {
const Container = Styled.ScrollView`
flex: 1;
background-color: #EEE;
`;

console.log(navigation)
return (
<Container>
    <Text>{navigation.value}</Text>
</Container>
)
}

// const TodoListContext = createContext({
//   todoList: [],
//   addTodoList: (todo) => {},
//   removeTodoList: (index) => {},
// })

// const TodoListContextProvider = ({ children }) => {
//   const [todoList, setTodoList] = useState([]);
//   const addTodoList = (todo) => {
//     const list = [...todoList, todo];
//     setTodoList(list);
//   }
//   const removeTodoList = (index) => {
//     let list = [...todoList];
//     list.splice(index, 1);
//     setTodoList(list);
//   }
//   return(
//     <TodoListContext.Provider value={{todoList, addTodoList, removeTodoList, }}>
//       {children}
//     </TodoListContext.Provider>
//   )
// }


const Container = Styled.View`
  flex: 1;
  background-color: #EEE;
`;

const ParagrahpContext = createContext({
  summary : [],
})

const ParagraphContextProvider = ({ children }) => {
  return (
    <ParagraphContext.Provider value={{summary}}>
      {children}
    </ParagraphContext.Provider>
  )
}

export {ParagraphContextProvider, ParagraphContext}
