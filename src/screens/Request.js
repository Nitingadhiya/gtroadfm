import 'react-native-get-random-values';
import * as React from "react";
import {ScrollView , View, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { WebView } from 'react-native-webview';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const image = require('../../assets/Mask.png');

class Request extends React.Component {
  render(){
  return (
    <ImageBackground source={image} style={styles.image}>
      
    <View style={{flex:1, alignItems: 'flex-end'}}>
    <WebView style={styles.webview}
   source={{uri: 'https://public.radio.co/request/w91ece69.html'}}
   javaScriptEnabled={true}
   domStorageEnabled={true}
   startInLoadingState={false}
   scalesPageToFit={true} />
</View>
</ImageBackground>
  );
  }
 
}

const styles = StyleSheet.create(
  {
    
    webview: {
      flex: 1,
      width: deviceWidth,
      height: deviceHeight,
      backgroundColor:"#323D5B"
      
    },
    image: {
      flex: 1,
      // resizeMode: "center",
      justifyContent: "center",
      
      // resizeMethod: "resize",
    },


  }
);
export default Request;










// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     backgroundColor: "#F5FCFF", 
//     paddingLeft:20
//   },
//   description: {
//     width: "80%",
//     marginTop: 20,
//     textAlign: "center"
//   },
//   player: {
//     marginTop: 40
//   },
//   state: {
//     marginTop: 20
//   }
// });
