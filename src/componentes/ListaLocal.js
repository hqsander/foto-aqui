import React, { Component } from 'react';
import { View } from 'react-native';

import ItemLista from '../componentes/ItemLista';

class ListaLocal extends Component {
  render() {
    const locais = this.props.locais.map( (local, i) => {
      return (<ItemLista key={i} nomeLocal={local}/>);
    });

    return(
      <View>{locais}</View>
    );
  }
}

export default ListaLocal;
