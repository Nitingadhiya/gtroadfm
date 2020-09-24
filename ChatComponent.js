import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ActionConst, Actions, Router, Scene } from "react-native-router-flux";
import enterRoom from "./chat_src/components/enterRoom";
import chat from "./chat_src/components/chat";

export default class ChatComponent extends React.Component {
  componentDidMount(){
    if (Text.defaultProps == null) 
    Text.defaultProps = {}
    Text.defaultProps.allowFontScaling = false;

  }
  render() {
    return (
      <Router>
        <Scene key={"ROOT_SCENE"} panHandlers={null} passProps>
          <Scene
            key={"enterRoom"}
            component={enterRoom}
            hideNavBar
            type={ActionConst.RESET}
          />
          <Scene
            key={"chat"}
            component={chat}
            hideNavBar
            type={ActionConst.RESET}
          />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
