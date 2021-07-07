import React from 'react';
import { View,StyleSheet,Image, Text } from 'react-native';

export default MenuItem = (props) => {
    return(
        <View style={styles.container}>
            <Text>{props.text}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignContent:'center',
        borderWidth: 1,
        borderColor:'#d4d4d4',
        paddingLeft: '8%'
    },
    text:{
        fontSize:17,
        color:'black'
    }
});