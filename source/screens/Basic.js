import * as React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

export const BUTTON_HEIGHT = 60;
export const BUTTON_WIDTH = 200;

const image = {uri: 'https://reactjs.org/logo-og.png'};

TrackPlayer.setupPlayer().then(async () => {
  await TrackPlayer.add({
    id: 'trackId',
    url: 'https://s3.radio.co/s4137c52f5/listen',
    title: 'Track Title',
    artist: 'Track Artist',
    artwork: require('../artwork/art.jpg'),
  });
});

let status = 1;
export default class Basic extends React.Component {
  componentWillMount() {
    // console.log('Render mount!');
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: undefined, height: 250}}
          marginTop={'20%'}
          resizeMode={'contain'}
          source={require('../../assets/FMlogo.png')}
        />
        <View paddingTop={'10%'} justifyContent="center" alignItems="center">
          {status == 1 ? (
            <TouchableOpacity
              alignSelf={'center'}
              alignContent={'center'}
              onPress={() => this.playMusic()}>
              <>
                <View style={styles.button}>
                  <Text style={styles.label}>
                    PLAY Radio &nbsp;
                    <Icons
                      name="play"
                      color={'white'}
                      size={22}
                      alignSelf={'center'}
                    />
                  </Text>
                </View>
              </>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              alignSelf={'center'}
              alignContent={'center'}
              onPress={() => this.pauseMusic()}>
              <>
                <View style={styles.button}>
                  <Text style={styles.label}>
                    Pause Radio &nbsp;
                    <Icons
                      name="pause"
                      color={'white'}
                      size={22}
                      alignSelf={'center'}
                    />
                  </Text>
                </View>
              </>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Request')}
            style={styles.paddingtop}>
            <View style={styles.button}>
              <Text style={styles.label}>
                Request a Song&nbsp;
                <Icons
                  name="music"
                  color={'white'}
                  size={22}
                  alignSelf={'center'}
                />
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  handleplaypause() {
    if (status == 1) {
      TrackPlayer.play();
      status = 2;
    } else if (status == 2) {
      TrackPlayer.pause();
      status = 1;
    }
  }

  playMusic() {
    TrackPlayer.play();
    status = 2;
  }

  pushMusic() {
    TrackPlayer.pause();
    status = 1;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
  },
  label: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
    fontWeight: '800',
  },
  paddingtop: {
    paddingTop: '5%',
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#FFC50B',
    borderRadius: 32,
    height: BUTTON_HEIGHT,
    width: BUTTON_WIDTH,
    justifyContent: 'center',
  },
  label: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
    fontWeight: '800',
  },
});
