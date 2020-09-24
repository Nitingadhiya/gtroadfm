import * as React from "react";
import {Text, View , StyleSheet , ScrollView , Image, ImageBackground , Dimensions} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from '@react-native-community/async-storage';

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { StackActions } from '@react-navigation/native';
// const image = require('../../assets/bg11r.jpg');

let user_data = {
  fname:'',
  lname:'',
  email: '',
  password:'',
  login: 'no'

};
export const BUTTON_HEIGHT = RFValue(60);
export const BUTTON_WIDTH = (200);

const image = require('../../assets/Mask.png');
const logoImage2 = require('../../assets/Group-250.png');
const image2 = require('../../assets/Group-259.png');

function checkIfLogedIn(){
  AsyncStorage.getItem('User_data', (err, result) => {
    // console.log("------------------");
    // console.log(result);
    if(result != null){
      //this means its logged in 
      let r2 =JSON.parse(result);
      // console.log(r2['email']);
      if(r2['email'] != '')
        return true;
    }
    else return false;
  });
}

function logout(){
  AsyncStorage.setItem('User_data', JSON.stringify(user_data));
  // console.log("User logged out");
} 
function MainMenu  ({ navigation }) {   
  

  var checkX = true ;
  checkX= Boolean(checkIfLogedIn());
  return (
    
    <ImageBackground source={image} style={styles.image}>
      
          <ImageBackground source={image2} style={styles.image2} >
          <Image source={logoImage2} style={styles.image3} />
              <View style={styles.container} >
              
                  <View style={styles.container2} ><Text style={styles.welcomeText}  >Welcome</Text></View>
               
                  {/* <View style={styles.container3} ><Text style={styles.SubHeadingText} >My Profile</Text></View> */}



                  <TouchableOpacity onPress = {() => navigation.navigate('About Us')}>
                    <View style={styles.container3} ><Text style={styles.SubHeadingText}  >About Us</Text></View>
                  </TouchableOpacity>




                  <TouchableOpacity onPress = {() => navigation.navigate('Contact Us')}>
                    <View style={styles.container3} ><Text style={styles.SubHeadingText}  >Contact Us</Text></View>
                  </TouchableOpacity>




                  <TouchableOpacity onPress = {() => navigation.navigate('Privacy Policy')}>
                    <View style={styles.container3} >
                      <Text style={styles.SubHeadingText}  >Privacy Policy
                      </Text>
                    </View>
                    </TouchableOpacity>



                  <TouchableOpacity onPress = {() => navigation.navigate('Terms And Conditions')}>
                  <View style={styles.container3} ><Text style={styles.SubHeadingText}  >Terms and Conditions</Text></View>
                  </TouchableOpacity>
                  <>
                  {( Boolean(checkIfLogedIn()) ) ? (
                      <>
                      <TouchableOpacity onPress = {() => navigation.navigate('Sign Up')}>
                      <View style={styles.container3} ><Text style={styles.SubHeadingText}  >Sign Up</Text></View>
                      </TouchableOpacity>
                      <TouchableOpacity onPress = {() => navigation.navigate('Login')}>
                      <View style={styles.container3} ><Text style={styles.SubHeadingText}  >Login</Text></View>
                      </TouchableOpacity>
                    </>
                  ):(
                    <>
                    <TouchableOpacity onPress = {() => {
                      logout();
                      navigation.dispatch(
                        StackActions.replace('Login')
                      );
                    } }>
                    <View style={styles.container3} ><Text style={styles.SubHeadingText}  >Log Out</Text></View>
                    </TouchableOpacity>
                  </>
                  )}
                  </>

                  <View ><Text style={styles.SubHeadingText}  >&nbsp;</Text></View>
                
            </View>
        </ImageBackground>
        {/* </ImageBackground> */}
    </ImageBackground>
  );
  }



const styles = StyleSheet.create({
  containerx: {
    // flex:1,
    // alignContent:"center",
    // alignItems:"center"
  },
    container: {
      flex: 1,
      // padding: 22,

      
    },
    welcomeText:{
        fontSize: RFValue(15),
        color: "white",
        alignSelf:"center"
    },
    container2:{  
      // paddingTop:50,
      paddingBottom:40
        // borderBottomWidth: StyleSheet.hairlineWidth,
        // borderTopWidth: 0,
        // borderBottomColor: "rgba(158, 150, 150, .5);",
        // borderTopColor: "rgba(158, 150, 150, .5);",
        // paddingLeft:"5%",
        // marginBottom:"5%"
    },
    SubHeadingText:{
        fontSize: 22,
        color: "white",
        alignSelf:"center"
        // paddingTop:"7%",
        // paddingBottom:"3%"
    },
    container3:{  
      padding:10
        // borderBottomWidth: StyleSheet.hairlineWidth,
        // borderTopWidth: 0,
        // borderBottomColor: "rgba(158, 150, 150, .5);",
        // borderTopColor: "rgba(158, 150, 150, .5);",
        // paddingLeft:"5%"
    },
    image: {
      flex: 1,
      // resizeMode: "center",
      justifyContent: "center",
      
      // resizeMethod: "resize",
    },
    image2: {
      flex: 1,
      resizeMode: "center",
      justifyContent: "center",
      // resizeMethod: "resize",
      marginTop: 100,
      height : Dimensions.get("window").height * .806,
      width : Dimensions.get("window").width * .9,
      // alignContent:"center",
      alignSelf:"center"
    },
    image3: {
     
      resizeMode: "contain",
      height : 150,
      width : 145,
      marginTop: -75,
      // alignContent:"center",
      alignSelf:"center"
    }
  }
  );
  

export default MainMenu;
















////////////////////////////////