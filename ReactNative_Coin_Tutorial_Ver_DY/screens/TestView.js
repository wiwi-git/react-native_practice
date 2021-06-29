import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class TestView extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        {/* <View style={[styles.box, { backgroundColor: 'red', flex: 1}]} /> */}
        <View style={[styles.box, { backgroundColor: 'red'}]} />
        {/* <View style={[styles.box, { backgroundColor: 'violet', flex: 2}]} /> */}
        <View style={[styles.box, { backgroundColor: 'green'}]} />
        {/* <View style={[styles.box, { backgroundColor: 'pink', flex: 3}]} /> */}
        <View style={styles.box} />
        <Text>Open up App.js to start working on your app!!!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    // flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    justifyContent: 'space-around',
  },
  box: {
    backgroundColor: 'blue',
    width: 50,
    height: 50,
  },
});

export default TestView;