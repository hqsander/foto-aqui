import React, { Component } from 'react';
import {
  StyleSheet, View, Image, Text, Button, Modal
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
          <View>
            <Button title="excluir" color="red" onPress={this.props.onExcluirLocal} />
            <Button title="fechar" onPress={this.props.onFecharModal} />
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
  }
});

export default DetalheLocal;
