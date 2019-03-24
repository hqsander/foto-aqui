import React, { Component } from 'react';
import { View } from 'react-native';

import InputLocal from '../../componentes/InputLocal';
import ListaLocal from '../../componentes/ListaLocal';
import imgLocal from '../../../assets/liberdade.jpg';

class TelaCompartilhaLocal extends Component {
  state = {
    locais: []
  }

  onIncluirLocal = (descLocal) => {
    this.setState(prevState => ({
      locais: prevState.locais.concat({
        key: Math.random().toString(),
        descricao: descLocal,
        imagem: imgLocal
      })
    }));
  }

  deletarLocalHandler = (key) => {
    this.setState(prevState => ({
      locais: prevState.locais.filter(local => local.key !== key)
    }));
  }

  render() {
    return (
      <View>
        <InputLocal onIncluirLocal={this.onIncluirLocal} />
        <ListaLocal
          locais={this.state.locais}
          onDeletarItem={this.deletarLocalHandler}
        />
      </View>
    );
  }
}

export default TelaCompartilhaLocal;
