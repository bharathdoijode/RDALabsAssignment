import React from 'react';
import { BackHandler } from 'react-native';
import Login from '../login/login'




export default class Empty extends React.Component {

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
    return null;
  }
}
