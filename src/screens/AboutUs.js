import React, {Component} from "react";
import {Text, View , StyleSheet ,Image,  ScrollView , Dimensions , ImageBackground } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


const image = require('../../assets/Mask.png');
const logoImage2 = require('../../assets/Group-250.png');
const image2 = require('../../assets/Group-259.png');


class AboutUs extends Component{
  render() {
    return( 
         
    <ImageBackground source={image} style={styles.image}>
      
    <ImageBackground source={image2} style={styles.image2} >
    <Image source={logoImage2} style={styles.image3} />
        <View style={styles.container} >
        
        <ScrollView style={styles.scrollViewStyle}>   
            <View style={styles.containerx} >
                    <View style={styles.container2} >
                        <Text style={styles.HeadingText} > GT Road FM</Text>
                    </View>
                    {/* <Image style={styles.images} source={require("../../assets/FMlogo.png")}  /> */}
                    <View style={styles.container3} >
                        <Text style={styles.SubHeadingText} >GT Road FM is a spectacular new way to receive your daily dose of entertainment from anywhere around the world. The station will be broadcast online which allows anyone no matter their location — as long as they have a way to access the internet or our iOS/Android equipped device — to receive a variety of news, music, interviews, and several other exciting entertainment opportunities. Our goal is to provide our listeners with exceptional content that will fit a wide range of specific interests and tastes. Whether you are interested in hearing informative, unbiased political discussions, listening to the newest Hindi and Punjabi music, or even receiving updates on the latest in sports and celebrity news, we have it here on our station. In addition to all this, we provide our listeners with a unique feature that is rarely offered by competitors: the ability to enjoy all of this riveting content all without commercials or ads. We wanted to allow our users to be able to have a constant stream of uninterrupted access which is why we have implemented this outstanding aspect to our station. On GT Road FM, you will never have to worry about your pleasure being constantly cut off by unexciting, irrelevant ads that ruin your experience. We strive to establish ourselves as the future of Indo - NRI radio.</Text>
                    </View>
            </View>
    </ScrollView>
      </View>
  </ImageBackground>
</ImageBackground>
);




}
};


const styles = StyleSheet.create({
    containerx: {
      // flex:1,
      // alignContent:"center",
      // alignItems:"center"
    },
      container: {
        flex: 1,
        width: "90%",
        // justifyContent: "center",
        paddingTop: 20,
        maxHeight: (Dimensions.get("window").height * .706) -150,
      },
      container2:{  
        // paddingTop:50,
        // paddingBottom:40
          // borderBottomWidth: StyleSheet.hairlineWidth,
          // borderTopWidth: 0,
          // borderBottomColor: "rgba(158, 150, 150, .5);",
          // borderTopColor: "rgba(158, 150, 150, .5);",
          // paddingLeft:"5%",
          // marginBottom:"5%"
      },
      HeadingText:{
        fontSize: RFValue(24),
        color: "white",
        fontWeight: "600"
      },
      SubHeadingText:{
          fontSize:RFValue(15),
          color: "white",
          alignSelf:"center",
          
        textAlign: "justify",
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
        marginTop: 80,
        height : Dimensions.get("window").height * .806,
        width : Dimensions.get("window").width * 0.9,
        // alignContent:"center",
        alignSelf:"center"
      },
      image3: {
        resizeMode: "contain",
        height : 150,
        width : 150,
        marginTop: -200,
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
      images:{
          maxWidth:250,
          maxHeight:250,
          alignSelf:"center",
          resizeMode:"contain"
      },
      
    }
    );

export default AboutUs;