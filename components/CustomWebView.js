import React, {useState} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';
import RNFS from 'react-native-fs';
import RNFetchBlob from 'rn-fetch-blob';

const CustomWebView = ({uri}) => {
  const [loading, setLoading] = useState(true);

  // const pathURI =
  //   Platform.OS === 'android'
  //     ? 'file:///android_asset/samples'
  //     : `${RNFS.MainBundlePath}/samples`;

  const pathURI =
    Platform.OS === 'android'
      ? 'file:///android_asset/samples/ece_1/index.html'
      : `${RNFetchBlob.fs.dirs.MainBundleDir}/samples/ece_1/index.html`;

  console.log('pathURI', pathURI);
    return (
      <View style={styles.container}>
        {loading && (
          <ActivityIndicator
            style={styles.loader}
            size="large"
            color="#0000ff"
          />
        )}
        <WebView
          source={{uri: pathURI}}
          style={styles.webview}
          originWhitelist={['*']}
          javaScriptEnabled={true}
          // domStorageEnabled={true}
          // setWebContentsDebuggingEnabled={true}
          allowFileAccess={true} // Ensure file access is enabled
          allowUniversalAccessFromFileURLs={true} // Allow accessing other files from local
          onError={syntheticEvent => {
            const {nativeEvent} = syntheticEvent;
            console.log('WebView error:', nativeEvent);
          }}
          onHttpError={syntheticEvent => {
            const {nativeEvent} = syntheticEvent;
            console.log('HTTP error:', nativeEvent);
          }}
        />
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  },
  loader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -25}, {translateY: -25}], // Center loader
  },
  webview: {
    // flex: 1,
  },
});

export default CustomWebView;
