import React, {useState} from 'react';
import styles from './assets/styles';
import {
  View,
  Text,
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Alert,
} from 'react-native';
import RNFS from 'react-native-fs';
import LinearGradient from 'react-native-linear-gradient';
import CustomWebView from './components/CustomWebView';

const App = () => {
  const [currentValue, setCurrentValue] = useState('');
  // const sample1Path = `${RNFS.DocumentDirectoryPath}/assets/samples/ece_1/index.html`;

  const setFileURI = uripath => {
    // Dynamically construct the correct path for the platform
    const pathURI =
      uripath !== ''
        ? Platform.OS === 'android'
          ? `file:///android_asset/samples/${uripath}`
          : `${RNFS.MainBundlePath}/samples/${uripath}`
        : uripath;
    // console.log('setCurrentValue', pathURI);
    setCurrentValue(pathURI);

    // const fileUri = `${RNFS.MainBundlePath}/samples/ece_1/index.html`;
    // console.log('fileUri', fileUri);

  };

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
            <TouchableOpacity
              style={styles.touchBox}
              onPress={() => {
                setFileURI('ece_1/index.html');
              }}></TouchableOpacity>
          </View>
          <View style={styles.viewSampleBox}>
            <Image
              source={require('./assets/img/game_1.png')} // Replace with your local image path
              style={styles.imgSampleBox}
            />
            <View style={styles.txtViewWrap}>
              <Text style={styles.txtViewBox}>Learning Platforms</Text>
            </View>
            <TouchableOpacity
              style={styles.touchBox}
              onPress={() => {
                setFileURI('ece_1/index.html');
              }}></TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      {currentValue !== '' ? (
        <>
          <View style={styles.wViewHolder}>
            <CustomWebView uri={currentValue} />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => {
                setFileURI('');
              }}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default App;
