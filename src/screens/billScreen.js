import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';
import {useRoute} from '@react-navigation/native';

import ItemBill from '../items/itemBill';
import ItemPrice from '../items/itemPrice';

export default function BillScreen({navigation}) {
  const [state, setState] = useState ();
  const [pay, setPay] = useState ('');
  useEffect (() => {
    getItemAsync ();
    HandlePay();
  }, []);
  //getItem
  const getItemAsync = async () => {
    AsyncStorage.getItem ('hai1', (err, result) => {
      if (result != null) {
        const j = JSON.parse (result);
        setState (j);
        console.log ('kk' + j);
      } else {
        console.log (err);
      }
    });
  };

  const handleTru = async id => {
    let oldArray = await AsyncStorage.getItem ('hai1');
    let oldArrayJson = JSON.parse (oldArray);
    let index = oldArrayJson.findIndex ((el, index) => el.id === id);
    console.log ('index' + index);
    const cldobject = oldArrayJson[index];
    console.log ('kkkk:' + JSON.stringify (cldobject));
    oldArrayJson[index].number = oldArrayJson[index].number -= 1;
    console.log ('d:' + JSON.stringify (oldArrayJson));
    AsyncStorage.setItem ('hai1', JSON.stringify (oldArrayJson));
    getItemAsync ();
    HandlePay();
  };
  const handlePush = async id => {
    let oldArray = await AsyncStorage.getItem ('hai1');
    let oldArrayJson = JSON.parse (oldArray);
    let index = oldArrayJson.findIndex ((el, index) => el.id === id);
    console.log ('index' + index);
    const cldobject = oldArrayJson[index];
    console.log ('kkkk:' + JSON.stringify (cldobject));
    oldArrayJson[index].number = oldArrayJson[index].number += 1;
    console.log ('d:' + JSON.stringify (oldArrayJson));
    AsyncStorage.setItem ('hai1', JSON.stringify (oldArrayJson));
    getItemAsync ();
    HandlePay();
  };

  const clearAsyncStorage = async () => {
    AsyncStorage.removeItem ('hai1');
    console.log ('thanh toan thanh cong');
    navigation.navigate ('list');
    alert ('da thanh toan');
  };
  const HandlePay = async() =>{
    const pay = await AsyncStorage.getItem('hai1');
    console.log('pay' + pay);
    const payJson = JSON.parse(pay);
    console.log('payJson:' +payJson[0].number);
    const mapPay = payJson.map(x=>{
      return x.number*x.price
    }
      )
    console.log('mapPay:'+typeof mapPay)
    const total = mapPay.reduce((a,b)=>a+b);
    setPay(total);
    console.log(typeof total);
    
  }

  return (
    <View style={styleBill.container}>
      <View style={styleBill.producs}>
        <FlatList
          data={state}
          renderItem={({item}) => (
            <ItemBill
              item={item}
              handlePush={handlePush}
              handleTru={handleTru}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styleBill.bill}>
        <Text>Tổng tiền:</Text>
          <Text>{pay}</Text>
        <TouchableOpacity  style={styleBill.touchTT} onPress={()=>clearAsyncStorage()}>
          <Text>Thanh Toan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styleBill = StyleSheet.create ({
  container: {
    flex: 1,
  },
  producs: {
    flex: 1,
    backgroundColor: 'red',
  },
  bill: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  touch: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue',
    marginBottom: 10,
    marginTop: 5,
    marginLeft: 8,
    marginRight: 8,
  },
  HeadStyle: {
    height: 50,
    alignContent: 'center',
    backgroundColor: '#ffe0f0',
  },
  TableText: {
    margin: 10,
  },
  touchTT: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue',
    marginBottom: 10,
    marginTop: 200,
    marginLeft:16,
    marginRight:16
  },
  tow: {
    height: 100,
  },
  one: {
    height: 100,
  },
});
