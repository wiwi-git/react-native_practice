import React from 'react';
import { View,StyleSheet} from 'react-native';
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';

SafeAreaView

export default homeScreen = () => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.greenBox}/>
            <View style={styles.greenBox}/>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-between'
    },
    greenBox: {
        flex:1,
        margin:10,
        backgroundColor: '#3bb89e',
    },
});