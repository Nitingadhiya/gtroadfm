import * as React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {withNavigation} from 'react-navigation';

export const BUTTON_HEIGHT = 60;
export const BUTTON_WIDTH = 200;

export default class RadioHome extends React.Component {
  constructor() {
    super();
    this.state = {};
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
          <TouchableOpacity alignSelf={'center'} alignContent={'center'}>
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

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Request')}
            style={styles.paddingtop}>
            <Text style={styles.label}>
              Request A Song&nbsp;
              <Icons
                name="music"
                color={'white'}
                size={22}
                alignSelf={'center'}
              />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
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
