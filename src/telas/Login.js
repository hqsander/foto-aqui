import React from 'react';
import { View, Text, Button } from 'react-native';

class Login extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login</Text>
        <Button
          title="OK"
          onPress={() => this.props.navigation.navigate('ExemploA')}
        />
      </View>
    );
  }
}

export default Login;
