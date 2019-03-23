import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

class InputLocal extends Component {
  state = {
    descLocal: '',
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

    this.props.onIncluirLocal(this.state.descLocal)
  }

  render() {
    return(
      <View style = {styles.inputContainer}>
        <View style = {styles.localContainer}>
          <TextInput
            value = {this.state.descLocal}
            onChangeText = {this.descLocalHandler}
          />
        </View>
        <View>
          <Button
            title = {'>>>'}
            onPress = {this.addLocalHandler}
          />
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

export default InputLocal;
