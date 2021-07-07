import React from 'react';
import { View,StyleSheet } from 'react-native';
import SettingMenu from './SettingMenu';
export default SettingScreen = () => {
    return(
        <View style={styles.container}>
            <SettingMenu text={"🏅 Something"}></SettingMenu>
            <SettingMenu text={"🔓 Logout"}></SettingMenu>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start'
    },
});