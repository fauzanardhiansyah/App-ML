import React, {Component} from 'react';
import {Platform, StyleSheet, View, Image, ScrollView, TouchableOpacity, Alert} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label,
  List, ListItem, Thumbnail, Text, Left, Body, Right, Footer, FooterTab, Button, Icon

} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, TabBarBottom, createAppContainer } from 'react-navigation';

import About from './Screens/About.js';
import Note from './Screens/Note.js';
import Home from './Screens/Home.js';

class HomeScreen extends React.Component {
  render() {
    return (
      <Home/>
    );
  }
}

class NoteScreen extends React.Component {
  render() {
    return (
      <Note/>
    );
  }
}

class AboutScreen extends React.Component {
  render() {
    return (
      <About/>
      );
    }
  }

export default class Screen extends Component<Props> {
	static navigationOptions = { header: null };
  render() {
    return (
			<BotNav/>
		);
	}
}

const BotNav = createBottomTabNavigator(
  {
  Home : {
    screen : HomeScreen,
    navigationOptions: {
      tabBarIcon:({tintColor})=>(
        <Image
          source={require('./Screens/home.png')} size={100}/>
      )
    }
  },
  Note: {
    screen : NoteScreen,
    navigationOptions: {
      tabBarIcon:({tintColor})=>(
        <Image
          source={require('./Screens/notepad.png')} size={100}/>
      )
    }
  },
  About : {
    screen : AboutScreen,
    navigationOptions: {
      tabBarIcon:({tintColor})=>(
        <Image
          source={require('./Screens/help.png')} size={100}/>
      )
    }
    },

  },
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#488b8f',
  },
  welcome: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
    color : '#fff'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  Img : {
      alignItems : 'center',
      marginTop : 10,
      marginBottom : 10,
      width : 300,
      height : 74,
    },
});
