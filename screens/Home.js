import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Image , Button } from 'react-native';
import mlogo from '../assets/ml-logo.png'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Home() {
  return (
    <View style={styles.container}>
        <View style={styles.navBar}>
            <Icon name="bars" size={27} style={styles.iconeB}/>
            <Image source={mlogo} style={styles.logo}/>
            <Icon name="search" size={27} style={styles.iconeS}/>
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
    paddingTop: 70,
    width: '100%',
    backgroundColor: '#161616',
    alignItems: 'center',
    justifyContent: 'center'

  },

  iconeB: {
    flex:2,
    color: '#b4ad9d',
    paddingLeft: 25
  },

  iconeS: {
    flex:2,
    paddingLeft: 30,
    color: '#b4ad9d',
  },

  logo: {

  flex: 5,


  },
  titulo: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'newsgoth_cn_btregular'
  }
});


