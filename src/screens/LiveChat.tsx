import * as React from "react";
import {AsyncStorage , View, StyleSheet} from 'react-native';
  
// @flow
import { GiftedChat , Bubble ,Composer  } from 'react-native-gifted-chat'; // 0.3.0

import Fire from './Fire';

let user_data = {
  fname:'',
  lname:'',
  email: '',
  password:'',
  login: 'no'

};


type Props = {
  name?: string,
};




const styles = StyleSheet.create({
  container: {
   backgroundColor: "#323D5B"
  }
});




export default class LiveChat extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: (navigation.state.params || {}).name || 'Chat!',
  });

  

  state = {
    messages: [],
  };

  get user() {
    return {
      // name: this.props.navigation.state.params.name,
      
      name: user_data.email,
      _id: Fire.shared.uid,
    };
  }

 
  renderBubble (props) {
    return (
      <Bubble
        {...props}
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
    )
  }
  render() {
    return (
      // <View style = {styles.container }>
      <GiftedChat
        messages={this.state.messages}
        onSend={Fire.shared.send}
        user={this.user}
        renderBubble={this.renderBubble}
        // renderComposer={this.renderComposer}
        isTyping = {true}
        containerStyle={{backgroundColor: '#3A4667' }}
        placeholderTextColor="#fff"
        listViewProps = {
          {backgroundColor: '#323D5B'} 
        }
        // containerBackgroundcolor = "#323D5B"
      />
      // </View>
    );
  }

  componentDidMount() {

    Fire.shared.on(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    );


    var item= AsyncStorage.getItem('User_data', (err, result) => {
      // console.log("------------------");
      // console.log(result);
      if(result != null){
        //this means its logged in 
        let r2 =JSON.parse(result);
        // console.log(r2['email']);
        if(r2['email'] != '')
          user_data.email = r2['email'];
          user_data.password = r2['password'];
          user_data.login = r2['login'];
          // console.log(user_data);
      }
      else return false;
    
    
  });   

  }
  componentWillUnmount() {
    Fire.shared.off();
        
  
  }
}

  

