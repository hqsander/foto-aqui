/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  StyleSheet, View, Image, Text, Button, Modal, TouchableOpacity
} from 'react-native';

class DetalheLocal extends Component {
  render() {
    let conteudoModal = null;
    if (this.props.localSelecionado) {
      conteudoModal = (
        <View>
          <Image source={this.props.localSelecionado.imagem} style={styles.imagem} />
          <Text style={styles.descricao}>
            {this.props.localSelecionado.descricao}
          </Text>
        </View>
      );
    }

    return (
      <Modal onRequestClose={this.props.onFecharModal} visible={this.props.localSelecionado !== null} animationType="slide">
        <View style={styles.modalContainer}>
          {conteudoModal}
          <View style={styles.botoes}>
            <View style={styles.botaoFechar}>
              <Button title="fechar" onPress={this.props.onFecharModal} />
            </View>
            <TouchableOpacity onPress={this.props.onExcluirLocal}>
              <Ionicons name="ios-trash" size={30} color="red" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  imagem: {
    width: '100%',
    height: 200
  },
  descricao: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  botaoFechar: {
    width: '70%',
    paddingRight: 30
  }
});

export default DetalheLocal;
