import React from 'react';
import { View } from 'react-native';
import { Navigator } from './navigator';
import { NavigationContainer } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const navigationRef = React.createRef();

const App = () => {
    // const insets = useSafeAreaInsets()

    return (
        // <View sylte={
        //     {
        //         flex: 1,
        //         // paddingBottom: insets.bottom,
        //         // paddingLeft: insets.left,
        //         // paddingRight: insets.right,
        //         // paddingTop: insets.top,
        //     }
        // }>
        <NavigationContainer ref={navigationRef}>
            <SafeAreaProvider>
                <Navigator />
            </SafeAreaProvider>
        </NavigationContainer>
        // </View>
    );
}

export default App;