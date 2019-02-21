/** @format */

import {AppRegistry} from 'react-native';
// import App from './App';
import TabNavigator from './TabNavigationDemo'; // 测试 TabNavigator
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => TabNavigator);
