import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TabNavigator } from './TabStack';
import LoginScreen from '../screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const MainNavi = () => {
    return (
        <Stack.Navigator
            initialRouteName="Login">
            <Stack.Screen
                name="Login"
                component={LoginScreen}
            />
            <Stack.Screen name="Tab" component={TabNavigator}></Stack.Screen>
        </Stack.Navigator>
    )
}
export const Navigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{headerShown:false}}>
            <Stack.Screen
                name="Login"
                component={LoginScreen}
            />
            <Stack.Screen name="Tab" component={TabNavigator}></Stack.Screen>
        </Stack.Navigator>
    )
}