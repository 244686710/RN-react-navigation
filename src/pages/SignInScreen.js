import React from 'react';
import {View, Button, AsyncStorage, Text} from 'react-native';
import { connect } from 'react-redux'; // 引入connect函数
import *as loginAction from '../actions/loginAction';// 导入action方法

class SignInScreen extends React.Component {
    static navigationOptions = {
        title: 'Please sign in',
    };

    render() {
        const { login } = this.props;
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