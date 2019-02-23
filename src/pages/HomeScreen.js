import React from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    Button,
    AsyncStorage
} from 'react-native';


class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome to the app!', // 设置导航条标题
        headerBackTitle:null,
    };


    render() {
        const navigate = this.props.navigation;//这里可以自定义跳转属性,相当于iOS中self.navigation,跳转时候使用navigate.navigate('Details', {name: '卓原'})
        const {user, count} = this.props
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Welcome {user.name}</Text>
                <Text>Age: {user.age}</Text>
                <Button
                    title="Go to Detail"
                    onPress={() => navigate.navigate('Details', {name: '传值'})}  //跳转到另一个界面
                    // onPress={() => this.props.navigation.navigate('Details', {name: '卓原'})} //如果上边没有自定义去接受.则要这样写跳转到另一个界面
                />
                <Button 
                    title="Show me more of the app"
                    onPress={this._showMoreApp}
                />
                <Button 
                    title="Actually, sign me out :)"
                    onPress={this._signOutAsync}
                />

            </View>
        );
    }

    _showMoreApp = () => {
        this.props.navigation.navigate('Other');
    };
    
    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
}

export default connect(
    (state) => ({
        user: state.loginIn.user,
        count: state.counter.count
    }), 
    ((dispatch) => ({})) 
    )(HomeScreen);