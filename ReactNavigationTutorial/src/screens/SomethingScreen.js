import React from 'react';
import { View,StyleSheet,Text, TouchableOpacity } from 'react-native';

export default SomethingScreen = (props) => {
    return(
        <View style={styles.container}>
            <Text>something</Text>
            <TouchableOpacity onPress={
                () => {
                    props.navigation.pop()               }
            }>
                <Text>back</Text>
            </TouchableOpacity>
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