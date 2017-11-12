import React from 'react';
import { StyleSheet, Text, View, BackHandler } from 'react-native';




export default class MyOrders extends React.Component {

  componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }
    handleBackButton() {
      return true;
    }

  render() {
    return (
      <Text>MyOrders Screen body</Text>
    );
  }
}
