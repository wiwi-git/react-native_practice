import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


class Home extends React.Component {
  render() {
    return (
      <View style={styles.eachView}>
        <Text> 홈 화면 입니다.</Text>
        <Button
         title="goto chat"
         onPress={()=>this.props.navigation.navigate('Chat')}
        />
        <Button
         title="goto settings"
         onPress={()=>this.props.navigation.navigate('Settings')}
        />
      </View>
    );
  }
}

class Chat extends React.Component {
  render() {
    return (
      <View style={styles.eachView}>
        <Text> chat 화면 입니다.</Text>
        <Button
         title="goto home"
         onPress={()=>this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

class Settings extends React.Component {
  render() {
    return (
      <View style={styles.eachView}>
        <Text> settings 화면 입니다.</Text>
        <Button
         title="goto home"
         onPress={()=>this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

const App = createStackNavigator(
  {
    Chat: {
      screen: Chat,
    },
    Home: {
      screen: Home,
    },
    Settings
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(App)

export default () => (
  <AppContainer />
);

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  eachView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});