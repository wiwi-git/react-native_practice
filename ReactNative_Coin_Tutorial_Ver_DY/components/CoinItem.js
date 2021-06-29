import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import CoinText from './CoinText';
const CoinItem = ({iconUri, name, volume, price, rank}) => {
    return (
        
        <View style={styles.container}>
            <Image 
            style={{ width: 50, height: 50, margin: 10}}
            source={{ uri: iconUri}}
            />
            <CoinText name={name} volume={volume} price={price} />
            {/* <Text style={[styles.text, {flex:1, fontSize: 20, marginTop: 5}]}>
                {name || 'Name'}
            </Text>
            <Text style={[styles.text, {flex:1, color: 'darkgrey'}]}>
                {'Volume: ' + (volume || 0)}
            </Text>
            <Text style={[styles.text, {flex:1}]}>
                {'$: ' + (price || 0)}
            </Text> */}
            <Text style={[styles.text, { fontSize: 25, marginRight: 10}]}>
                {'#' + (rank || 'Rank')}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
      },
      text: {
        color: 'black',
      },
});

export default CoinItem;