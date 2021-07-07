import React from 'react';
import { View,StyleSheet,Text, TouchableOpacity } from 'react-native';

export default SomethingScreen = () => {
    return(
        <View style={styles.container}>
            <Text>something</Text>
            <TouchableOpacity>back</TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});