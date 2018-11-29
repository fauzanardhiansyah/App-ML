import React, {Component} from 'react';
import {Platform, StyleSheet, View, Image, ScrollView, TouchableOpacity, Alert} from 'react-native';
import { Container, Header, Content, Form, Text, Item, Input, Label,
  List, ListItem, Thumbnail, Left, Body, Right, Footer, FooterTab, Button, Icon
} from 'native-base';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

export default class Home extends React.Component {
  hm()
	{
		Alert.alert("More Page Soon")

	}
  render() {
    return (
      <Container style = {styles.container}>
        <Header style = {styles.header}>
        
          <Body>
            <Text style = {styles.Font1}>Home</Text>
          </Body>
          <Right>
            <TouchableOpacity onPress ={() =>{this.hm()}}>
              <Image   source={require('./alarm.png')} size={100}/>
            </TouchableOpacity>
          </Right>
        </Header>
      <ScrollView>
        <View style = { styles.md}>
          
        </View>
      </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#488b8f',
  },
  header : {
    backgroundColor : '#1d5464'
  },
  md : {
    alignItems : 'center',
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
    Font1 : {
      color : 'white',
    },
});
