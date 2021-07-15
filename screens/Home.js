import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Image } from 'react-native';
import mlogo from '../assets/ml-logo.png'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.navBar}>
            <Icon name="bars" size={27} style={styles.icone}/>
            <Image source={mlogo} style={styles.logo}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#b4ad9d',
  },

  navBar: {
    flexDirection: 'row',
    paddingTop: 75,
    width: '100%',
    backgroundColor: '#161616',
    alignItems: 'center',
    justifyContent: 'center'

  },

  icone: {
    
    color: '#b4ad9d',
  },

  logo: {
    
    paddingBottom: 10,

  },
  titulo: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'newsgoth_cn_btregular'
  }
});
