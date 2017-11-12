import React from 'react';
import { StyleSheet, Text, View, BackHandler,Button } from 'react-native';
import { TabNavigator, DrawerNavigator  } from 'react-navigation';

import Market from './market';
import MyOrders from './myOrders';
import Empty from '../common/empty';

const RootTabs = TabNavigator({
    Market: {
      screen: Market,
      navigationOptions: {
        headerTitle: 'MARKET'
      }
    },
    MyOrders: {
      screen: MyOrders,
      navigationOptions: {
        headerTitle: 'MY ORDERS'
      }
    }
  },{
initialRouteName: 'Market',
});

  const RootDrawer = DrawerNavigator({
    Profile: {
      screen: RootTabs,
      navigationOptions: {
        drawerLabel: 'Profile'
      }
    },
    Maps: {
      screen: RootTabs,
      navigationOptions: {
        drawerLabel: 'Maps'
      }
    },
    Logout: {
      screen: RootTabs,
      navigationOptions: {
        drawerLabel: 'Logout'
      }
    },
});

export default class Dashboard extends React.Component {

  constructor(props){
    super(props);
    nThis=this;
  }

  componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }
    handleBackButton() {
      return true;
    }

    static navigationOptions = {
        headerLeft: <Button title="::" onPress={()=>{console.log("clickrd");nThis.props.navigation.navigate('DrawerToggle')}}/>,
      };

  render() {

    return (
        <RootDrawer/>

    );
  }
}
