import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class ItemLista extends Component {
  render() {
    return(
      <View style = {styles.container}>
        <Text>{this.props.nomeLocal}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    height: 30,
    backgroundColor: '#eee',
    paddingLeft: 5
  }
});

export default ItemLista;
