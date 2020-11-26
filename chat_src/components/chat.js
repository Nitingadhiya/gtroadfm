import React, { Component } from "react";
import { GiftedChat, Bubble , Send} from "react-native-gifted-chat";
import { ActionConst, Actions } from "react-native-router-flux";
import {
    View,
    Text,
    Platform,
    PermissionsAndroid,
    Dimensions,
    ActivityIndicator,
    Alert,
    KeyboardAvoidingView, 
    StyleSheet,
    SafeAreaView,
    Keyboard
} from "react-native";
import { AudioRecorder, AudioUtils } from "react-native-audio";
import propTypes from "prop-types";
import _ from 'lodash'
import database from '@react-native-firebase/database';



import { RNS3 } from "react-native-aws3";

import Ionicons from "react-native-vector-icons/Ionicons";
// import Sound from "react-native-sound";

import SoundPlayer , {getInfo} from 'react-native-sound-player'

import { firebaseDB } from "../config/FirebaseConfig";
import NavigationBar from "react-native-navbar";
import AwsConfig from "../config/AwsConfig";
import UserAvatar from 'react-native-user-avatar';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import LinearGradient from 'react-native-linear-gradient';
// import {useNetInfo} from "@react-native-community/netinfo";
import { TouchableOpacity } from "react-native-gesture-handler";
// import * as Progress from 'react-native-progress';
import AsyncStorage from '@react-native-community/async-storage';


// const ImagePicker = require("react-native-image-picker");

let xyz = true;
const {width, height} = Dimensions.get('window')


export default class Chat extends Component {
    // checknet = useNetInfo();
    _onFinishedLoadingURLSubscription = null;
    _onFinishedPlayingSubscription = null;
    // _onFinishedPlayingSubscription = null;
    sound = null;
    playingAudioMessage_id = "";
    playAudio2 = false;
    audioduration = 0;
    // color = "blue";
    static propTypes = {
        user: propTypes.object,
    };
    state = {
        messages: [],
        startAudio: false,
        hasPermission: false,
        audioPath: `${
            AudioUtils.DocumentDirectoryPath
            }/${this.messageIdGenerator()}test.aac`,
        playAudio: false,
        name: "play-circle-outline",
        audioMsg_id: "",
        barProgress : 0,
        isPlaying: false,
        fetchChats: false,
        color : "blue",
        audioSettings: {
            SampleRate: 22050,
            Channels: 1,
            AudioQuality: "Low",
            AudioEncoding: "aac",
            MeteringEnabled: true,
            IncludeBase64: true,
            AudioEncodingBitRate: 32000
        },
        disabledChatTextBox: false,
        keyboardShow: false
    };

    async checkExistsUserID(){
        const userData = await AsyncStorage.getItem('User_data');
        console.log(userData);
        const dataParse = JSON.parse(userData);
        const email = _.get(dataParse,'email','');
        console.log(email,'emamm')
        database()
        .ref(`/users`)
        .on('value', snapshot => {
          console.log('User data: ', snapshot.val());
          const record = snapshot.val();
            const valueRecord = _.find(record,{ email :  email});
            if(valueRecord && !valueRecord.status) {
                this.setState({
                    disabledChatTextBox: true
                })
              console.log('value')
            } else {
                this.setState({
                    disabledChatTextBox: false
                })
            }
        });
      }

    componentWillMount() {
        Keyboard.addListener("keyboardDidShow", this._keyboardDidShow);
        Keyboard.addListener("keyboardDidHide", this._keyboardDidHide);
      this.checkExistsUserID();
        // console.log(AwsConfig, "awsconfig")
        // console.log(this.props, "chat props *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-")
        this.chatsFromFB = firebaseDB.ref(`/chat/${this.props.user.roomName}`);
        // console.log(this.chatsFromFB, "chats from fb")
        this.chatsFromFB.on("value", snapshot => {
            // console.log(snapshot.val(), "snap shot")
            if (!snapshot.val()) {
                this.setState({
                    fetchChats: true
                });
                return;
            }
            let { messages } = snapshot.val();
            messages = messages.map(node => {
                // console.log(node, "node")
                const message = {};
                message._id = node._id;
                message.text = node.messageType === "message" ? node.text : "";
                message.createdAt = node.createdAt;
                message.user = {
                    _id: node.user._id,
                    name: node.user.name,
                    avatar: node.user.avatar
                };
                message.image = node.messageType === "image" ? node.image : "";
                message.audio = node.messageType === "audio" ? node.audio : "";
                message.messageType = node.messageType;
                return message;
            });
            // console.log(messages , "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")
            this.setState({
                messages: [...messages]
            });
        });
    }
    componentDidMount() {
        this.checkPermission().then(async hasPermission => {
            this.setState({ hasPermission });
            if (!hasPermission) return;
            await AudioRecorder.prepareRecordingAtPath(
                this.state.audioPath,
                this.state.audioSettings
            );
            AudioRecorder.onProgress = data => {
                // console.log(data, "onProgress data");
            };
            AudioRecorder.onFinished = data => {
                // console.log(data, "on finish");
            };
        });
    }
    componentWillUnmount() {
        Keyboard.removeListener("keyboardDidShow", this._keyboardDidShow);
        Keyboard.removeListener("keyboardDidHide", this._keyboardDidHide);
        this.setState({
            messages: []
        });
        if(this._onFinishedLoadingURLSubscription)
            this._onFinishedLoadingURLSubscription.remove();
        if(this._onFinishedPlayingSubscription)
            this._onFinishedPlayingSubscription.remove();
    // this._onFinishedPlayingSubscription.remove();
    }

    _keyboardDidShow = async () => {
        await this.setState({
            keyboardShow: true
        })
        //alert("Keyboard Shown");
      };

      _keyboardDidHide = async () => {
        await this.setState({
            keyboardShow: false
        })
        //alert("Keyboard Hidden");
      };

    checkPermission() {
        if (Platform.OS !== "android") {
            return Promise.resolve(true);
        }
        const rationale = {
            title: "Microphone Permission",
            message:
                "GT ROAD FM needs access to your microphone so you can record audio."
        };
        return PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
            rationale
        ).then(result => {
            // console.log("Permission result:", result, "**************************//////////////////////////////***********************************");
            return result === true || result === PermissionsAndroid.RESULTS.GRANTED;
        });
    }
    onSend(messages = []) {
        messages[0].messageType = "message";
        this.chatsFromFB.update({
            messages: [messages[0], ...this.state.messages]
        });
    }
    renderName = props => {
        const { user: self } = this.props; // where your user data is stored;
        const { user = {} } = props.currentMessage;
        const { user: pUser = {} } = props.previousMessage;
        const isSameUser = pUser._id === user._id;
        const isSelf = user._id === self._Id;
        const shouldNotRenderName = isSameUser;
        let firstName = user.name.split(" ")[0];
        let lastName = user.name.split(" ")[1][0];
        return shouldNotRenderName ? (
            <View />
        ) : (
                <View>
                    <Text style={{ color: "grey", padding: 2, alignSelf: "center" }}>
                        {`${firstName} ${lastName}.`}
                    </Text>
                </View>
            );
    };
    // animate () {
    //     let progress = 0;
    //     this.setState({ barProgress : progress});
    //     setTimeout(() => {
    //     //   this.setState({ indeterminate: false });
    //       setInterval(() => {
    //         progress += Math.random() / 5;
    //         if (progress > 1) {
    //           progress = 1;
    //         }
    //         this.setState({ barProgress : progress});
    //       }, 500);
    //     }, 1500);
    
    // }

    
      renderAudio = props => {
        return !props.currentMessage.audio ? (
            <View />
        ) : (
            <>
            {/* <YourComponent /> */}
                        {/* // <TouchableOpacity onPress={()=> {alert("hello");}}><Text>pllllllllll</Text></TouchableOpacity> */}
            
            {xyz? (
            
            <View>
                {/* <Text> {props.currentMessage.audio.getDuration}</Text> */}
                
         <View style= {styles.audioMesageContainerStyles}>
             {/* <Text style={styles.textstyles} >Audio Message</Text>
              */}
              {/* <View  alignContent={"center"} justifyContent={"center"}><Progress.Bar progress={this.state.barProgress} width={100} height={3} color={"#f7f7f7"} margin={0} /></View> */}
                
                
                <MaterialCommunityIcons
                    name={this.state.playAudio && (this.state.audioMsg_id.toString() === props.currentMessage._id.toString()) ? this.state.name: this.state.name }
                    size={35}
                    color={"white"}
            
                     onPress={ () => {
                        //  console.log(props.currentMessage.audio);
                        const sdsd = props.currentMessage._id.toString();
                        
                        this.playingAudioMessage_id= sdsd;
                         

                        // console.log(props.currentMessage._id,this.playingAudioMessage_id, this.playingAudioMessage_id === props.currentMessage._id && this.playAudio2 ,  "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
                       
                        if(!this.state.playAudio)
                        {
                             this.setState({
                                playAudio: true,
                                // color:"red",
                                name: "pause-circle-outline",
                                audioMsg_id: sdsd,
                                barProgress:0
                            });
                            this.playAudio2 = true;
                            // console.log(props.currentMessage._id,this.playingAudioMessage_id, (this.playingAudioMessage_id.toString() === props.currentMessage._id.toString()) && this.state.playAudio ,  ">>.>.>.>.>.>.>.>.>>.>.>.>.>.>.>.>>.>.>.>.>.>.>.>.>.>.>.>.>>>>>>>>>>>");
                            this._onFinishedPlayingSubscription = SoundPlayer.addEventListener('FinishedPlaying', ({ success }) => {
                                this.setState({
                                    playAudio: false,
                                    // color:"red",
                                    name: "play-circle-outline",
                                    audioMsg_id: "",
                                    barProgress:0
                                });
                                SoundPlayer.stop();

                                // console.log(this.state.playAudio && (this.state.audioMsg_id.toString() === props.currentMessage._id.toString()) , " Finished playing");
                              });
                            this._onFinishedLoadingURLSubscription = SoundPlayer.addEventListener('FinishedLoadingURL', ({ success, url }) => {
                                // console.log('finished loading url', success, url);
                                let duration, currentTime =0;
                                // let data;
                                let info = SoundPlayer.getInfo().then(data =>{
                                    // console.log(data, "dsdsdsds");
                                    duration = data["duration"];
                                    currentTime = data["currentTime"];
                                    // console.log(duration,"{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}", currentTime);
                                }).catch((error) => {
                                    console.error(error);
                                  });
                              
                                SoundPlayer.play();
                 

                              });

                              this._onFinishedPlayingSubscription = SoundPlayer.addEventListener('FinishedPlaying', ({ success }) => {
                                this.audioduration = 0;
                                this.setState({ playAudio: false , playingAudioMessage_id :"", color: "blue",  name: "play-circle-outline" , audioMsg_id: "",barProgress:0});
                                
                              })

                
                            
                               SoundPlayer.loadUrl(props.currentMessage.audio);                           
                        }
                        else{
                            // console.log("stopping ", "this.state.playAudio", this.state.playAudio , "]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]");
                            this.setState({ playAudio: false , playingAudioMessage_id :"", color: "blue",  name: "play-circle-outline" , audioMsg_id: "",barProgress:0});
                            SoundPlayer.stop(success => {
                                if(success){
                                    // console.log("successfully stopped", "{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}");
                                }
                            });
                            // this.sound= null;
                            
                           
                            this.playingAudioMessage_id =""; 
                            this.playAudio2 = false;
                        }
 
                    }}
                >
                
                </MaterialCommunityIcons>
            </View>
            </View>):(<View/>)}
            </>
            );
    };
    renderBubble = props => {
        return (
            <View>
                {this.renderName(props)}
                {/* {this.renderAudio(props)} */}
                <Bubble {...props} 
                textStyle={{

                    right: {
                      color: "white"
                    },
                    left: {
                      color: "white"
                    }
                    
                  }}
                  // containerStyle={{backgroundColor: '#black' }}
                  wrapperStyle={{
                    right: {
                      backgroundColor: "#537BFF"
                    },
                    left:{
                      backgroundColor: "#F5639E"
                    }
                  }}
                
                
                />
            </View>
        );
    };

    handleAvatarPress = props => {
        // add navigation to user's profile
    };
    handleAudio = async () => {
        // console.log("audio handle((((((((((((((((((((((((((((((((((((((((((((((((((((");
        const { user } = this.props;
        if (!this.state.startAudio) {
            // console.log("audio recording started ***********************************");
            this.setState({
                startAudio: true
            });
            await AudioRecorder.prepareRecordingAtPath(
                this.state.audioPath,
                this.state.audioSettings
            );
            await AudioRecorder.startRecording();
        } else {
            // console.log("audio recording stoped!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
            this.setState({ startAudio: false });
            await AudioRecorder.stopRecording();
            const { audioPath } = this.state;
            const fileName = `${this.messageIdGenerator()}.aac`;
            const file = {
                uri: Platform.OS === "ios" ? audioPath : `file://${audioPath}`,
                name: fileName,
                type: `audio/aac`
            };
            const options = {
                keyPrefix: AwsConfig.keyPrefix,
                bucket: AwsConfig.bucket,
                region: AwsConfig.region,
                accessKey: AwsConfig.accessKey,
                secretKey: AwsConfig.secretKey,
            };


            RNS3.put(file, options)
                .progress(event => {
                    // console.log(`percent: ${event.percent}`);
                })
                .then(response => {
                    // console.log("audio recording oploading-----------------------------------------------");
                    // console.log(response, "response from rns3 audio");
                    if (response.status !== 201) {
                        alert("Something went wrong, and the audio was not uploaded.############################################");
                        console.error(response.body);
                        return;
                    }
                    const message = {};
                    message._id = this.messageIdGenerator();
                    message.createdAt = Date.now();
                    message.user = {
                        _id: user._id,
                        name: `${user.firstName} ${user.lastName}`,
                        avatar: user.avatar
                    };
                    message.text = "";
                    message.audio = response.headers.Location;
                    message.messageType = "audio";

                    this.chatsFromFB.update({
                        messages: [message, ...this.state.messages]
                    });
                })
                .catch(err => {
                    // console.log(err, "err from audio upload");
                });
        }
    };
    messageIdGenerator() {
        // generates uuid.
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
            let r = (Math.random() * 16) | 0,
                v = c == "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }
    sendChatToDB(data) {
        // send your chat to your db
    }
    
    renderAndroidMicrophone() {
        const {disabledChatTextBox} = this.state;
        if(disabledChatTextBox) { return null;}
        if (Platform.OS === "android") {
            return (
                // <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={[color1,color1, color2 ]} style={styles.linearGradient}>
                
                <MaterialCommunityIcons
                    name="microphone"
                    size={35}
                    hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
                    color={this.state.startAudio ? "red" : "white"}
                    style={{
                        bottom: 10,
                        // right: Dimensions.get("window").width / 2,
                        position: "absolute",
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 0 },
                        shadowOpacity: 0.5,
                        zIndex: 2,
                        backgroundColor: "transparent"
                    }}
                    onPress={this.handleAudio}
                />
                // </LinearGradient>

            );
        }
    }
    renderLoading() {
        if (!this.state.messages.length && !this.state.fetchChats) {
            return (
                <View style={{ marginTop: 100 }}>
                    <ActivityIndicator color="black" animating size="large" />
                </View>
            );
        }
    }
    renderAvatar = props =>{
        const { user = {} } = props.currentMessage;
        let firstName = user.name;
        return (
            <UserAvatar size={32} name={firstName} bgcolors={['#4F5B7E', '#E8891C', '#00FFFF']}/>
        );

    }

    renderViewStyle = ()=>{
   // return this.state.keyboardShow ? 0 : 40;
    }

    render() {
        const { user } = this.props; // wherever you user info is
        // const disable = false;
        // console.log('chat render |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||', user, 'chat render |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||');
        const {disabledChatTextBox} = this.state;
        return (
            
            <SafeAreaView style={{ flex: 1, backgroundColor: '#323D5B' }}>
                {/* <NavigationBar
                    title={{ title: "chat" , tintColor: "white"}}
                    tintColor="3A4667"
                    statusBar = {{hidden:true}}
                    backgroundColor={ "3A4667"}
                    // rightButton={rightButtonConfig}
                /> */}
                {this.renderLoading()}
                {this.renderAndroidMicrophone()}
             <KeyboardAvoidingView style={{ flex: 1}}>
                <GiftedChat
                    messages={this.state.messages}
                    onSend={messages => this.onSend(messages)}
                    //minInputToolbarHeight={50}
                //    renderChatFooter={()=> !disabledChatTextBox? <View style={{ height: this.renderViewStyle(), backgroundColor: '#323D5B'}} /> : null}
                //     renderInputToolbar={disabledChatTextBox ? () => null : undefined}
                    alwaysShowSend
                    showUserAvatar
                    isAnimated
                    showAvatarForEveryMessage
                    isKeyboardInternallyHandled={true}
                    renderAvatar = {this.renderAvatar}
                    renderBubble={this.renderBubble}
                    messageIdGenerator={this.messageIdGenerator}
                    onPressAvatar={this.handleAvatarPress}
                    renderMessageAudio = {this.renderAudio}
                    textInputStyle = {{color:'white', paddingLeft:30}}
                    containerStyle={{backgroundColor: '#3A4667', }}
                    placeholderTextColor="white"
                    isCustomViewBottom={true}
                   bottomOffset={ Platform.OS == 'ios' && ( height > 893 ? 30 : 1)}
                    listViewProps = {
                        {backgroundColor: '#323D5B'} 
                    }
                    
                    renderSend = {(props)=>{
                        return(
                            <Send
                            {...props}
                            style={{ backgroundColor:"blue"}}
                        >
                            <MaterialCommunityIcons
                                name="send"
                                size={26}
                                color={"white"}
                                style={{  padding:10}}
                                /> 
                        </Send>
                        );
                    }}
                    renderActions={() => {
                        if (Platform.OS === "ios") {
                            return (
                                <Ionicons
                                    name="ios-mic"
                                    size={35}
                                    hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
                                    color={this.state.startAudio ? "red" : "white"}
                                    style={{
                                        bottom: 0,
                                        paddingLeft:10,
                                        paddingBottom:0,
                                        // right: Dimensions.get("window").width / 2,
                                        position: "absolute",
                                        shadowColor: "#000",
                                        shadowOffset: { width: 0, height: 0 },
                                        shadowOpacity: 0.5,
                                        zIndex: 2,
                                        backgroundColor: "transparent"
                                    }}
                                    onPress={this.handleAudio}
                                />
                            );
                        }
                    }}
                    user={{
                        _id: user._id,
                        name: `${user.firstName} ${user.lastName}`,
                        avatar: user.avatar
                    }}
                />
                {/* <KeyboardAvoidingView behavior={'padding'} /> */}
                </KeyboardAvoidingView>
            </SafeAreaView>
            
        );
    }
}
var color1 = "#FFA7E0";
var color2 =  "#8692FF";
var color3 = "#58FBAA";
var color4 =  "#3BB2B8";

const YourComponent = () => {
    // const netInfo = useNetInfo();
  
    return (
    <>
        {/* {netInfo.type == "celular"?xyz=false: xyz=true} */}
        <Text>Type</Text>
        </>
    );
  };

const styles = StyleSheet.create({
    microphonestyles:{
        bottom: 50,
        right: Dimensions.get("window").width / 2,
        position: "absolute",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        zIndex: 2,
        // backgroundColor: "transparent"
    },
    
    linearGradient:{
        right: Dimensions.get("window").width / 2,
        position: "absolute",
    },
    textstyles:{
        padding:10,
        fontSize: 15,
        color:"white"
    },
    audioMesageContainerStyles:{
        flexDirection: "row",
        // flex:1
        // alignContent:"center",
        // justifyContent:"center",
        margin:10,
        marginTop:5,
        marginBottom:0

    }




});
