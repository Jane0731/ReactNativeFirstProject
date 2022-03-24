/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import LifeCycle from './LifeCycle';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
  TouchableHighlight,
  FlatList,
  SectionList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:"JS",
      name:"JANE"
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <LifeCycle title={this.state.title}/>
        <Button title="修改title" onPress={()=>this.setState({title:'RN'})}></Button>
      <Text >{this.state.name}</Text>
      <Button title="修改name" onPress={()=>this.setState({name:'Amy'})}></Button>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});
