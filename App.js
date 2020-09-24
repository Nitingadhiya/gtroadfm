import 'react-native-gesture-handler';

import React, {Component} from 'react';
import {AsyncStorage, Image, StyleSheet, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//components imports
import PodcastWeb from './src/screens/Podcast';
import MainMenu from './src/screens/MainMenu';
// import LiveChat from './src/screens/LiveChat';
import PrivacyPolicy from './src/screens/PrivacyPolicy';
import TermsAndConditions from './src/screens/TermsAndConditions';
import AboutUs from './src/screens/AboutUs';
import ContactUs from './src/screens/contactus';
import SignUp from './src/screens/signup';
import Login from './src/screens/login';
import Request from './src/screens/Request';
// import Slider from './src/screens/Slider';
import HomeScreen from './src/screens/HomeScreen';
//track player imports
// import LandingScreen from "./source/screens/LandingScreen";
import PlaylistScreen from './source/screens/PlaylistScreen';
// import Basic from "./source/screens/Basic";
import ChatComponent from './ChatComponent';
import Home1 from './Home1';

console.disableYellowBox = true;

// //kanjar code
// import RadioHome from './src/screens/RadioHome';

//variable for user, user login will be stored locally.
let user_data = {
  fname: '',
  lname: '',
  email: '',
  password: '',
  login: 'no',
};

var sizex = 26;
const logoImage2 = require('./assets/pod.png');

const Tab = createMaterialBottomTabNavigator();

const stack = createStackNavigator();

function PrimeStackNav() {
  return (
    <stack.Navigator
      initialRouteName="Login"
      // headerColor= "Transparent"
    >
      <stack.Screen
        name="Tabs"
        component={MyTabs}
        options={{header: () => null}}
      />

      <stack.Screen
        name="Privacy Policy"
        component={PrivacyPolicy}
        options={{
          headerBackTitle: '',
          title: 'Privacy Policy',
          headerStyle: {
            backgroundColor: '#323D5B',
            // alignContent:"center"
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center',
          },
          headerTitleContainerStyle: {
            left: 0, // THIS RIGHT HERE
          },
        }}
      />

      <stack.Screen
        name="Terms And Conditions"
        component={TermsAndConditions}
        options={{
          title: 'Terms and Conditions',
          headerBackTitle: '',
          headerStyle: {
            backgroundColor: '#323D5B',
            // alignContent:"center"
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center',
          },
          headerTitleContainerStyle: {
            left: 0, // THIS RIGHT HERE
          },
        }}
      />

      <stack.Screen
        name="About Us"
        component={AboutUs}
        options={{
          title: 'About Us',
          headerBackTitle: '',
          headerStyle: {
            backgroundColor: '#323D5B',
            // alignContent:"center"
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center',
          },
          headerTitleContainerStyle: {
            left: 0, // THIS RIGHT HERE
          },
        }}
      />

      <stack.Screen
        name="Contact Us"
        component={ContactUs}
        options={{
          headerBackTitle: '',
          title: 'Contact Us',
          headerStyle: {
            backgroundColor: '#323D5B',
            // alignContent:"center"
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center',
          },
          headerTitleContainerStyle: {
            left: 0, // THIS RIGHT HERE
          },
        }}
      />

      <stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          header: () => null,
          // headerBackTitle: "Menu",
        }}
      />

      <stack.Screen
        name="Login"
        component={Login}
        options={{
          header: () => null,
        }}
      />

      <stack.Screen
        name="Request"
        component={Request}
        options={{
          title: 'Request a song',
          headerStyle: {
            backgroundColor: '#323D5B',
            // alignContent:"center"
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center',
          },
          headerTitleContainerStyle: {
            left: 0, // THIS RIGHT HERE
          },
        }}
      />
      {/*     
      <stack.Screen
      
      name = "TrackPlay" 
      component = {PlaylistScreen}
      options={{ 
        // header: () => null
        headerBackTitle: "Main Menue",
      }}
    />
    <stack.Screen
      
      name = "Basic" 
      component = {Basic}
      options={{ 
        // header: () => null
        headerBackTitle: "Main Menu",
      }}
    />  
    
    */}
    </stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Slider"
      barStyle={{backgroundColor: '#3A4667'}}
      labeled="false"
      tabBarOptions={{
        header: 'null',
        activeTintColor: '#ffffff',
        inactiveTintColor: '#ffffff',
        inactiveBackgroundColor: '#3A4667',
        activeBackgroundColor: '#3A4667',
        labeled: 'false',
      }}>
      <Tab.Screen
        name="PlaylistScreen"
        component={PlaylistScreen}
        options={{
          tabBarLabel: '',
          labeled: 'false',
          // tabBarColor: "#ffff",
          tabBarIcon: ({focused, color, size}) =>
            // <MaterialCommunityIcons name="podcast" color={color} size={sizex} />

            focused ? (
              <Image
                source={require('./assets/radio.png')}
                style={[styles.image3]}
              />
            ) : (
              <Image
                source={require('./assets/radio-inactive.png')}
                style={[styles.image3]}
              />
            ),
        }}
      />

      <Tab.Screen
        name="MusicPlayer"
        component={PodcastWeb}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused, color, size}) =>
            // <MaterialCommunityIcons name="podcast" color={color} size={sizex} />

            focused ? (
              <Image
                source={require('./assets/pod.png')}
                style={[styles.image3]}
              />
            ) : (
              <Image
                source={require('./assets/pod-inactive.png')}
                style={[styles.image3]}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Slider"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused, color, size}) =>
            // <MaterialCommunityIcons name="podcast" color={color} size={sizex} />

            focused ? (
              <Image
                source={require('./assets/globe.png')}
                style={[styles.image3]}
              />
            ) : (
              <Image
                source={require('./assets/globe-inactive.png')}
                style={[styles.image3]}
              />
            ),
        }}
      />
      <Tab.Screen
        name="LiveChat"
        component={ChatComponent}
        initialParams="Name"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused, color, size}) =>
            // <MaterialCommunityIcons name="podcast" color={color} size={sizex} />

            focused ? (
              <Image
                source={require('./assets/chat.png')}
                style={[styles.image3]}
              />
            ) : (
              <Image
                source={require('./assets/chat-inactive.png')}
                style={[styles.image3]}
              />
            ),
        }}
      />

      <Tab.Screen
        name="Menu"
        component={MainMenu}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused, color, size}) =>
            // <MaterialCommunityIcons name="podcast" color={color} size={sizex} />

            focused ? (
              <Image
                source={require('./assets/menu.png')}
                style={[styles.image3]}
              />
            ) : (
              <Image
                source={require('./assets/menu-inactive.png')}
                style={[styles.image3]}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

class App extends Component {
  checkIfLogggedIn() {
    var item = AsyncStorage.getItem('User_data', (err, result) => {
      if (result == null) {
        // console.log("i am here");
        AsyncStorage.setItem('User_data', JSON.stringify(user_data));
        return true;
      }
    });
  }
  async componentDidMount() {
    this.checkIfLogggedIn();
    if (Text.defaultProps == null) Text.defaultProps = {};
    Text.defaultProps.allowFontScaling = false;
  }

  render() {
    return (
      <NavigationContainer>
        <PrimeStackNav />
      </NavigationContainer>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  image3: {
    width: 26,
    height: 26,
    resizeMode: 'contain',
  },
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////
