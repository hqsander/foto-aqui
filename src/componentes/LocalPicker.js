import React, { Component } from 'react';
import {
  View, Button, StyleSheet, Dimensions
} from 'react-native';
import MapView from 'react-native-maps';

class LocalPicker extends Component {
  state = {
    focusedLocation: {
      latitude: -19.881962,
      longitude: -43.928011,
      latitudeDelta: 0.0122,
      longitudeDelta:
        Dimensions.get('window').width
        / Dimensions.get('window').height
        * 0.0122
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          initialRegion={this.state.focusedLocation}
          style={styles.map}
          onPress={this.pickLocationHandler}
        />
        <View style={styles.button}>
          <Button title="Minha Localização" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center'
  },
  map: {
    width: '100%',
    height: 250
  },
  button: {
    margin: 8
  }
});

export default LocalPicker;
