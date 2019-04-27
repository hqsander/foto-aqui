import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { acaoExemplo } from '../store/actions/index';

class ExemploA extends Component {
  testarReduxHandler = () => {
    this.props.onAcaoExemplo('Escrita OK.');
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>ExemploA</Text>
        <Text>{ this.props.qualquerNome }</Text>
        <Button
          title="Salvar"
          onPress={this.testarReduxHandler}
        />
      </View>
    );
  }
}

// # exemploReducer é o reducer configurado no configureStore.
// # Já o campo pertence a /reducers/exemplo
const mapStateToProps = state => ({
  qualquerNome: state.exemploReducer.campo
});

const mapDispatchToProps = dispatch => ({
  onAcaoExemplo: conteudo => dispatch(acaoExemplo(conteudo))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExemploA);
