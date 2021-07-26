import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Image , Button } from 'react-native';
import mlogo from '../assets/ml-logo.png'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Reading() {
  return (
    <View style={styles.container}>
        <Text>Hello From Reading</Text>
    </View>

  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#b4ad9d',
  },

});
