import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <View style={styles.container}>
        <Text style={styles.text}>Hello, Fullscreen App!</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 24,
    color: '#333',
  },
});

export default App;
