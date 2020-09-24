import 'react-native-get-random-values';
import * as React from "react";
import { WebView } from 'react-native-webview';


const PlayerHomeApp = () => {
  return (

    <>
    <WebView source={{ uri: 'https://pod.co/gtroadfm' }} />    
    </>
  );
}


export default PlayerHomeApp;