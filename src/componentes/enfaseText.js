import React from 'react';
import { Text, StyleSheet } from 'react-native';

const enfaseText = props => (
  <Text {...props} style={[styles.enfase, props.style]}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  enfase: {
    fontSize: 28,
    fontWeight: 'bold'
  }
});

export default enfaseText;
