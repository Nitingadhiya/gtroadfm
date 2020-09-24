import React, { Component } from "react";
import { StyleSheet, Text, View , Dimensions } from "react-native";

import { SliderBox } from "react-native-image-slider-box";
const { height } = Dimensions.get("window");
export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
         require('../../assets/slider/s1.jpg'),
         require('../../assets/slider/s2.jpg'),
         require('../../assets/slider/s3.jpg'),
         require('../../assets/slider/s4.jpg'),
         require('../../assets/slider/s5.jpg'),
         require('../../assets/slider/s6.jpg'),
         require('../../assets/slider/s7.jpg'),
         require('../../assets/slider/s8.jpg'),
      ]
    };
  }
 
  render() {
    return (
      <View style={styles.container}>
        <SliderBox
          images={this.state.images}
          autoplay
          disableOnPress = {true}
          sliderBoxHeight={height}
        />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});