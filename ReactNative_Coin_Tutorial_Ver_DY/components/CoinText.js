import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const CoinText = (props) => {
    return (
        <View style={styles.container}>
            <Text style={{
                fontSize: 20,
            }}>
                {props.name || 'Name'}
            </Text>
            <Text style={{
                color:'darkgrey',
                marginBottom: 8
            }}>
                { 'Volume: ' + (props.volume || 'Volume')}
            </Text>
            <Text style={{
                
            }}>
                { '$: ' + (props.price || 'Price')}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start'
    }
});

export default CoinText;