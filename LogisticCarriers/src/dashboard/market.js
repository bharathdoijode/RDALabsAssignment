import React from 'react';
import { StyleSheet, Text, View, BackHandler } from 'react-native';




export default class Market extends React.Component {

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
      <Text>Market Screen body</Text>
    );
  }
}
