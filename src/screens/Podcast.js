import 'react-native-get-random-values';
import * as React from "react";
import {ScrollView , View, StyleSheet, Dimensions, Alert } from 'react-native';
import { WebView } from 'react-native-webview';

// import LandingScreen from '../../source/screens/PlaylistScreen';
 
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;


class PodcastWeb extends React.Component {
  componentDidMount(){
    // abc.abbbbb();
  }
  render(){
  return (
    <View style={{flex:1, alignItems: 'flex-end'}}>
    <WebView style={styles.webview}
   source={{uri: 'https://pod.co/gtroadfm'}}
   javaScriptEnabled={true}
   domStorageEnabled={true}
   startInLoadingState={false}
   scalesPageToFit={true} />
</View>

  );
  }
 
}



const styles = StyleSheet.create(
  {
    
    webview: {
      flex: 1,
      width: deviceWidth,
      height: deviceHeight
    }


  }
);
export default PodcastWeb;