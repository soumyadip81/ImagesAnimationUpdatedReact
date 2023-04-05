import React, {Component, useRef, useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  StatusBar,
  Image,
  Text,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';

import FastImage from 'react-native-fast-image';
const AnimatedFastImage = Animated.createAnimatedComponent(FastImage);

const IMAGES = {
  image0: require('../images/0.jpeg'),
  image1: require('../images/1.jpeg'),
  image2: require('../images/2.jpeg'),
  image3: require('../images/3.jpeg'),
  image4: require('../images/4.jpeg'),
  image5: require('../images/5.jpeg'),
  image6: require('../images/6.jpeg'),
  image7: require('../images/7.jpeg'),
  image8: require('../images/8.jpeg'),
  image9: require('../images/9.jpeg'),
  image10: require('../images/10.jpeg'),
  image11: require('../images/11.jpeg'),
  image12: require('../images/12.jpeg'),
  image13: require('../images/13.jpeg'),
  image14: require('../images/14.jpeg'),
  image15: require('../images/15.jpeg'),
  image16: require('../images/16.jpeg'),
  image17: require('../images/17.jpeg'),
  image18: require('../images/18.jpeg'),
  image19: require('../images/19.jpeg'),
};

function getImage(num) {
  return IMAGES['image' + (num % 20)];
}

//need to double check how to use getImage and IMAGES as props
const CustomRow = ({ spinValue, index, transform, useNativeDriver}) => {
  const [spinValueLocal, setSpinValueLocal] = useState(spinValue);
  const [indexLocal, setIndexLocal] = useState(index);
  const [transformLocal, setTransformLocal] = useState(transform);
  const [useNativeDriverLocal, setUseNativeDriverLocal] = useState(useNativeDriver);


  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 360,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: useNativeDriver,
      }),
    ).start();
  });

  return (
    <AnimatedFastImage
      style={{
        transform: transform,
        height: Dimensions.get('window').width / 10,
        width: Dimensions.get('window').width / 10,
      }}
      source={getImage(index)}
      resizeMode={'cover'}
      fadeDuration={0}
    />
  );
};
export default CustomRow;

const styles = StyleSheet.create({
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width / 10,
    height: Dimensions.get('window').width / 10,
  },
});
