import * as React from "react";
import {Text, View , StyleSheet , ScrollView , Image, ImageBackground , Dimensions, Linking, Platform} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


export const BUTTON_HEIGHT = RFValue(60);
export const BUTTON_WIDTH = (200);

const image = require('../../assets/Mask.png');
const logoImage2 = require('../../assets/Group-250.png');
const image2 = require('../../assets/Group-259.png');

const fb =  require('../../assets/homeicons/fb.png');
const tw =  require('../../assets/homeicons/tw.png');
const insta =  require('../../assets/homeicons/insta.png');
const web =  require('../../assets/homeicons/web.png');
const yt =  require('../../assets/homeicons/yt.png');


function HomeScreen  ({ navigation }) {   
  

  return (    
    <ImageBackground source={image} style={styles.image}>
      
          <Image source={logoImage2} style={styles.logoimage} />
              <View style={styles.container} >
                <Text style = {styles.welcomeText}>Social Profiles</Text>
              <View style ={styles.row1}>
              <TouchableOpacity onPress={()=>{if(Platform.OS === "ios"){Linking.openURL('fb://profile/314364109489774');}else{ Linking.openURL('https://www.facebook.com/gtroad.fm'); console.log('https://www.facebook.com/gtroad.fm');}}}   ><Image source={fb} style={styles.image3} /></TouchableOpacity>
                <TouchableOpacity onPress={()=>{Linking.openURL('https://twitter.com/gtroadfm');}}  ><Image source={tw} style={styles.image3} /></TouchableOpacity>
                <TouchableOpacity onPress={()=>{Linking.openURL('https://www.instagram.com/gtroad.fm/');}}><Image source={insta} style={styles.image3} /></TouchableOpacity>
              </View>
              <View style ={styles.row1}>
              <TouchableOpacity onPress={()=>{Linking.openURL('https://www.youtube.com/channel/UCH6bV-uJ4QwU2MyrY4-NqdA');}}><Image source={yt} style={styles.image3} /></TouchableOpacity>
              <TouchableOpacity onPress={()=>{Linking.openURL('https://www.gtroadfm.com/');}}><Image source={web} style={styles.image3} /></TouchableOpacity>
              </View>
            </View>
    
    </ImageBackground>
  );
  }



const styles = StyleSheet.create({
  containerx: {
 },
    container: {
      flex: 1,
    },
    welcomeText:{
        fontSize: RFValue(22),
        color: "white",
        alignSelf:"center",
        padding: 40
    },
    image: {
      flex: 1,
      justifyContent: "center",
    },
    logoimage: {
     
      resizeMode: "contain",
      height : 200,
      width : 200,
      paddingTop: 40,
      alignSelf:"center",
    },
    image3: {
      resizeMode: "contain",
      height : 80,
      width : 80,
      marginRight: 20,
      alignSelf:"center",
    },
    row1:{
      flexDirection: "row",
      justifyContent:"center",
      alignItems:"center",
      alignSelf:"center",
      width: "70%",
      paddingBottom: 20
    }
  }
  );
  

export default HomeScreen;















