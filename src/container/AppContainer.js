
import React, {Component} from 'react';
import { createSwitchNavigator, createAppContainer, createStackNavigator } from 'react-navigation'
import HomeScreen from '../pages/HomeScreen'
import SignInScreen from '../pages/SignInScreen'
import DetailsScreen from '../pages/DetailsScreen'
import AuthLoadingScreen from '../pages/AuthLoadingScreen'

import { View, Text, Button} from 'react-native';

const AppStack  = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Details: {
    screen: DetailsScreen
  }
}, {
  initialRouteName: 'Home'
})

const AuthStack = createStackNavigator({ SignIn: SignInScreen });

const AppContainer = createAppContainer(createSwitchNavigator({

  AuthLoading: AuthLoadingScreen,
  App: AppStack,
  Auth: AuthStack
}, {
  initialRouteName: 'AuthLoading'
}
));

export default AppContainer;