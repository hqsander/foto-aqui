import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import InputLocal from '../../componentes/InputLocal';
import ListaLocal from '../../componentes/ListaLocal';

class TelaCompartilhaLocal extends Component {
  state = {
    locais: []
  }

  onIncluirLocal = descLocal => {
    this.setState( prevState => {
      return {
        locais: prevState.locais.concat(descLocal)
      };
    });
  }

  render() {
    return (
      <View>
        <InputLocal onIncluirLocal={this.onIncluirLocal} />
        <ListaLocal locais={this.state.locais} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default TelaCompartilhaLocal;
