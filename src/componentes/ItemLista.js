import React, { Component } from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity, Image
} from 'react-native';

class ItemLista extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPressionarItem}>
        <View style={styles.container}>
          <Image resizeMode="contain" source={this.props.imgLocal} style={styles.imgLocal} />
          <Text>{this.props.nomeLocal}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    backgroundColor: '#eee',
    paddingLeft: 5
  },
  imgLocal: {
    marginRight: 8,
    height: 60,
    width: 60
  }
});

export default ItemLista;
