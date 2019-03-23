import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

import ItemLista from '../../componentes/ItemLista';

class TelaCompartilhaLocal extends Component {
  state = {
    descLocal: '',
    locais: []
  }

  descLocalHandler = input => {
    this.setState({
      descLocal: input
    });
  }

  addLocalHandler = () => {
    if (this.state.descLocal.trim() === "") {
      return;
    }

    this.setState( prevState => {
      return {
        locais: prevState.locais.concat(prevState.descLocal)
      };
    });
  }

  render() {

    const locais = this.state.locais.map( (local, i) => {
      return (<ItemLista key={i} nomeLocal={local}/>);
    });

    return (
      <View>
          <View style = {styles.inputContainer}>
            <View style = {styles.localContainer}>
              <TextInput
                value = {this.state.descLocal}
                onChangeText = {this.descLocalHandler}
              />
            </View>
            <View>
              <Button
                title = {'add'}
                onPress = {this.addLocalHandler}
              />
            </View>
          </View>
        <View>
          {locais}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '80%',
    backgroundColor: '#eee'
  },
  localContainer: {
    width: '80%'
  }
});

export default TelaCompartilhaLocal;
