import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import ItemLista from './ItemLista';

const listaLocal = props => (
  <FlatList
    style={styles.listContainer}
    data={props.locais}
    renderItem={index => (
      <ItemLista
        nomeLocal={index.item.local}
        fotoLocal={index.item.foto}
      />
    )}
  />
);

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  }
});

export default listaLocal;
