import React from 'react';
import { View,StyleSheet } from 'react-native';

export default homeScreen = () => {
    return(
        <View style={styles.container}>
            <View style={styles.greenBox}/>
            <View style={styles.greenBox}/>
        </View>
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