import React from 'react';
import { createAppContainer, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-ionicons';

import Login from './telas/Login';
import LocaisSalvos from './telas/LocaisSalvos';
import NovoLocal from './telas/NovoLocal';

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  const IconComponent = Icon;
  let iconName;
  if (routeName === 'LocaisSalvos') {
    iconName = 'md-share';
  } else if (routeName === 'NovoLocal') {
    iconName = 'md-camera';
  }

  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const Navigator = createAppContainer(
  createSwitchNavigator({
    Login,
    App: createBottomTabNavigator({
      LocaisSalvos,
      NovoLocal
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => getTabBarIcon(navigation, focused, tintColor),
      })
    })
  })
);

export default Navigator;
