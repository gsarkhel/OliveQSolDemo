import React from 'react';
import styles from './assets/styles';
import {View, Text, Image, ScrollView, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <ScrollView horizontal={false} contentContainerStyle={styles.scrollView}>
        <Image
          source={require('./assets/img/logo.png')} // Replace with your local image path
          style={styles.logopng}
        />
        <View style={styles.topcontainer}>
          <View style={styles.innercontainer}>
            <Text style={styles.textA}>
              Powering the World of Digital Content and,
            </Text>
            <Text style={styles.textB}>Learning Platforms</Text>
            <Text style={styles.textC}>
              OliveQSol is a leading next-gen technology company that offers
              educational content and learning solutions—leveraging digital,
              process automation, and robust learning design principles.
            </Text>
          </View>
          <Image
            source={require('./assets/img/header_img.png')} // Replace with your local image path
            style={styles.headerpng}
          />
        </View>
        <View style={styles.gradcontainer}>
          <LinearGradient
            colors={['rgba(241, 241, 242, 1)', 'rgba(252, 252, 253, 1)']}
            style={styles.topgradient}
          />
        </View>

        <View style={styles.viewSampleHead}>
          <Text style={styles.textSampleHead}>K-12</Text>
        </View>

        <View style={styles.viewSampleBoxes}>
          <View style={styles.viewSampleBox}>
            <Image
              source={require('./assets/img/game_1.png')} // Replace with your local image path
              style={styles.imgSampleBox}
            />
            <View style={styles.txtViewWrap}>
              <Text style={styles.txtViewBox}>Learning Platforms</Text>
            </View>
          </View>
          <View style={styles.viewSampleBox}>
            <Image
              source={require('./assets/img/game_1.png')} // Replace with your local image path
              style={styles.imgSampleBox}
            />
            <View style={styles.txtViewWrap}>
              <Text style={styles.txtViewBox}>Learning Platforms</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default App;
