import React,{Component} from "react";
import {StyleSheet,Text,View,Button} from "react-native";
export default class Home extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>This is {this.props.route.name}</Text>
                <Button title="Go to Page" onPress={()=>{this.props.navigation.push("Page",{title:"react"})}}></Button>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#F5FCFF"
    }
})