import  React, {Component} from "react";
import {Image,ScrollView, StyleSheet, Text, TextInput, View, Button, TouchableOpacity , ImageBackground } from 'react-native'
import firebase from 'firebase';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';
import { StackActions } from '@react-navigation/native';

export const BUTTON_HEIGHT = 50;
export const BUTTON_WIDTH = 150;


let user_data = {
  fname:"",
  lname:"",
  email: '',
  password:'',
  login:''

};
const image = require('../../assets/Mask.png');
const image2 = require('../../assets/Group-250.png');
var color1 = "#F54EA2";
var color2 =  "#FF7676";

export default class signUp extends Component {

  state = { email: '', password: '', errorMessage: null }
  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
          user_data.email = this.state.email,
          user_data.password = this.state.password,
          user_data.login = 'yes',
          AsyncStorage.setItem('User_data', JSON.stringify(user_data));
          this.props.navigation.dispatch(
            StackActions.replace('Tabs')
          );
    })
      .catch(error => this.setState({ errorMessage: error.message }))
  }

    render() {
        return (
          <ImageBackground source={image} style={styles.image}>
          <ScrollView style={styles.backgroundBlack}>
        <View style={styles.container}>
        <Image style={{width: 200, height:200, marginBottom:25}} resizeMode={('contain')} source={require("../../assets/Group-250.png")} />
        {this.state.errorMessage &&
            <Text style={{ color: 'red' }}>
                {this.state.errorMessage}
            </Text>}

            <View style={styles.credentialFields}> 
            <TextInput
            placeholder="Email"
            autoCapitalize="none"
            placeholderTextColor = "#8A94A6"
            style={styles.textInput}
            onChangeText = {(temail) => {this.setState({ email: temail.trim() });
            // console.log("---************-*-*-*-*-*-*-*-*-",this.state.email, "---************-*-*-*-*-*-*-*-*-" )
           }}
            value={this.state.email}
            />
            <View
              style={{
                borderBottomColor: '#8A94A6',
                borderBottomWidth: .7,
                
              }}
          />
            <TextInput
            secureTextEntry
            placeholder="Password"
            autoCapitalize="none"
            placeholderTextColor = "#8A94A6"
            style={styles.textInput}
            onChangeText = {password => this.setState({ password })}
            value={this.state.password}
            />

              </View>

          <LinearGradient colors={[color1, color2 ]} style={styles.linearGradient}>
            <TouchableOpacity onPress = {this.handleSignUp} >
           <View style={styles.button}>
            <Text style={styles.label} >SignUp</Text>
            </View>
            </TouchableOpacity>
            </LinearGradient>
            <View style= {styles.spaceAbove}>
            <Text style= {styles.whiteText}> Already have an account? <Text onPress = {() => this.props.navigation.dispatch(StackActions.replace('Login'))} style={{color:'#2D88FF' ,  fontSize: 18}}> Login </Text></Text>
            </View>
        </View>
        </ScrollView>
        </ImageBackground>
        )
    }
}



const styles = StyleSheet.create({
  button: {
      alignSelf: "center",
      borderRadius: 32,
      height: BUTTON_HEIGHT,
      width: BUTTON_WIDTH,
      justifyContent: "center",
             
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  textInput: {
    height: RFValue(60),
    fontSize:RFValue(20),
    color:"white",
    // width: '90%',
    margin:10
  },
  label: {
      color: "white",
      fontSize: 22,
      textAlign: "center",
      fontWeight: "800",
    },
    label2: {
      textAlign: "center",
      fontWeight: "800",
      color:'#F80000', 
      fontSize: 40
      
    },
    spaceAbove:{
      marginTop:20
    },
    whiteText:{
      color:"white"
    },
    backgroundBlack:{
        paddingTop:50
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    credentialFields:{
      backgroundColor:"#3A4667",
      width: '80%',
      borderRadius: 20
    },
    linearGradient:{
      borderRadius: 32,
      width:"80%",
      marginTop: 20,
      
      shadowRadius: 15,
      shadowOffset: {
        width: 150,
        height: 150,
      },
      shadowColor: '#000000',
      elevation: 4,
    }
}
);
