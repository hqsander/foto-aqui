/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import { View } from 'react-native';

import ItemLista from './ItemLista';

class ListaLocal extends Component {
  render() {
    const locais = this.props.locais.map((local, i) => (
      <ItemLista
        key={i}
        nomeLocal={local}
        onPressionarItem={() => this.props.onDeletarItem(i)}
      />
    ));

    return (
      <View>{locais}</View>
    );
  }
}

export default ListaLocal;
