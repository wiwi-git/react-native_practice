import { NavigationContainer } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'react-native';
import React from 'react';
import { Navigator } from './navigator';

const navigationRef = React.createRef();

const App = () => {
    const insets = useSafeAreaInsets()

    return (
        <View sylte={
            {
                flex: 1,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right,
                paddingTop: insets.top,
            }
        }>
            <NavigationContainer ref={navigationRef}>
                <Navigator />
            </NavigationContainer>
        </View>
    );
}

export default App;