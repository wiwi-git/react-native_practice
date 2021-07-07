import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

export function HomeStack() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{headerShown:false}}>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: '-Home-',
                }}
            />
        </Stack.Navigator>
    )
}