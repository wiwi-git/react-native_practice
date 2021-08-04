import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, SafeAreaView, TouchableOpacity, Linking } from 'react-native';

export default () => {
  const [base, setBase] = useState('');
  const [key1, setKey1] = useState('');
  const [key2, setKey2] = useState('');
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');

  const sendAction = async () => {
    console.log(base);
    if (base.length === 0){
      console.log("base length 0");
      return
    };
    const baseCanOpen = await Linking.canOpenURL(base)
    if (!baseCanOpen) return;
    
    if (key1.length === 0 || value1.length === 0) {
      console.log('open: ',base);
      return await Linking.openURL(base);
    }

    var prefix = "?" + key1 + "=" + value1;
    var url = base.slice(-1) === '/' ? base + prefix : base + '/' + prefix;

    if (key2.length == 0 || value2.length == 0) {
      console.log('open: ', url);
      return await Linking.openURL(url);
    } else {
      url += '&' + key2 + '=' + value2;
      console.log('open: ',url);
      return await Linking.openURL.openURL(url);
    }
  }

  return (
    <SafeAreaView>
      <View style={style.Container}>
        <View style={style.BaseUrlView}>
          <Text style={style.Text}>BaseUrl</Text>
          <TextInput 
          style={style.TextInput} 
          placeholder={"ex) https://api.dy.com/"}
          value={base}
          onChangeText={(text)=>setBase(text)}></TextInput>
        </View>
        <Text style={style.Text}>Param1</Text>
        <View style={style.QueryView}>
          <TextInput 
          style={style.HalfTextInput} 
          placeholder={"Key"}
          value={key1}
          onChangeText={(text)=>setKey1(text)}
          />
          <TextInput 
          style={style.HalfTextInput} 
          placeholder={"Value"}
          value={value1}
          onChangeText={(text)=>setValue1(text)}/>
        </View>
        <Text style={style.Text}>Param2</Text>
        <View style={style.QueryView}>
        <TextInput 
          style={style.HalfTextInput} 
          placeholder={"Key"}
          value={key2}
          onChangeText={(text)=>setKey2(text)}/>
          <TextInput 
          style={style.HalfTextInput} 
          placeholder={"Value"}
          value={value2}
          onChangeText={(text)=>setValue2(text)}
          />
        </View>
        <TouchableOpacity style={style.Button} onPress={() => sendAction() }>
          <Text style={style.ButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
const style = StyleSheet.create({
  Container: {
    marginLeft: 8,
    marginRight: 8
  },

  BaseUrlView: {
    marginTop: 16,
    marginBottom: 16,
  },

  Text: {
    height: 40,
    fontSize: 20,
  },

  TextInput: {
    height: 50,
    fontSize: 20,
    borderWidth: 1,
    paddingLeft: 8
  },

  QueryView: {
    marginBottom: 16,
    flexDirection:'row',
  },

  HalfTextInput:{
    flex: 0.5,
    height: 50,
    fontSize: 20,
    borderWidth: 0.5,
    paddingLeft: 8,
  },

  Button: {
    height: 40,
    fontSize: 20,
    borderWidth: 1,
    top: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonText: {
    fontSize: 20,
    textAlign: 'center',
  }
}
)
