import React from 'react';
import { createAppContainer, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-ionicons';

import Login from './telas/Login';
import ExemploA from './telas/ExemploA';
import ExemploB from './telas/ExemploB';

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  const IconComponent = Icon;
  let iconName;
  if (routeName === 'ExemploA') {
    iconName = 'md-map';
  } else if (routeName === 'ExemploB') {
    iconName = 'md-share';
  }

  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const Navigator = createAppContainer(
  createSwitchNavigator({
    Login,
    App: createBottomTabNavigator({
      ExemploA,
      ExemploB
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => getTabBarIcon(navigation, focused, tintColor),
      })
    })
  })
);

export default Navigator;
