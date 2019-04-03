import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import InputLocal from '../../componentes/InputLocal';
import ListaLocal from '../../componentes/ListaLocal';
import DetalheLocal from '../../componentes/DetalheLocal';

import {
  incluirLocal,
  excluirLocal,
  selecionarLocal,
  desselecionarLocal
} from '../../store/actions/index';

class TelaCompartilhaLocal extends Component {
  incluirLocalHandler = (descricao) => {
    this.props.onIncluirLocal(descricao);
  }

  excluirLocalHandler = () => {
    this.props.onExcluirLocal();
  }

  fecharModalHandler = () => {
    this.props.onDesselecionarLocal();
  }

  selecionarLocalHandler = (key) => {
    this.props.onSelecionarLocal(key);
  }

  render() {
    return (
      <View>
        <DetalheLocal
          localSelecionado={this.props.localSelecionado}
          onExcluirLocal={this.excluirLocalHandler}
          onFecharModal={this.fecharModalHandler}
        />
        <InputLocal onIncluirLocal={this.incluirLocalHandler} />
        <ListaLocal
          locais={this.props.locais}
          onSelecionarItem={this.selecionarLocalHandler}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  locais: state.locais.locais,
  localSelecionado: state.locais.localSelecionado
});

const mapDispatchToProps = dispatch => ({
  onIncluirLocal: descricao => dispatch(incluirLocal(descricao)),
  onExcluirLocal: () => dispatch(excluirLocal()),
  onSelecionarLocal: key => dispatch(selecionarLocal(key)),
  onDesselecionarLocal: () => dispatch(desselecionarLocal())
});

export default connect(mapStateToProps, mapDispatchToProps)(TelaCompartilhaLocal);
