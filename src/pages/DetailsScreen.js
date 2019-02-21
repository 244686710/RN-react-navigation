import React from 'react';
import {
    View,
    Text,
    Button,
    Image,
} from 'react-native';

export default class DetailsScreen extends React.Component {

    static navigationOptions = ({navigation,navigationOptions }) => { //为了在标题中使用params，我们需要使navigationOptions成为一个返回配置对象的函数
        return {
            title: navigation.getParam('name'),
            // headerBackImage: <Image      //自定义返回按钮.给返回按钮换成图片
            //     source={require('./diangui.png')}
            //     style={{width: 30, height: 30}}
            // />,
            headerRight: (       //添加右侧按钮
                <Button
                    onPress={() => alert('This is a button!')}
                    title="Info"
                    color="blue"
                />
            ),
        };
    };
    render() {

        const navigate = this.props.navigation;  //这里可以自定义跳转属性,相当于iOS中self.navigation,在跳转时候使用
        // const name = this.props.navigation.state.params.name;
        const age = "15";

        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Details Screen</Text>
                {/* <Button                                 //需要注意的是这里.三转跳转方式,
                    title={name}
                    onPress={() => navigate.push('Details')}    //这种跳转方式是,基于这个界面的基础上在此跳转一个新的这个界面
                /> */}
                <Button
                    title={age}
                    onPress={() => navigate.navigate('Home')}   //这种跳转方式是,基于这个界面的基础上在此跳转一个新的Home界面
                />
                <Button
                    title="Go back"
                    onPress={() => navigate.goBack()}            //这种跳转方式是,基于这个界面的基础上返回上一个界面
                />
                <Button
                    title="Go to Details... again"
                    onPress={() => navigate.push('Details')}            //这种跳转方式是,基于这个界面的基础上返回上一个界面
                />
            </View>
        );
    }
}