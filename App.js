import React from 'react';
import styles from './assets/styles';
import {View, Text, Image, ScrollView, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <ScrollView contentContainerStyle={styles.scrollView}>
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
      </ScrollView>
    </>
  );
};

export default App;
