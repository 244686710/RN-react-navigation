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
import DetailsScreen from './src/pages/DetailsScreen'
import { View, Text, Button} from 'react-native';

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
const AuthStack = createStackNavigator({ SignIn: SignInScreen });

class SignInScreen extends React.Component {
  render () {
    return (
      <View>
        <Text>SignInScreen Page</Text>
        <Button 
          title="Login"
          onPress={()=> {
            alert('登陆ing')
          }}
        />
      </View>
    )
  }
}

const AppContainer = createAppContainer(createSwitchNavigator({
    App: AppNavigator,
    Auth: AuthStack
  }
));

export default AppContainer;