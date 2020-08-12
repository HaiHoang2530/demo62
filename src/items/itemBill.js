import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';

export default function({item, handlePush, handleTru}) {
  return (
    <View style={styleItem.constainer}>
      <Image style={styleItem.img} source={{uri: item.image}} />
      <View>
        <Text style={styleItem.text}>Name:{item.name} </Text>
        <Text style={styleItem.text}> plrice:{item.price} </Text>
        <Text style={styleItem.text}>Number:{item.number}</Text>
      </View>
      <View style={styleItem.viewPull}>
        <TouchableOpacity
          style={styleItem.button}
          onPress={() => handlePush (item.id)}
        >
          <Text>+</Text>
        </TouchableOpacity>
        <Text>{item.number * item.price}</Text>
        <TouchableOpacity
          style={styleItem.button}
          onPress={() => handleTru (item.id)}
        >
          <Text>-</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
  // <Text>{item.id}</Text>
}
const styleItem = StyleSheet.create ({
  constainer: {
    height: 100,
    backgroundColor: '#adadad',
    flexDirection: 'row',
    margin: 8,
  },
  img: {
    height: 100,
    width: 100,
  },
  text: {
    width: 200,
    marginLeft: 20,
    fontSize: 18,
    paddingTop: 5,
  },
  button: {
    width: 50,
    height: 30,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },
  viewPull: {
    paddingLeft: 10,
    justifyContent: 'center',
  },
});
