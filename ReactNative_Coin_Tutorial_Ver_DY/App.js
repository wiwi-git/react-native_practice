import React, { useState } from 'react';
import { Text, View, StyleSheet, StatusBar, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import TestView from './screens/TestView';
import CoinView from './screens/CoinView';
import TopBar from './components/TopBar';


const App = () => {
  const [refreshDate, setRefreshDate] = useState('-');

  return(
    <View style={styles.container}>
      <View style={styles.statusBar} />
      <StatusBar translucent hidden="false" barStyle="dark-content" />
      <TopBar title={"Show Me The Coin"} refreshDate={refreshDate} setRefreshDate={date => setRefreshDate(date)}/>
      <CoinView style={styles.coinView} refreshDate={refreshDate} setRefreshDate={date => setRefreshDate(date)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#f9afbf',
    height: getStatusBarHeight()
  },
  container: {
    flex: 1
  },
  coinView: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
    // alignItems: 'center',
    // justifyContent: 'center'
  }
});

export default App;
// 249
// 175
// 191