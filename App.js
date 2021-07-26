import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home'
import Reading   from './screens/Reading';
import { StackView } from '@react-navigation/stack';


const Tab = createStackNavigator()

function MyTabs(){
  return (
    <Tab.Navigator>
      <Tab.screen name="Home" component={Home}/>
      <Tab.Screen name="Reading" component={Reading}/>
    </Tab.Navigator>
  )
}
export default function App() {
  return (

    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
