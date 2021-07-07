// import { NavigationContainer } from '@react-navigation/native';
// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import React from 'react';
// import { Navigator } from './navigator';
// const navigationRef = React.createRef();

// const App = () => {
//     return (
//         <NavigationContainer ref={navigationRef}>
//                 <Navigator />
//         </NavigationContainer>

//     );
// }

// export default App;

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import App from './app';

// const store = configureStore()
export default AppWrapper = () => {
    return (
        // <Provider store={store}>
        <SafeAreaProvider>
            <App/>
        </SafeAreaProvider>
        // </Provider>
    )
}