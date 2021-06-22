import React from 'react';
import { ScrollView,Text, View, StyleSheet } from 'react-native';
import TodoListItem from './TodoListItem';

const TodoList = ({todos, onRemove, onToggle}) => {
    console.log(todos.id)
    return (
        <ScrollView contentContainerStyle={styles.listContainer}>
            {todos.map(todo => (
                <TodoListItem key={todo.id} {...todo} onRemove={onRemove} onToggle={onToggle}/>    
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create(
    {
        listContainer: {
            alignItems: 'center',
        }
    }
);

export default TodoList;