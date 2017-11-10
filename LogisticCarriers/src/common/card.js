import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.greenBackground}>
      <View style={styles.containerStyle}>
        {props.children}
      </View>
    </View>
  );
};

const styles = {
  greenBackground:{
    flex:1,
    backgroundColor:'#798F7E',
  },

  containerStyle: {
    flex:1,
    backgroundColor:'#D4F7EF',
    justifyContent:'center',

    borderWidth: 1,
    borderRadius: 13,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 100,
    marginBottom:80,
    paddingLeft:20,
    paddingRight:20
  }
};

export { Card };
