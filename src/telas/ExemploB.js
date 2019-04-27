import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  ScrollView,
  View,
  Button
} from 'react-native';

import { acaoExemplo } from '../store/actions/index';
import EnfaseText from '../componentes/enfaseText';
import FotoPicker from '../componentes/FotoPicker';
import LocalPicker from '../componentes/LocalPicker';
import LocalInput from '../componentes/LocalInput';

class ExemploB extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <EnfaseText>Compartilhar local:</EnfaseText>
          <FotoPicker />
          <LocalPicker />
          <LocalInput />
          <View style={styles.button}>
            <Button title="Compartilhar" />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  button: {
    margin: 8
  }
});

// # exemploReducer é o reducer configurado no configureStore.
// # Já o campo pertence a /reducers/exemplo
const mapStateToProps = state => ({
  qualquerNome: state.exemploReducer.campo
});

const mapDispatchToProps = dispatch => ({
  onAcaoExemplo: conteudo => dispatch(acaoExemplo(conteudo))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExemploB);
