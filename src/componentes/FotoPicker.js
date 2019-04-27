import React, { Component } from 'react';
import {
  View, Image, Button, StyleSheet
} from 'react-native';

import imagemPlaceholder from '../../assets/placeholder.jpg';

class FotoPicker extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Image source={imagemPlaceholder} style={styles.preview} />
        </View>
        <View style={styles.button}>
          <Button title="Foto" onPress={() => alert('Selecione uma foto!')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center'
  },
  placeholder: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#eee',
    width: '80%',
    height: 150
  },
  button: {
    margin: 8
  },
  preview: {
    width: '100%',
    height: '100%'
  }
});

export default FotoPicker;
