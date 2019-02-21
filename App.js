/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation'
import HomeScreen from './src/pages/HomeScreen'
import DetailsScreen from './src/pages/DetailsScreen'

const AppNavigator  = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Details: {
    screen: DetailsScreen
  }
}, {
  initialRouteName: 'Home'
})

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;