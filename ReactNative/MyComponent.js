import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
} from 'react-native';
export default class MyComponent extends Component {
    render() {
      return (
        <View style={{margin: 10}}>
          <Text>姓名</Text>
          <TextInput
            style={{height: 40, width: 200, borderWidth: 1}}
            placeholder="請輸入"
          />
        </View>
      );
    }
  }