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
  View
} from 'react-native';
import Login from './src/login/login';
import Dashboard from './src/dashboard/dashboard';
import { StackNavigator } from 'react-navigation';

const LoginScreen = StackNavigator({
  Login: { screen: Login },
  Dashboard: {
    screen: Dashboard,

   }
});

export default class App extends Component {
  render() {
    return (
    <LoginScreen/>
    );
  }
}
