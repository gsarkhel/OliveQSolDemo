import React, {useState} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';

const CustomWebView = ({uri}) => {
  const [loading, setLoading] = useState(true);
  console.log('CustomWebView', uri);
  

  return (
    <View style={styles.container}>
      {loading && (
        <ActivityIndicator style={styles.loader} size="large" color="#0000ff" />
      )}
      <WebView
        source={{uri}}
        style={styles.webview}
        originWhitelist={['*']}
        javaScriptEnabled={true}
        isInspectable={true}
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
        onMessage={event => {
          console.log('WebView log:', event.nativeEvent.data);
        }}
        injectedJavaScript={`
          (function(){
              var oldLog = console.log;
              console.log = function (message) {
                  // DO MESSAGE HERE.
                  window.ReactNativeWebView.postMessage(message);
                  oldLog.apply(console, arguments);
              };
          })();
        `}
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
