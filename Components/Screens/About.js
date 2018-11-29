import React, {Component} from 'react';
import {Platform, StyleSheet, View, Image, ScrollView, TouchableOpacity, Alert, Text} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label,
  List, ListItem, Thumbnail, Left, Body, Right, Footer, FooterTab, Button, Icon
} from 'native-base';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

export default class About extends React.Component {
  static navigationOptions = { header: null };
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 150, height: 150}}
          source={{uri: 'https://www.facebook.com/photo.php?fbid=2315699431986680&set=a.1386930391530260&type=3&theater'}}/>
        <Text style={styles.Font}>Fauzan Ardhiansyah</Text>
        <Text style={styles.Font}>XI RPL 3</Text>
        <Text style={styles.Font}>21</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000CD',
  },
  Font: {
    fontFamily : 'Helvetica',
    color : 'white',
    fontSize : 14,
  }
});
