import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const TopBar = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.defaultText}>
                Left
            </Text>
            <View>
                <Text style={[
                    styles.defaultText,
                    {
                        fontSize: 20,
                        textAlign: 'center'
                    }
                ]}>
                    {props.title || "Title"}
                </Text>
                <Text style={[
                    styles.defaultText,
                    {
                        fontSize: 12,
                        textAlign: 'center'
                    }]}>
                    {props.refreshDate || '-'}
                </Text>
            </View>
            <Text style={styles.defaultText}>
                Right
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        // alignSelf: 'auto',
        // alignSelf:'center',
        // alignSelf:'flex-end',
        // alignSelf:'flex-start',
        // alignSelf:'baseline',
        height: 52,
        flexDirection: 'row',
        backgroundColor: '#f9afbf',
        alignItems: 'center',
        justifyContent: 'space-between',
        // justifyContent: 'center',
        // justifyContent: 'flex-end',
        // justifyContent: 'flex-start',
        paddingLeft: 10,
        paddingRight: 10,
    },
    defaultText: {
        color: 'black',
    }
});

export default TopBar;