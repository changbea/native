import { StatusBar } from 'expo-status-bar';
import { createContext, useState, useEffect,useContext } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Styled from 'styled-components/native'
import {TodoListContextProvider, TodoListContext} from './TodoListContext';

const Container = Styled.View`
  flex: 1;
`;

// const TodoListContext = createContext({
//   todoList: [],
//   addTodoList: (todo) => {},
//   removeTodoList: (index) => {},
// })

const Header = () => {
    const Container = Styled.View`
        height: 40px;
        justify-content: center;
        align-items: center;
    `;
    const TitleLabel = Styled.Text`
        font-size: 24px;
        font-weight: bold;
    `;
    return (
        <Container>
            <TitleLabel>Todo List</TitleLabel>
        </Container>
    )
}

const EmptyItem = () => {
    const Container = Styled.View`
        flex: 1;
        justify-content: center;
        align-items: center;
    `;
    const Label = Styled.Text``;

    return (
        <Container>
            <Label>Register Todo</Label>
        </Container>
    )
}

const TodoItem = ({ text, onDelete }) => {
    const Container = Styled.View`
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
    `;
    const Label = Styled.Text`
        flex: 1;
    `;
    const DeleteButton = Styled.Pressable``;
    const Icon = Styled.Image`
        width: 24px;
        height: 24px;
    `

    return (
        <Container>
            <Label>{text}</Label>
            <DeleteButton onPress={onDelete}>
                <Icon source={require('../assets/remove.png')}/>
            </DeleteButton>
        </Container>
    )
}
const AddTodo = () => {
    const [showInput, setShowInput] = useState(false);
    return (
        <Container>
            <AddButton onPress={() => setShowInput(true)} />
            {showInput && <TodoInput hideTodoInput={() => setShowInput(false)} />}
        </Container>
    )   
}
const AddButton = ({ onPress }) => {
    const Container = Styled.SafeAreaView`
        position: absoulte;
        bottom: 0;
        align-self: center;
        justify-content: flex-end;
    `;
    const ButtonContainer = Styled.Pressable``
    const Icon = Styled.Image``;
    return (
        <Container>
            <ButtonContainer 
                onPress={onPress}
            >
                <Icon source={require('../assets/add.png')} />
            </ButtonContainer>
        </Container>
    )
}
const TodoInput = ({ hideTodoInput }) => {
    return (
        <Container behavior='padding'>
            {/* <Background onPress={hideTodoInput} /> */}
            <TextInput hideTodoInput={hideTodoInput} />
        </Container>
    )
}
// const Background = ({ onPress }) => {
//     const Container = Styled.Pressable`
//         position: absolute;
//         top: 0;
//         bottom: 0;
//         left: 0;
//         right: 0;
//     `
    
//     const BlackBackground = Styled.View`
//         background-color: #EEE;
//         width: 100%;
//         height: 100%;
//     `
    
//     return (
//         <Container 
//             onPress={onPress}
//         >
//             <BlackBackground />
//         </Container>
//     )
// }
const TextInput = ({ hideTodoInput }) => {
    const Input = Styled.TextInput`
        width: 100%;
        height: 40px;
        background-color: #FFF;
    `
    const {addTodoList} = useContext(TodoListContext)
    
    return (
        <Input autoFocus={true} autoCapital='none' autoCorrect={false} placeholder='Input todo' enterKeyHint='done' onSubmitEditing={({ nativeEvent }) => {
            addTodoList(nativeEvent.text);
            hideTodoInput();
        }} />
    )
}

const TodoList = () => {
    const { todoList, removeTodoList } = useContext(TodoListContext);
    const Container = Styled(FlatList)``;
    // console.log(todoList)

    return (
        <Container 
            data={todoList}
            keyExtractor={(item, index) => {
                return `todo-${index}`;
            }}
            ListEmptyComponent={<EmptyItem />}
            // ListHeaderComponent={<TodoItem 
            //     text={item}
            //     onDelete={() => removeTodoList(index)}
            // />}
            renderItem={({ item, index }) => {
                return (
                    <TodoItem 
                        text={item}
                        onDelete={() => removeTodoList(index)}
                    />
                )
            }}
            contentContainerStyle={todoList.length === 0 && { flex: 1 }}
        />
    )
}

// const TodoListView = () => {
//     return (
//         <Container>
//             <Header />
//             <TodoList />
//         </Container>
//     )
// }
  
const Todo = () => {    
    const Container = Styled.View`
        flex: 1;
    `;

    return (
        <Container>
            {/* <TodoListView /> */}
            <Header />
            <TodoList />
            <AddTodo />
        </Container>
    )
}

export default Todo

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
