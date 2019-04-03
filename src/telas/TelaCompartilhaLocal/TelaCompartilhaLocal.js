import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import InputLocal from '../../componentes/InputLocal';
import ListaLocal from '../../componentes/ListaLocal';
import DetalheLocal from '../../componentes/DetalheLocal';
import imgLocal from '../../../assets/liberdade.jpg';
import {
  incluirLocal,
  excluirLocal,
  selecionarLocal,
  desselecionarLocal
} from '../../store/actions/index';

class TelaCompartilhaLocal extends Component {
  state = {
    locais: [],
    localSelecionado: null
  }

  adicionarLocalHandler = (descLocal) => {
    this.setState(prevState => ({
      locais: prevState.locais.concat({
        key: Math.random().toString(),
        descricao: descLocal,
        imagem: imgLocal
      })
    }));
  }

  excluirLocalHandler = () => {
    this.setState(prevState => ({
      locais: prevState.locais.filter(local => local.key !== prevState.localSelecionado.key),
      localSelecionado: null
    }));
  }

  fecharModalHandler = () => {
    this.setState({
      localSelecionado: null
    });
  }

  selecionarLocalHandler = (key) => {
    this.setState(prevState => ({
      localSelecionado: prevState.locais.find(local => local.key === key)
    }));
  }

  render() {
    return (
      <View>
        <DetalheLocal
          localSelecionado={this.state.localSelecionado}
          onExcluirLocal={this.excluirLocalHandler}
          onFecharModal={this.fecharModalHandler}
        />
        <InputLocal onIncluirLocal={this.adicionarLocalHandler} />
        <ListaLocal
          locais={this.state.locais}
          onSelecionarItem={this.selecionarLocalHandler}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  locais: state.locais.locais,
  descricao: state.locais.descricao
});

const mapDispatchToProps = dispatch => ({
  onIncluirLocal: descricao => dispatch(incluirLocal(descricao)),
  onExcluirLocal: () => dispatch(excluirLocal()),
  onSelecionarLocal: key => dispatch(selecionarLocal(key)),
  onDesselecionarLocal: () => dispatch(desselecionarLocal())
});

export default connect(mapStateToProps, mapDispatchToProps)(TelaCompartilhaLocal);
