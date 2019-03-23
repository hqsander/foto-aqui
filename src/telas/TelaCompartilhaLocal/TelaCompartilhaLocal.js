import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class TelaCompartilhaLocal extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Olá mundo!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default TelaCompartilhaLocal;
