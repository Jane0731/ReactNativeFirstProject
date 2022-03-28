import React,{Component} from "react";
import {StyleSheet,Text,View,Button} from "react-native";
export default class Page extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>This is {this.props.route.name}</Text>
                <Text>Title is {this.props.route.params.title}</Text>
                <Button title="Ser Params to Native" onPress={()=>{this.props.navigation.setParams({title:"Native"})}}></Button>

                <Button title="Back" onPress={()=>{this.props.navigation.goBack()}}></Button>

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