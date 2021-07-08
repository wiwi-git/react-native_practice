import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

export default MenuItem = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchable} onPress={props.onPress}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{props.text}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',

        justifyContent: 'flex-start',
        alignContent: 'center',

        borderWidth: 1,
        borderColor: '#d4d4d4',

        paddingLeft: '8%',
        height: 40,
    },
    touchable:{
        flex:1,
        height:'100%',
        width:'100%',
        justifyContent: 'center',
    },
    textContainer: {
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        color: 'black',
    }
});