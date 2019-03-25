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
            nomeLocal={local.item.descricao}
            imgLocal={local.item.imagem}
            onPressionarItem={() => this.props.onSelecionarItem(local.item.key)}
          />
        )}
      />
    );
  }
}

export default ListaLocal;
