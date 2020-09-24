import 'react-native-get-random-values';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  Modal,
} from 'react-native';
import TrackPlayer, {usePlaybackState} from 'react-native-track-player';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import LinearGradient from 'react-native-linear-gradient';
import {WebView} from 'react-native-webview';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import ReligionSong from './religion-playlistScreen';
import {
  ScrollView,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

const BUTTON_HEIGHT = RFValue(60);
const BUTTON_WIDTH = RFValue(200);

const image = require('../../assets/Mask.png');
const image2 = require('../../assets/Group-250.png');

var color1 = '#FFA7E0';
var color2 = '#8692FF';
var color3 = '#58FBAA';
var color4 = '#3BB2B8';

const pauseColor1 = '#4EC3FF';
const pauseColor2 = '#1C6FCE';
const playColor1 = '#F54EA2';
const playColor2 = '#FF7676';

var deviceHeight = Dimensions.get('window').height;

const {width, height} = Dimensions.get('window');

var playingsong = '';

export default function LandingScreen({navigation}) {
  const [songName, setSongName] = useState();
  const playbackState = usePlaybackState();
  const [modalVisible, setModalVisible] = useState(false);
  const [trackImage, setAutoTrackImage] = useState();

  //needed to initialize trackplayer
  useEffect(() => {
    TrackPlayer.setupPlayer();

    setSongName('Loading ...');
    // setInterval(() => {
    getSOngName();
    // }, 10000);

    TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        // TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
        // TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
        TrackPlayer.CAPABILITY_STOP,
      ],
      compactCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
      ],
    });

    return function cleanup() {
      if (playbackState == '3' || playbackState == 'playing') {
        TrackPlayer.pause();
        // playbackState = usePlaybackState();
        // console.log("pausing", playbackState);
        // console.log(getStateName(playbackState));
      }
    };
    // return () => {console.log('Component will unmount');}
  }, []);

  async function togglePlayback() {
    if (global.playbackTrack != 'local-track') {
      await TrackPlayer.reset();
    }
    global.playbackTrack = 'local-track';
    const currentTrack = await TrackPlayer.getCurrentTrack();
    if (
      currentTrack == null ||
      playbackState == '0' ||
      playbackState == 'none'
    ) {
      await TrackPlayer.reset();

      await TrackPlayer.add({
        id: 'local-track',
        url: 'https://s3.radio.co/s4137c52f5/listen?.mp3',
        title: 'GT ROAD',
        artist: 'FM Radio',
        artwork:
          'https://static.wixstatic.com/media/2a729d_83bb55a9bb0b4dd8b24646c7079e3be2~mv2_d_3600_3747_s_4_2.png/v1/fill/w_140,h_142,al_c,q_85,usm_0.66_1.00_0.01/FM%20logo.webp',
      });
      setModalVisible(true);

      await TrackPlayer.play();
      //  playbackState = usePlaybackState();
      //  console.log(" yyyyy playing", playbackState, getStateName());
      //  console.log(getStateName(playbackState));
    } else {
      // console.log("xxxx", playbackState, getStateName(),"xxxx" ,TrackPlayer.STATE_CONNECTING, TrackPlayer.STATE_NONE ,TrackPlayer.STATE_PLAYING , TrackPlayer.STATE_PAUSED, TrackPlayer.STATE_STOPPED, TrackPlayer.STATE_BUFFERING, TrackPlayer.STATE_READY);
      // playbackState = usePlaybackState();

      if (
        playbackState == '2' ||
        playbackState == '6' ||
        playbackState == 'paused' ||
        playbackState == 'ready' ||
        playbackState === 'stoped'
      ) {
        setModalVisible(true);

        await TrackPlayer.play();
        // playbackState = usePlaybackState();
        // console.log("zzzzz playing2", playbackState);
      } else if (playbackState == '3' || playbackState == 'playing') {
        await TrackPlayer.pause();
        // playbackState = usePlaybackState();
        // console.log("aaaaa pausing", playbackState);
        // console.log(getStateName(playbackState));
      }
    }
  }

  async function PausefromPodcastPage() {
    const currentTrack2 = await TrackPlayer.getCurrentTrack();
    if (currentTrack2 != null) {
      if (playbackState === TrackPlayer.STATE_PLAYING) {
        await TrackPlayer.pause();
      } else {
        console.log('oneee');
      }
    } else console.log('two');
  }

  async function getSOngName() {
    try {
      let response = await fetch(
        'https://public.radio.co/stations/s4137c52f5/status',
      );
      let json = await response.json();
      console.log(
        json,
        '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@',
      );
      // let json2 = await jsonx.json();
      playingsong = json.current_track.title.toString();
      setSongName(playingsong);
      if (json.current_track) {
        const image = json.current_track.artwork_url_large;
        console.log(image, 'image');
        setAutoTrackImage(image);
      }

      // console.log(json.current_track.title , "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
      // return ;
      // return json.movies;
    } catch (error) {
      console.error(error);
    }
  }

  checkPlayPauseCondition = () => {
    if (
      global.playbackTrack == 'local-track' &&
      (playbackState == '3' || playbackState == 'playing')
    ) {
      return true;
    }
    return false;
  };

  renderLinerColorCode = () => {
    if (checkPlayPauseCondition()) {
      return [pauseColor1, pauseColor2];
    }
    return [playColor1, playColor2];
  };

  renderPlayPauseButton = () => {
    return (
      <View style={{height: 40, width: 100}}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={renderLinerColorCode()}
          style={{
            height: 40,
            width: 100,
            borderRadius: 20,
          }}>
          <TouchableOpacity
            onPress={togglePlayback}
            style={{
              height: 40,
              width: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {checkPlayPauseCondition() ? (
              <Text style={styles.pausePlayText}>Pause</Text>
            ) : (
              <Text style={styles.pausePlayText}>Play</Text>
            )}
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  };

  renderModalView = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setModalVisible(!modalVisible)}>
          <View style={styles.modalMainView}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => console.log('disable')}>
              <View style={styles.subModalView}>
                <View style={styles.trackImageModalView}>
                  {trackImage ? (
                    <Image
                      source={{
                        uri: trackImage,
                      }}
                      style={styles.imageStyle}
                      resizeMode={'cover'}
                    />
                  ) : null}
                  <View style={styles.contentModal}>
                    <Text style={styles.songNameText} numberOfLines={2}>
                      {songName}
                    </Text>
                    <View style={styles.playPauseButtonView}>
                      {renderPlayPauseButton()}
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <ImageBackground source={image} style={styles.bgimage}>
      <ScrollView>
        <View style={styles.container}>
          <Image
            style={styles.topImage}
            resizeMode={'contain'}
            source={require('../../assets/FMlogo.png')}
          />
          <View paddingTop={'0%'} styles={styles.leftCont}>
            <TouchableOpacity
              alignSelf={'left'}
              alignContent={'center'}
              style={{width: '80%'}}
              onPress={togglePlayback}>
              <>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={[color1, color2]}
                  style={styles.linearGradient}>
                  <View style={styles.button}>
                    {global.playbackTrack == 'local-track' &&
                    (playbackState == '3' || playbackState == 'playing') ? (
                      <View style={styles.textStyles}>
                        <Icons
                          name="pause"
                          color={'white'}
                          size={50}
                          alignSelf={'center'}
                        />
                        <Text style={styles.label}>&nbsp;Pause Radio </Text>
                      </View>
                    ) : (
                      <View style={styles.textStyles}>
                        <Icons
                          name="microphone"
                          color={'white'}
                          size={50}
                          alignSelf={'center'}
                        />
                        <Text style={styles.label}>&nbsp;Play Radio </Text>
                      </View>
                    )}
                  </View>
                </LinearGradient>
              </>
            </TouchableOpacity>

            {global.playbackTrack == 'local-track' &&
            (playbackState == '3' || playbackState == 'playing') ? (
              <View style={{marginHorizontal: 10}}>
                <Text style={styles.songStyles}>Playing: {songName} </Text>
              </View>
            ) : (
              <View />
            )}

            <TouchableOpacity
              onPress={() => navigation.navigate('Request')}
              style={styles.paddingtop}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={[color3, color3, color4]}
                style={styles.linearGradient2}>
                <View style={styles.button2}>
                  <View style={styles.textStyles}>
                    <Text style={styles.label2}>Request a Song &nbsp;</Text>
                    <Icons
                      name="music-note"
                      color={'white'}
                      size={50}
                      alignSelf={'center'}
                    />
                  </View>
                </View>
              </LinearGradient>
            </TouchableOpacity>

            <ReligionSong />
          </View>
        </View>

        {renderModalView()}
      </ScrollView>
    </ImageBackground>
  );
}

LandingScreen.navigationOptions = {
  title: 'GT ROAD FM ',
};
async function handlePlayPause() {
  if (playbackState === TrackPlayer.STATE_PAUSED) {
    await TrackPlayer.play();
  } else {
    await TrackPlayer.pause();
  }
}

function getStateName(state) {
  switch (state) {
    case TrackPlayer.STATE_NONE:
      return 'None';
    case TrackPlayer.STATE_PLAYING:
      return 'Playing';
    case TrackPlayer.STATE_PAUSED:
      return 'Paused';
    case TrackPlayer.STATE_STOPPED:
      return 'Stopped';
    case TrackPlayer.STATE_BUFFERING:
      return 'Buffering';
  }
}

async function skipToNext() {
  try {
    await TrackPlayer.skipToNext();
  } catch (_) {}
}

async function skipToPrevious() {
  try {
    await TrackPlayer.skipToPrevious();
  } catch (_) {}
}

const styles = StyleSheet.create({
  songStyles: {
    flexDirection: 'row',
    alignSelf: 'center',
    color: 'white',
    fontSize: 20,
    paddingTop: 12, //better option than this
    fontWeight: '700',
  },
  alignCenter: {
    textAlign: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  textStyles: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
  },
  label: {
    color: 'white',
    fontSize: 25,
    paddingTop: 12, //better option than this
    fontWeight: '700',
  },
  paddingtop: {
    paddingTop: '5%',
    alignSelf: 'flex-end',
    width: '80%',
  },
  button: {
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
    height: deviceHeight * 0.1317,
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  button2: {
    height: deviceHeight * 0.1317,
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  label2: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: '700',
    paddingTop: 12,
  },

  player: {
    marginTop: 20,
  },
  state: {
    marginTop: 20,
  },
  bgimage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  leftCont: {
    // alignItems: "left"
  },
  topImage: {
    width: RFValue(160),
    height: RFValue(160),
    alignSelf: 'center',
    marginVertical: RFValue(35),
  },
  linearGradient: {
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
    borderRadius: deviceHeight * 0.1317,
    width: '100%',
    marginTop: 10,

    shadowRadius: 15,
    shadowOffset: {
      width: 150,
      height: 150,
    },
    shadowColor: '#FF7676',
    elevation: 4,
  },
  linearGradient2: {
    alignSelf: 'flex-end',
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    borderRadius: deviceHeight * 0.1317,
    width: '100%',
    marginTop: 10,

    shadowRadius: 15,
    shadowOffset: {
      width: 150,
      height: 150,
    },
    shadowColor: '#FF7676',
    elevation: 4,
  },
  playingtxt: {
    color: 'white',
  },
  playingsong: {
    width: '60%',
  },
  modalMainView: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: height,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subModalView: {
    backgroundColor: '#3A4667',
    width: width - 50,
    height: height / 1.5,
    borderRadius: 10,
    borderTopLeftRadius: RFPercentage(5),
    borderTopRightRadius: RFPercentage(5),
    borderBottomLeftRadius: RFPercentage(2),
    borderBottomRightRadius: RFPercentage(2),
  },
  secondView: {
    width: '100%',
    alignItems: 'flex-end',
  },
  closeTouchButton: {
    height: 40,
    width: 40,
    backgroundColor: 'black',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    right: 5,
    top: 5,
    position: 'absolute',
    zIndex: 1,
  },
  trackImageModalView: {
    flex: 1,
    alignItems: 'center',
  },
  imageStyle: {
    width: '100%',
    height: height / 2.8,
    borderRadius: RFPercentage(5),
  },
  playPauseButtonView: {marginTop: 30},
  songNameText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    marginTop: 5,
    fontWeight: 'bold',
  },

  pausePlayText: {fontSize: 14, color: '#fff', fontWeight: 'bold'},
  contentModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
