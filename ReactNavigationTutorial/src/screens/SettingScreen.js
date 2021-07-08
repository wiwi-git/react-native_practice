import React from 'react';
import { View, StyleSheet } from 'react-native';
import SettingMenu from './SettingMenu';
import { SafeAreaView } from 'react-native-safe-area-context';
export default SettingScreen = (props) => {
    const menuData = [
        {
            text:"Something",
            icon:"🏅"
        },
        {
            text:"Something2",
            icon:"📎"
        },
        {
            text:"Logout",
            icon:"🔓"
        },
    ]

    const onPressMenuItem = (name) => {
        switch(name) {
            case "Something" : {
                props.navigation.navigate('Something');
                return
            }
            case "Something2" : return
            case "Logout" : return
            default: return
        }
    }

    return(
        <SafeAreaView style={styles.container}>
        {
            menuData.map(({text, icon}, index) => {
                return (
                    <SettingMenu text={icon + " " + text} key={"settingmenu-" + index} onPress={
                        () => {onPressMenuItem(text)}}></SettingMenu>
                )
            })
        }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start'
    },
});