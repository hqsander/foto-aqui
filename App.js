import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import TelaCompartilhaLocal from './src/telas/TelaCompartilhaLocal/TelaCompartilhaLocal';
import configureStore from './src/store/configureStore';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <TelaCompartilhaLocal />
        </View>
      </Provider>
    );
  }
}

export default App;
