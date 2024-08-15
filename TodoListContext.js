import { StatusBar } from 'expo-status-bar';
import { createContext, useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Styled from 'styled-components/native'

const Container = Styled.View`
  flex: 1;
  background-color: #EEE;
`;

const TodoListContext = createContext({
  todoList: [],
  addTodoList: (todo) => {},
  removeTodoList: (index) => {},
})

const TodoListContextProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);
  const addTodoList = (todo) => {
    const list = [...todoList, todo];
    setTodoList(list);
  }
  const removeTodoList = (index) => {
    let list = [...todoList];
    list.splice(index, 1);
    setTodoList(list);
  }

  return (
    <TodoListContext.Provider value={{todoList, addTodoList, removeTodoList, }}>
      {children}
    </TodoListContext.Provider>
  )
}

export {TodoListContextProvider, TodoListContext}

