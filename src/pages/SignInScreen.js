import React from 'react';
import {View, Button, AsyncStorage, Text} from 'react-native';
import { connect } from 'react-redux'; // 引入connect函数
import { StackActions, NavigationActions } from 'react-navigation';
import *as loginAction from '../actions/loginAction';// 导入action方法

class SignInScreen extends React.Component {
    static navigationOptions = {
        title: 'Please sign in',
    };

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.isSuccess && nextProps.status === '登陆成功') {
            this.props.navigation.navigate('App');
            return false
        }
        return true;
    }
    render() {
        const { login } = this.props;
        console.log(this.props)
        return (
            <View>
                
                <Text>状态： {this.props.status}</Text>
                
                <Button 
                    title="Sign in!" 
                    onPress={() => login()}/>
            </View>
        )
    }

    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };

}

export default connect(
    (state) => ({
      status: state.loginIn.status,
      isSuccess: state.loginIn.isSuccess,
      user: state.loginIn.user,
    }),
    (dispatch) => ({
      login: () => dispatch(loginAction.login()),
    })
)(SignInScreen)