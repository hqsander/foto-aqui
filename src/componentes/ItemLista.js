import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Image
} from 'react-native';

const itemLista = props => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.itemLista}>
      <Image resizeMode="cover" source={props.fotoLocal} style={styles.fotoLocal} />
      <Text>{props.nomeLocal}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  itemLista: {
    width: '100%',
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center'
  },
  fotoLocal: {
    marginRight: 8,
    height: 30,
    width: 30
  }
});

export default itemLista;
