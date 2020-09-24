import React, { Component } from 'react';
import { View, StyleSheet, Button, Alert, Platform } from 'react-native';
import { Constants, Notifications} from 'expo';
import { Permissions } from 'expo-permissions';

async function getiOSNotificationPermission() {
  const { status } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  if (status !== 'granted') {
    await Permissions.askAsync(Permissions.NOTIFICATIONS);
  }
}

export default class Noti extends Component {
  _handleButtonPress = () => {
    const localnotification = {
      title: 'Example Title!',
      body: '<View style={styles.container}><Button title="Send a notification in 5 seconds!" onPress={this._handleButtonPress}/></View>',
      android: {
        sound: true,
      },
      ios: {
        sound: true,
      },
    };
    let sendAfterFiveSeconds = Date.now();
    sendAfterFiveSeconds += 5000;

    const schedulingOptions = { time: sendAfterFiveSeconds };
    Notifications.scheduleLocalNotificationAsync(
      localnotification,
      schedulingOptions
    );
  };
  listenForNotifications = () => {
    Notifications.addListener(notification => {
      if (notification.origin === 'received' && Platform.OS === 'ios') {
        Alert.alert(notification.title, notification.body);
      }
    });
  };
  componentWillMount() {
    getiOSNotificationPermission();
    this.listenForNotifications();
  }
  render() {
    return (
      <View style={styles.container}>

        <Button
          title="Send a notification in 5 seconds!"
          onPress={this._handleButtonPress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: '#ecf0f1',
  }
});
