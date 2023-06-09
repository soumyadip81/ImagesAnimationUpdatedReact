import React, {Component, useRef, useEffect} from 'react';
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

import FadeInView from './Components/FadeInView';
import FastImage from 'react-native-fast-image';
import CustomRow from './Components/CustomRow';

const AnimatedFastImage = Animated.createAnimatedComponent(FastImage);

const IMAGES = {
  image0: require('./images/0.jpeg'),
  image1: require('./images/1.jpeg'),
  image2: require('./images/2.jpeg'),
  image3: require('./images/3.jpeg'),
  image4: require('./images/4.jpeg'),
  image5: require('./images/5.jpeg'),
  image6: require('./images/6.jpeg'),
  image7: require('./images/7.jpeg'),
  image8: require('./images/8.jpeg'),
  image9: require('./images/9.jpeg'),
  image10: require('./images/10.jpeg'),
  image11: require('./images/11.jpeg'),
  image12: require('./images/12.jpeg'),
  image13: require('./images/13.jpeg'),
  image14: require('./images/14.jpeg'),
  image15: require('./images/15.jpeg'),
  image16: require('./images/16.jpeg'),
  image17: require('./images/17.jpeg'),
  image18: require('./images/18.jpeg'),
  image19: require('./images/19.jpeg'),
};

function getImage(num) {
  return IMAGES['image' + (num % 20)];
}

let data = Array(200);
for (var i = 0; i < data.length; i++) {
  data[i] = {
    key: String(i),
    src: getImage(i),
  };
}

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <FlatList
          data={data}
          // renderItem={({item}) => (
          //   <View style={{flex: 1, flexDirection: 'column', margin: 1}}>
          //     <Image
          //       style={styles.imageThumbnail}
          //       source={item.src}
          //       resizeMode="cover"
          //     />
          //   </View>
          // )}
          renderItem={({item}) => {
            let index = item.key % 3;
            let spinValue = new Animated.Value(0);
            if (index == 0) {
              let spin = spinValue.interpolate({
                inputRange: [0, 360],
                outputRange: ['0deg', '360deg'],
              });
              let transform = [{rotate: spin}];
              return (
                <CustomRow
                  index={item.key}
                  useNativeDriver={true}
                  transform={transform}
                  spinValue={spinValue}>
                  {' '}
                </CustomRow>
              );
            }
            if (index == 1) {
              let spin = spinValue.interpolate({
                inputRange: [0, 360],
                outputRange: [0.0, 1.0],
              });
              let transform = [{scale: spin}];
              return (
                <CustomRow
                  index={item.key}
                  useNativeDriver={true}
                  transform={transform}
                  spinValue={spinValue}>
                  {' '}
                </CustomRow>
              );
            }
            if (index == 2) {
              return (
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <FadeInView
                    style={{
                      height: Dimensions.get('window').width / 10,
                      width: Dimensions.get('window').width / 10,
                      backgroundColor: 'powderblue',
                    }}>
                    <Image
                      style={styles.imageThumbnail}
                      source={item.src}
                      resizeMode="cover"
                    />
                  </FadeInView>
                </View>
              );
            }
          }}
          numColumns={10}
          keyExtractor={(item, index) => index.toString()}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width / 10,
    height: Dimensions.get('window').width / 10,
  },
});

export default App;