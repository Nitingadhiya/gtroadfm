import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View, Image , ScrollView , ImageBackground} from 'react-native';
import firebase from 'firebase';
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from '@react-native-community/async-storage';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import LinearGradient from 'react-native-linear-gradient';
import { StackActions } from '@react-navigation/native';
import {firebaseDB} from "../../chat_src/config/FirebaseConfig";
import _ from 'lodash';

export const BUTTON_HEIGHT = RFValue(60);
export const BUTTON_WIDTH = RFValue(150);

let user_data = {
  fname:"",
  lname:"",
  email: '',
  password:'',
  login:''

};
var color1 = "#F54EA2";
var color2 =  "#FF7676";
const image = require('../../assets/Mask.png');
const image2 = require('../../assets/Group-250.png');

var provider = new firebase.auth.GoogleAuthProvider();
import database from '@react-native-firebase/database';



// const image = require('../../assets/bg11r.jpg');



export default class Login extends Component {
  state = { email: '', password: '', errorMessage: null }
 handleLogin = () => {
   firebase
     .auth()
     .signInWithEmailAndPassword(this.state.email, this.state.password)
     .then((res) => {
       console.log(res,'res ** ');
      
       if(res){
        this.checkExistsUserID(res);
        user_data['email'] = this.state.email;
        user_data['password']=  this.state.password;
        user_data['login'] = 'yes';
        AsyncStorage.setItem('User_data', JSON.stringify(user_data));
        this.props.navigation.dispatch(
          StackActions.replace('Tabs')
        );
       }
      })
     .catch(error => this.setState({ errorMessage: error.message }))
  }

  checkExistsUserID(res){
    const uId = _.get(res,'user.uid','');
    database()
    .ref(`/users`)
    .on('value', snapshot => {
      console.log('User data: ', snapshot.val());
      const record = snapshot.val();
        const valueRecord = _.find(record,{ id :  uId});
        if(!valueRecord) {
          this.createNewUserFirebase(res);
        }
    });
  }

  createNewUserFirebase(res){
    const uId = _.get(res,'user.uid','');
    const email = _.get(res,'user.email','');

  const newReference = database()
    .ref('/users')
    .push();
  
  console.log('Auto generated key: ', newReference.key);
  
  newReference
    .set({
      email: email,
      status: 1,
      id: uId,
    })
    .then(() => console.log('Data updated.'));
  }
 
      componentDidMount(){
        
        this.redirectIfLogedIn();
      }

      redirectIfLogedIn(){
        AsyncStorage.getItem('User_data', (err, result) => {
          // console.log("------------------");
          // console.log(result);
          if(result != null){
            //this means its logged in 
            let r2 =JSON.parse(result);
            // console.log(r2['email']);
            if(r2['email'] != '')
            this.props.navigation.dispatch(
              StackActions.replace('Tabs')
            );
          }
        });
      }

  render() {
    return (
      <ImageBackground source={image} style={styles.image}>
      <ScrollView style={styles.backgroundBlack}>
      <View style={styles.container}>
      <Image style={{width: 200, height:200, marginBottom:25}} resizeMode={('contain')} source={require("../../assets/Group-250.png")} />
        
       
        {this.state.errorMessage &&
          <Text style={{fontWeight: "800",color:'#F80000' }}>
            {this.state.errorMessage}
          </Text>}
         <View style={styles.credentialFields}> 
        <TextInput style={styles.textInput }
          autoCapitalize="none"
          placeholder="Email"
          placeholderTextColor = "#8A94A6"
          onChangeText = {(temail) => {this.setState({ email: temail.trim() }); }}
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
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          placeholderTextColor = "#8A94A6"
          onChangeText = {password => this.setState({ password })}
          value={this.state.password}
        />

        </View>
        <LinearGradient colors={[color1, color2 ]} style={styles.linearGradient}>
            <TouchableOpacity onPress = {this.handleLogin} >
            <View style={styles.button}>
                <Text style={styles.label} >SIGN IN</Text>
                </View>
            </TouchableOpacity>
        </LinearGradient>
        <View style= {styles.spaceAbove} >
        <Text style= {styles.whiteText}> Don't have an account? <Text onPress= {() => this.props.navigation.dispatch(StackActions.replace('SignUp'))} style={{color:'#2D88FF', fontSize: 18}}> Sign Up </Text></Text>
        </View>

        {/* <View style={styles.spaceAbove}>
        <TouchableOpacity onPress = {this.handleLogin2} > 
          <Text style={styles.label}> Signin with google </Text>
          </TouchableOpacity>
        </View> */}

        
      </View>
      </ScrollView>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
    button: {
        alignSelf: "center",
        // backgroundColor: "#FFC50B",
        borderRadius: 32,
        height: BUTTON_HEIGHT,
        width: BUTTON_WIDTH,
        justifyContent: "center",
               
      },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:0,
    },
    textInput: {
      height: 45,
      fontSize:20,
      color:"white",
     
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
  