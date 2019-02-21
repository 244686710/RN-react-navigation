/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createSwitchNavigator, createAppContainer, createStackNavigator } from 'react-navigation'
import HomeScreen from './src/pages/HomeScreen'
import SignInScreen from './src/pages/SignInScreen'
import DetailsScreen from './src/pages/DetailsScreen'
import AuthLoadingScreen from './src/pages/AuthLoadingScreen'

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
  initialRouteName: 'Auth'
}
));

export default AppContainer;