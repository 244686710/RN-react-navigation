import React from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';


export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home', // 设置导航条标题
        headerBackTitle:null,
    };
    render() {
        const navigate = this.props.navigation;//这里可以自定义跳转属性,相当于iOS中self.navigation,跳转时候使用navigate.navigate('Details', {name: '卓原'})
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Home Screen</Text>

                <Button
                    title="Go to Detail"
                    onPress={() => navigate.navigate('Details', {name: '传值'})}  //跳转到另一个界面
                    // onPress={() => this.props.navigation.navigate('Details', {name: '卓原'})} //如果上边没有自定义去接受.则要这样写跳转到另一个界面
                />

            </View>
        );
    }
}