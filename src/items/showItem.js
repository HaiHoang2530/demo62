import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useRoute } from '@react-navigation/native'

export default function showItem () {
  const route = useRoute()
  console.log( 'route:'+route.params.id);
  return (
    <View style={stylesShow.container}>
        <View style={stylesShow.viewImg}>
        <Image source={{uri:route.params.image}} style={stylesShow.image}/>
        </View>
      <View style={stylesShow.viewText}>
  <Text style={stylesShow.text}>Name:{route.params.name}</Text>
        <Text style={stylesShow.text}>Price:{route.params.price}</Text>
        <Text style={stylesShow.text}>Number:{route.params.number}</Text>
      </View>
    </View>
  );
}

const stylesShow = StyleSheet.create ({
  container: {
    flex: 1,
  },
  viewImg:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      marginTop:16,
  },
  viewText:{
      flex:2,
      marginTop:32,
      marginBottom:16,
      marginRight:16,
      marginLeft:16,
  },
  image:{
      height:200,
      width:200,
  },
  text:{
      height:40,
      justifyContent:'center'
  }
});
