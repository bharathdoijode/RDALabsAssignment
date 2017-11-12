import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, CheckBox } from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';
import  GlobalStyles  from '../styles'
import { Card } from '../common/card';
import { CardSection } from '../common/cardSection';


export default class Login extends React.Component {
  constructor(props) {
    super(props);
    nThis=this;
    this.state = {
      username: '',
      password: ''
    };

  }

  static navigationOptions = {
  header: null
  };

  onClickLogin(){
  //  if(this.state.username == 'admin' && this.state.password == 'admin'){
      this.props.navigation.navigate('Dashboard');

//    }else{

//        alert("Please enter valid username / password");

//    }

  }

  render() {
    return (
    <Card>
      <CardSection style={styles.headerText}>
        <Text style={styles.headerFont}>Login to Demo App</Text>
      </CardSection>
      <CardSection>
        <Text>Username</Text>
      </CardSection>
      <CardSection>
        <TextInput
          style={GlobalStyles.textInput}
          autoCapitalize={'none'}
          autoCorrect={false}
          underlineColorAndroid='transparent'
          onChangeText={(text) => this.setState({username:text})}
          value={this.state.username}
         />
      </CardSection>
      <CardSection>
        <Text>Password</Text>
      </CardSection>
      <CardSection>
         <TextInput
         style={GlobalStyles.textInput}
         secureTextEntry={true}
         underlineColorAndroid='transparent'
         autoCapitalize={'none'}
         autoCorrect={false}
         onChangeText={(text) => this.setState({password:text})}
          value={this.state.password}
          />
      </CardSection>
      <CardSection style={{justifyContent:'center'}}>
        <CheckBox  value={false} onValueChange={() => console.log("value might change")}/>
        <Text>   Remember me</Text>
      </CardSection>
      <CardSection style={{justifyContent:'center'}}>
          <TouchableHighlight
          style={[GlobalStyles.button,{alignItems:'center',justifyContent:'center'}]}
          onPress={this.onClickLogin.bind(this)}>
          <Text style={{color:'#FFF', fontSize:20}}>Login</Text>
          </TouchableHighlight>
      </CardSection>

      <View style={{flexDirection:'row', justifyContent:'center'}}>

          <Text textDecorationLine={'underline'} onPress={() => console.log('pressed')} style={styles.hyperlink}>Terms and Conditions</Text>

        <Text>   </Text>

          <Text textDecorationLine={'underline'} onPress={() => console.log('pressed')} style={styles.hyperlink}>Privacy Policy</Text>

      </View>
    </Card>
    );
  }
}

const styles = StyleSheet.create({
headerFont:{
  color:'#69F403',
  fontSize:20
},
  headerText:{

    justifyContent:'center'
  },
  hyperlink:{
    color:'#FFF'
  }

});
