/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Login from './src/login/login';
import Dashboard from './src/dashboard/dashboard';
import { StackNavigator } from 'react-navigation';

const LoginScreen = StackNavigator({
  Login: { screen: Login },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      headerTitle: 'Dashboard',
      
      gesturesEnabled: false,
    },
  }
});

export default class App extends Component {
  constructor(props){
    super(props);
    nThis = this;
  }
  render() {
    return (
    <LoginScreen/>
    );
  }
}
