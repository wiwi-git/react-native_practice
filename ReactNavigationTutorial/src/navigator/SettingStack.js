import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingScreen from '../screens/SettingScreen';
import SomethingScreen from '../screens/SomethingScreen'
const Stack = createStackNavigator();

export function SettingStack() {
    return (
        <Stack.Navigator
            initialRouteName="Setting"
            screenOptions={{headerShown:false}}>
            <Stack.Screen
                name="Setting"
                component={SettingScreen}
                options={{
                    title: '-Setting-',
                }}
            />
            <Stack.Screen
                name="Something"
                component={SomethingScreen}
                options={{
                    title: '-Something-',
                }}
            />
        </Stack.Navigator>
    )
}