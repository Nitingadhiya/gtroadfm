import * as React from "react";
import {Text, View , StyleSheet , ScrollView , Image, ImageBackground , Dimensions} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {AsyncStorage} from 'react-native';
// import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

// const image = require('../../assets/bg11r.jpg');

let user_data = {
  fname:'',
  lname:'',
  email: '',
  password:'',
  login: 'no'

};

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


function Home1  ({ navigation }) {   
  
  return (
    
    
              <View style={styles.container} >
              <TouchableOpacity onPress = {() => navigation.navigate('GChat')}>
                  <View style={styles.container2} ><Text style={styles.welcomeText}  >Welcome</Text></View>
                </TouchableOpacity>
                
            </View>
       
  );
  }

const styles = StyleSheet.create({
  SubHeadingText:{
    fontSize: 22,
    color: "white",
    alignSelf:"center"
    // paddingTop:"7%",
    // paddingBottom:"3%"
},
container:{  
  flex:1,
  textAlign: "center"
},


});

export default Home1;
















////////////////////////////////