import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Component } from 'react';

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#dddddd',
      padding: 10,
      marginBottom: 10
    }
  }
)

class App extends Component {
  state = {
    count: 0
  }

  onPressClickMe = () => {
    this.setState(
      {
        count: this.state.count + 1
      }
    )
  }

  render() {
    return (
      <View style={[styles.container]}>
        <TouchableOpacity 
        style={styles.button}
        onPress={this.onPressClickMe}>
          <Text>Click Me</Text>
        </TouchableOpacity>
        
        <View>
          <Text> You clicked {this.state.count} </Text>
        </View>
      </View>
    )
  }
}

export default App;