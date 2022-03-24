import React, {Component} from 'react';
import {Text, View} from 'react-native';
export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
    console.log('constructor');
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    if (nextProps.title != prevState.title) {
      console.log('change state');
      return {
        title: nextProps.title,
      };
    }
    return null;
  }
  render() {
    console.log('render');
    return (
      <View style={{margin: 10}}>
        <Text>Hello {this.state.title}</Text>
      </View>
    );
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    if(this.state.title!=nextState.title){
        console.log("commit rander")
        return true
    }
    return false;
  }
  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate');
    return null;
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
}
