import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';

import {useNavigation, useRoute} from '@react-navigation/native';

export default function itemList({
  item,
  handleDelete,
  handleShopping,
  navigation,
  handleShow,
}) {
  return (
    <TouchableOpacity onPress={() => handleShow (item.id)}>
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
            onPress={() => handleShopping (item.id)}
          >
            <Text>Mua</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styleItem.button}
            onPress={() => handleDelete (item.id)}
          >
            <Text>xoa</Text>
          </TouchableOpacity>

        </View>
      </View>
    </TouchableOpacity>
  );
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
    marginTop: 5,
  },

  viewPull: {
    paddingLeft: 10,
    justifyContent: 'center',
  },
});
