import React,{ useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import {useDispatch, useSelector} from 'react-redux'
import { getTodos ,addTodo, removeTodo,toggleCheck } from '../../store/todo';
export default TodoListScreen = () => {
  const dispatch = useDispatch();
const todos = useSelector((store) => store.todo.todos);

  // const [todos, setTodos] = useState([]);
    
    // const addTodo = text => {
    //   setTodos([
    //     ...todos,
    //     {id: Math.random().toString(), textValue: text, checked: false},
    //   ]);
    // };
  
    // const onRemove = id => e => {
    //   setTodos(todos.filter(todo => todo.id !== id));
    // }
  
    // const onToggle = id => e => {
    //   setTodos(
    //     todos.map(todo => 
    //       todo.id === id ? { ...todo, checked: !todo.checked } : todo,
    //     ),
    //   );
    // }
  
    return (
      <SafeAreaView style={ styles.container }>
        <Text style={styles.appTitle}>Hello World</Text>
        <View style={styles.card}>
          <TodoInsert onAddTodo={(todo)=>{dispatch(addTodo(todo))}}/>
          <TodoList todos={todos} onRemove={(id)=>{dispatch(removeTodo(id))}} onToggle={(id) => {dispatch(toggleCheck(id))}}/>
        </View>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create(
    {
      container: {
        flex: 1,
        backgroundColor: '#3143e8'
      },
      appTitle: {
        color: "#fff",
        fontSize: 36,
        marginTop: 30,
        marginBottom: 30,
        fontWeight: '300',
        textAlign: 'center',
        backgroundColor: '#3143e8',
      },
      card: {
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginLeft: 10,
        marginRight: 10,
      },
      input: {
        padding: 20,
        borderBottomColor: '#bbb',
        borderBottomWidth: 1,
        fontSize: 24,
        marginLeft: 20,
      },
    }
  );
  