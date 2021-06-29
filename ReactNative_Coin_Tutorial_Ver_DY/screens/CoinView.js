import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, StatusBar, Button, ScrollView } from 'react-native';
import CoinItem from '../components/CoinItem';
import { getCoinIconUri } from '../lib/Constants';
const CoinView = (props) => {
    const [coinData, setCoinData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        _getCoinData();
        //     setInterval(() => {
        //         _getCoinData();
        //         console.log('toggled!');
        //     }, 100000);
    }, []);

    const _getCoinData = async () => {
        console.log('getCoinData')
        setIsLoading(true);

        await fetch(`https://dy-rest-api.herokuapp.com/ShowMeTheCoin`)
            .then(res => res.json())
            .then(data => {
                const now = new Date()
                
                if (props.refreshDate != null) {
                    console.log(now.getHours());
                    props.setRefreshDate(now.toLocaleString());
                }
                setCoinData(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.log('\n ERROR ' + error);
            });
    };

    let coinItems = coinData.map(
        (data, index) => {
            const { rank, name, price_usd, market_cap_usd } = data;
            return (
                <CoinItem
                    key={index}
                    rank={rank}
                    name={name}
                    price={price_usd}
                    volume={market_cap_usd}
                    iconUri={getCoinIconUri(name)}
                />
            );
        }
    );
    return (
        <ScrollView style={props.style}>
            {coinItems}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 10,
    },
    textStyle: {
        textAlign: 'center',
    },
});

export default CoinView;