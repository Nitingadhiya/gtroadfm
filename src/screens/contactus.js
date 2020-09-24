import React, {Component} from "react";
import {Text, View , StyleSheet ,  ScrollView ,Linking,Platform , Image, ImageBackground, Dimensions} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
const latLng = `${'30.7024886'},${'76.6873308'}`;
const label = 'GT Road FM Radio';
const url = Platform.select({
  ios: `${scheme}${label}@${latLng}`,
  android: `${scheme}${latLng}(${label})`
});

const image = require('../../assets/Mask.png');
const logoImage2 = require('../../assets/Group-250.png');
const image2 = require('../../assets/Group-259.png');

const imageSize = RFValue(32);
// const image = require('../../assets/bg11r.jpg');
class ContactUs extends Component{
  render() {
    return( 
      <ImageBackground source={image} style={styles.image}>
        <ImageBackground source={image2} style={styles.image2} >
          <Image source={logoImage2} style={styles.image3} />
          <View style={styles.container} >
            <ScrollView style={styles.scrollViewStyle}>  
            

            {/* <TouchableOpacity onPress={()=>{Linking.openURL(url);}}   style={{ alignItems: 'center', flex: 1, flexDirection: 'row' }}>

                <View  style={{flex: 1, flexDirection: 'row' , alignItems: 'center' }} >
                <MaterialCommunityIcons name="google-maps" color={"#1EA362"} size={32}  alignItems= 'center' justifyContent = 'center' /> 
                 <Image style={{width: imageSize, height: imageSize }} marginTop= {RFValue(20)}  resizeMode={('contain')} source={require("../../assets/gmaps.png")}  />
                 <Text style={styles.SubHeadingText} >   GT Road FM (Studio) Phase 8A, Plot # 545 Mohali,Punjab. (Chandighar) 160055</Text>
                </View>

                </TouchableOpacity> 
                */}
                {/* <View style={styles.makeCenter}> */}
                {/* <TouchableOpacity  >

                <View  style={{flex: 1, flexDirection: 'row' , alignItems: 'center' }} >
                <MaterialCommunityIcons name="account" color={"#fff"} size={32} alignItems= 'center' justifyContent = 'center'  />
                {/* <Image style={{width: imageSize, height: imageSize }}  marginTop= {RFValue(20)} resizeMode={('contain')} source={require("../../assets/phone.png")}  /> 
                <Text style={styles.SubHeadingText} >   About Us</Text>
                </View>
                </TouchableOpacity> */}

                <TouchableOpacity onPress={()=>{Linking.openURL(`tel:${"+14166152222"}`);}}  >

                <View  style={{flex: 1, flexDirection: 'row'  }} >
                <MaterialCommunityIcons name="phone" color={"#fff"} size={32} alignItems= 'center' justifyContent = 'center'  />
                {/* <Image style={{width: imageSize, height: imageSize }}  marginTop= {RFValue(20)} resizeMode={('contain')} source={require("../../assets/phone.png")}  /> */}
                <Text style={styles.SubHeadingText} >   416-615-2222</Text>
                </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>{Linking.openURL(`mailto:${"info@gtroadfm.com"}`);}}   style={{ justifyContent: 'center' }}>
                <View  style={{flex: 1, flexDirection: 'row' , alignItems: 'center' }} >
                <MaterialCommunityIcons name="email" color={"#ffff"} size={32} /> 
                  <Text style={styles.SubHeadingText} >   info@gtroadfm.com</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{Linking.openURL(`whatsapp://send?phone=${"+18666158222"}`);}}   style={{ justifyContent: 'center' }}>
                <View  style={{flex: 1, flexDirection: 'row' , alignItems: 'center' }} >
                <MaterialCommunityIcons name="whatsapp" color={"#ffff"} size={32} /> 
                {/* <Image style={{width: imageSize, height: imageSize }} marginTop= {RFValue(20)} resizeMode={('contain')} source={require("../../assets/whatsapp.png")}  /> */}
                <Text style={styles.SubHeadingText} >  1-866-615-8222</Text>
                </View>
                </TouchableOpacity>
                

                <TouchableOpacity onPress={()=>{Linking.openURL(`whatsapp://send?phone=${"+919878617299"}`);}}   style={{ justifyContent: 'center' }}>
                <View style={styles.container3} style={{flex: 1, flexDirection: 'row' , alignItems: 'center' }} >
                <MaterialCommunityIcons name="whatsapp" color={"white"} size={32} /> 
                {/* <Image style={{width: imageSize, height: imageSize }} marginTop= {RFValue(20)} resizeMode={('contain')} source={require("../../assets/whatsapp.png")}  /> */}
                <Text style={styles.SubHeadingText} >   +91-9878617299</Text>
                </View>
                </TouchableOpacity>

                
            
            </ScrollView></View>
            </ImageBackground>
    </ImageBackground>
    
    );
   }
  
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignContent:"center",
      // padding: 70,
      paddingTop:0,
      paddingLeft:30
    },
    makeCenter:{
      // alignItems:"center"
    },
   
    SubHeadingText:{
        fontSize: RFValue(20),
        color: "white",
        color: "white",
        alignSelf:"center",
        padding:10,
    },
    container3:{  
      
      // paddingTop: 20,
      // paddingBottom:20
    
    },
    
    image: {
      flex: 1,
      // resizeMode: "cover",
      justifyContent: "center"
    },
    image2: {
      flex: 1,
      resizeMode: "center",
      justifyContent: "center",
      // resizeMethod: "resize",
      marginTop: 80,
      height : Dimensions.get("window").height * .806,
      width : Dimensions.get("window").width * 0.9,
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
    },
    scrollViewStyle:{
      height:60,
      width : "90%",
      alignContent:"center",
      alignSelf:"center",
      paddingLeft:10,
      
    },
  }
  );
  

export default ContactUs;