import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  ScrollView,
  View,
  Button
} from 'react-native';

import { addLocal } from '../store/actions/local';
import { acaoExemplo } from '../store/actions/entidadeX';
import EnfaseText from '../componentes/enfaseText';
import FotoPicker from '../componentes/FotoPicker';
import LocalPicker from '../componentes/LocalPicker';
import LocalInput from '../componentes/LocalInput';

class NovoLocal extends Component {
  static navigationOptions = {
    tabBarLabel: 'Novo Local'
  };

  state = {
    ctr: {
      local: {
        val: ''
      },
      coordenadas: {
        val: null
      },
      foto: {
        val: null
      }
    }
  };

  descLocalChangedHandler = (desc) => {
    this.setState(prevState => ({
      ctr: {
        ...prevState.ctr,
        local: {
          val: desc
        }
      }
    }));
  };

  fotoEscolhidaHandler = (foto) => {
    this.setState(prevState => ({
      ctr: {
        ...prevState.ctr,
        foto: {
          val: foto
        }
      }
    }));
  }

  coordenadaEscolhidaHandler = (coordenada) => {
    this.setState(prevState => ({
      ctr: {
        ...prevState.ctr,
        location: {
          val: coordenada
        }
      }
    }));
  };

  addLocalHandler = () => {
    this.props.onAddLocal(
      this.state.ctr.local.val,
      this.state.ctr.coordenadas.val,
      this.state.ctr.foto.val
    );
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <EnfaseText>Novo local:</EnfaseText>
          <FotoPicker onImagePicked={this.fotoEscolhidaHandler} />
          <LocalPicker onLocationPick={this.coordenadaEscolhidaHandler} />
          <LocalInput
            local={this.state.ctr.local}
            onChangeText={this.descLocalChangedHandler}
          />
          <View style={styles.button}>
            <Button
              title="Salvar"
              onPress={this.addLocalHandler}
            />
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
  onAcaoExemplo: conteudo => dispatch(acaoExemplo(conteudo)),
  onAddLocal: (local, coordenadas, foto) => dispatch(addLocal(local, coordenadas, foto))
});

export default connect(mapStateToProps, mapDispatchToProps)(NovoLocal);
