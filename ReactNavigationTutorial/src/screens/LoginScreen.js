import React from 'react';
import { View,StyleSheet, TextInput, TouchableOpacity,Text } from 'react-native';

export default LoginScreen = (props) => {
    const onPressLoginButton = () => {
        props.navigation.navigate('Tab');
    }
    
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Simple App</Text>
            
            <TextInput placeholder="ID" style={styles.textinput}></TextInput>
            <TextInput placeholder="Password" style={styles.textinput}></TextInput>
            
            <TouchableOpacity style={styles.loginButton} onPress={()=>{
                onPressLoginButton();
            }}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:20,
        paddingRight:20,
    },
    titleContainer:{
        justifyContent:'center',
        alignItems:'center',
        height:'20%',
    },
    title:{
        fontSize: 30,
        color:'black',
        margin: 40,
    },
    textinput:{
        borderWidth: 1,
        borderColor:'#d4d4d4',
        paddingTop: 8,
        paddingBottom: 20,
        paddingLeft:10,
        marginBottom:10,
        width:'100%'
    },
    loginButton:{
        backgroundColor:'#3bb89e',
        justifyContent:'center',
        alignItems:'center',
        height: 40,
        width:'100%'
    },
    buttonText:{
        color:'white',
        fontSize:17,
    }
});