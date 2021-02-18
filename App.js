import React from 'react';
import { View } from 'react-native';
import LoginScreen from './Screens/SignUpLoginScreen'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <LoginScreen />
      </View>
    );
  }
}