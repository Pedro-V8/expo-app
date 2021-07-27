import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home'
import Reading   from './screens/Reading';
import { StackView } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';


const Tab = createBottomTabNavigator()

function MyTabs(){
  return (
    <Tab.Navigator tabBarOptions={{ showLabel: false }} style={ styles.optionContainer }>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({ focused }) => (
          <View>
            <Icon name="home" size={30}/>
          </View>
        ),
      }}/>
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

const styles = StyleSheet.create({
  optionContainer: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 0,
    borderRadius: 15,
    height: 90
  },
  homeText: {
    color: '#e32f45',
    fontSize: 12
  }
})
