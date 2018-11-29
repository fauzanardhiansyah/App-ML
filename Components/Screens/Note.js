import React, {Component} from 'react';
import {Platform, StyleSheet, View, Image, ScrollView, TouchableOpacity, Alert} from 'react-native';
import { Container, Content, Text, Item,
  List, ListItem, Thumbnail, Left, Body, Right, Button, Header, Icon, Title
} from 'native-base';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

export default class Note extends React.Component {
  hm()
	{
		Alert.alert("More Page Soon")

	}
  static navigationOptions = { header: null };
  render() {
    return (
      <Container>
      <Header style = { styles.header}>
          <Body>
            <Text style = {styles.Font1}>Note</Text>
          </Body>
        <Right>
          <TouchableOpacity onPress ={() =>{this.hm()}}>
            <Image
              source={require('./add.png')} size={100}/>
          </TouchableOpacity>
        </Right>
      </Header>
        <View>
          <List>
            <ListItem thumbnail onPress ={() =>{this.hm()}}>
              <Left>
                <Thumbnail square source={{ uri: 'https://i1.wp.com/zonevgame.com/wp-content/uploads/2018/02/franco1.jpg?resize=400%2C300&ssl=1' }} />
              </Left>
              <Body>
                <Text>Franco</Text>
                <Text note numberOfLines={1}>One Shoot One Kill.</Text>
              </Body>
              <Right>
                <Button transparent onPress ={() =>{this.hm()}}>
                  <Text>Add</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail onPress ={() =>{this.hm()}}>
              <Left>
                <Thumbnail square source={{ uri: 'https://jurnalapps.co.id/assets/img/content/1510777273_hylos.jpg' }} />
              </Left>
              <Body>
                <Text >Ferguso</Text>
                <Text note numberOfLines={1}>Yuk main yuk....</Text>
              </Body>
              <Right>
                <Button transparent onPress ={() =>{this.hm()}}>
                  <Text >Add</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail onPress ={() =>{this.hm()}}>
              <Left>
                <Thumbnail square source={{ uri: 'http://cdn2.tstatic.net/style/foto/bank/images/harley-mobile-legends_20170730_201342.jpg' }} />
              </Left>
              <Body>
                <Text>Antonio</Text>
                <Text note numberOfLines={1}>Ah lu noob</Text>
              </Body>
              <Right>
                <Button transparent onPress ={() =>{this.hm()}}>
                  <Text>Add</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail onPress ={() =>{this.hm()}}>
              <Left>
                <Thumbnail square source={{ uri: 'https://steemitimages.com/p/o1AJ9qDyyJNSpZWhUgGYc3MngFqoAMwL78DAonNbuCim84Ewp?format=match&mode=fit' }} />
              </Left>
              <Body>
                <Text>Dora</Text>
                <Text note numberOfLines={1}>Dimana boots?</Text>
              </Body>
              <Right>
                <Button transparent onPress ={() =>{this.hm()}}>
                  <Text>Add</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#488b8f',
  },
  header: {
    backgroundColor : '#1d5464',
  },
  Font1 : {
    color : 'white',
  },
  FontBt : {
    color : '#1d5464',
  },
  Font2 : {
    color : '#ebf0f6',
  }
});
