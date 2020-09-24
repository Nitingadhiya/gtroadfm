import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, TouchableHighlight , KeyboardAvoidingView} from "react-native";
import { ActionConst, Actions, Router, Scene } from "react-native-router-flux";
import AwsConfig from "../config/AwsConfig";
import AsyncStorage from '@react-native-community/async-storage';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import LinearGradient from 'react-native-linear-gradient';

let user_data = {
    fname:"",
    lname:"",
    email: '',
    password:'',
    login:'yes',
  
  };

export const BUTTON_HEIGHT = RFValue(60);
export const BUTTON_WIDTH = RFValue(150);
var color1 = "#F54EA2";
var color2 =  "#FF7676";


  async function getUser_data(){
    // console.log("get user data ------------------");
    await AsyncStorage.getItem('User_data', (err, result) => {
        // console.log("------------------");
      // console.log(result);
      if(result != null){
        //this means its logged in 
        let r2 =JSON.parse(result);
        // console.log(r2['email']);
        if(r2['email'] != '')
          user_data['email'] = r2["email"];
          user_data['password'] = r2["password"];
          user_data['login'] = r2["login"];
          user_data['fname'] = r2["fname"]; 
          user_data['lname'] = r2["lname"];  
      }
    });
  }

  

export default class enterRoom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            roomName: "XYZ", //General 
            enterRoom: false
        }
        this.onSubmitEdit = this.onSubmitEdit.bind(this);
        this.enterRoom = this.enterRoom.bind(this);
    }
    componentDidMount() {
        getUser_data();
        this.redirectIfNameEntered();
    }
    async setUser_data(fname,lname){
        user_data['fname'] = fname;
        user_data['lname']=  lname;
        user_data['login'] = 'yes';
    
        await AsyncStorage.setItem('User_data', JSON.stringify(user_data));
      }
    
    async redirectIfNameEntered(){
        // console.log("chackin if we already have names ------------------");
        let haveNames = false;
        await AsyncStorage.getItem('User_data', (err, result) => {
          // console.log("------------------");
          // console.log(result);
          if(result != null){
            //this means its logged in 
            let r2 =JSON.parse(result);
            // console.log(r2);
            if(r2['fname'] != '' && r2['lname'] != '')
            {
                user_data['email'] = r2["email"];
                user_data['password'] = r2["password"];
                user_data['login'] = r2["login"];
                user_data['fname'] = r2["fname"]; 
                user_data['lname'] = r2["lname"];
                this.setState({ firstName: r2['fname'] , lastName:r2['lname'] , enterRoom:true });
                haveNames = true;

                
            }
          }
        });

        if(haveNames){
            this.enterRoom();
        }
      }
    

    onSubmitEdit() {
        const { firstName, lastName } = this.state
        if (firstName && lastName) {
            this.setUser_data(this.state.firstName, this.state.lastName);
            this.redirectIfNameEntered();

            // this.setState({ enterRoom })
        } else {
            alert("please enter your name")
        }
    }

    enterRoom() {
        // console.log(this.state, "state")
        const { firstName, lastName, roomName } = this.state
        const user = {
            _id: user_data['email'],
            name: `${firstName}${lastName}`,
            firstName: firstName,
            lastName: lastName,
            roomName: roomName,
            avatar: `https://upload.wikimedia.org/wikipedia/commons/9/93/Default_profile_picture_%28male%29_on_Facebook.jpg`
        }
        Actions.chat({user})
    }
    render() {
        // if (this.state.enterRoom) {
        //     return (
        //         <View style={styles.container}>
        //             <Text> enter the name of the room </Text>
        //             <TextInput
        //                 style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
        //                 onChangeText={(text) => this.setState({ roomName: text.toUpperCase() })}
        //                 placeholder="room name"
        //             />
        //             <TouchableHighlight onPress={this.enterRoom}>
        //                 <Text>Press here to enter the chat room</Text>
        //             </TouchableHighlight>
        //         </View>
        //     );
        // }
        return (
            <View style={styles.container}>
            <Text  style={styles.label4}> Welcome to General Chat!</Text>
                <Text  style={styles.label3}> Please Enter Your Name </Text>
                <View style={styles.credentialFields}> 
                <TextInput
                    style={styles.textInput}
                    // style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(text) => this.setState({ firstName: text.trim() })}
                    placeholder="first name"
                    placeholderTextColor = "#8A94A6"
                    editable={true}
                    // multiline={true}
                />
                 <View
                    style={{
                        borderBottomColor: '#8A94A6',
                        borderBottomWidth: .7,
                        
                    }}
                    />
                <TextInput
                    style={styles.textInput}
                    // style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(text) => this.setState({ lastName: text.trim() })}
                    placeholder="last name"
                    placeholderTextColor = "#8A94A6"
                    editable={true}
                    // multiline={true}
                />
                </View>
                <LinearGradient colors={[color1, color2 ]} style={styles.linearGradient}>
                <TouchableHighlight onPress={this.onSubmitEdit}>
                <View style={styles.button}>
                    <Text style={styles.label}>Press when finished</Text>
                </View>
                </TouchableHighlight>
                </LinearGradient>
                <KeyboardAvoidingView />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#323D5B",
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        alignSelf: "center",
        // backgroundColor: "#FFC50B",
        borderRadius: 32,
        height: BUTTON_HEIGHT,
        width: BUTTON_WIDTH,
        justifyContent: "center",
               
      },
    
    textInput: {
      height: 45,
      fontSize:20,
      color:"white",
     
      margin:10
    },
    label: {
        color: "white",
        fontSize: 16,
        textAlign: "center",
        fontWeight: "800",
      },
      label3: {
        color: "white",
        fontSize: 18,
        textAlign: "center",
        fontWeight: "500",
        paddingBottom: 10
      },
      label4: {
        color: "white",
        fontSize: 30,
        textAlign: "center",
        fontWeight: "700",
        paddingBottom: 10
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


});







