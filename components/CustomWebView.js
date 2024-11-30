import React, {useState} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';

const CustomWebView = ({uri}) => {
  const [loading, setLoading] = useState(true);

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
        domStorageEnabled={true}
        onLoad={() => setLoading(false)} // Hide loader when page loads
        onLoadStart={() => setLoading(true)} // Show loader on navigation
        onError={(error) => console.error('WebView Error:', error.nativeEvent)}
        onNavigationStateChange={navState => {
          console.log('Navigating to:', navState.url);
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
