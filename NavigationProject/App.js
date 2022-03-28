import React,{Component} from "react";
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import HomeRoute  from "./src/routes/Home";
import PageRoute from "./src/routes/Page";
const Stack=createStackNavigator()
export default class App extends Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeRoute}/>
          <Stack.Screen name="Page" component={PageRoute}/>
        </Stack.Navigator>
      </NavigationContainer>
   );
  }
}