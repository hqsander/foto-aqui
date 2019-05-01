import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import ListaLocal from '../componentes/ListaLocal';

class LocaisSalvos extends Component {
  static navigationOptions = {
    tabBarLabel: 'Locais Salvos'
  };

  render() {
    return (
      <View>
        <ListaLocal
          locais={this.props.locais}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  locais: state.localReducer.locais
});

export default connect(mapStateToProps)(LocaisSalvos);
