import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

export default class DetailsScreen extends React.Component {

    static navigationOptions = ({navigation,navigationOptions }) => { //为了在标题中使用params，我们需要使navigationOptions成为一个返回配置对象的函数
        return {
            title: navigation.getParam('name'),
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
            <View style={styles.wrap}>
              <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}><Text>1</Text></View>
              <View style={{width: 50, height: 50, backgroundColor: 'yellow'}}><Text>2</Text></View>
              <View style={{width: 50, height: 50, backgroundColor: 'green'}}><Text>3</Text></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    } 
})