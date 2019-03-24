/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import { FlatList } from 'react-native';

import ItemLista from './ItemLista';

class ListaLocal extends Component {
  render() {
    return (
      <FlatList
        data={this.props.locais}
        renderItem={local => (
          <ItemLista
            nomeLocal={local.item.value}
            onPressionarItem={() => this.props.onDeletarItem(local.item.key)}
          />
        )}
      />
    );
  }
}

export default ListaLocal;
