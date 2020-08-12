import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  requireNativeComponent,
  AsyncStorage,
} from 'react-native';

//json data
import data from '../constansts/data.json';

//item
import ItemList from '../items/itemList';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {withSafeAreaInsets} from 'react-native-safe-area-context';

const list = [];

export default function listsScreen({navigation}) {
  // khai bao api
  const API = 'https://5ceb729177d47900143b897f.mockapi.io/movies';
  const [list, setList] = useState (list);
  const [shopping, setShopping] = useState (null);
  const [edit, setEdit] = useState ('');

  // chay
  useEffect (() => {
    fetch (API)
      .then (respose => respose.json ())
      .then (responseJson => {
        setList (responseJson);
      })
      .catch (error => console.log ('loi'));
    HandFetchData ();
  }, []);

  //cap nhat lai list
  const HandFetchData = () => {
    fetch (API)
      .then (response => response.json ())
      .then (responseJson => {
        setList (responseJson);
      })
      .catch (error => console.log (error));
  };
  //shopping
  const handleShopping = id => {
    fetch (`${API}/${id}`)
      .then (response => response.json ())
      .then (responseJson => Sshopping (responseJson))
      .catch (error => console.log (error));
    alert ('them thanh cong ');
    //console.log('shoooo    '+  shopping.id)
  };

  const Sshopping = async item => {
    const list = [item];
    try {
      AsyncStorage.getItem ('hai1', (error, value) => {
        if (value == null) {
          const v = AsyncStorage.setItem ('hai1', JSON.stringify ([item]));
          console.log ('vvv   ' + typeof v);
        } else {
          const pushs = JSON.parse (value);
          pushs.push (item);
          const e = AsyncStorage.setItem ('hai1', JSON.stringify (pushs));
          console.log ('eee   ' + typeof e);
        }
      });
    } catch (e) {
      alert ('loi');
    }
  };

  //add san pham
  const handleAddList = (name, price, number, image) => {
    fetch (API, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify ({
        name,
        price,
        number,
        image,
      }),
    })
      .then (() => HandFetchData ())
      .catch (error => console.log (error));
  };

  //xoa list
  const handleDelete = itemId => {
    fetch (`${API}/${itemId}`, {method: 'DELETE'})
      .then (() => console.log ('Deleted!'))
      .then (() => HandFetchData ())
      .catch (error => console.log (error));
  };

  const handleShow = id => {
    console.log (id);
    fetch (`${API}/${id}`)
      .then (response => response.json ())
      .then (responseJson => navigation.navigate ('show', responseJson))
      .catch (error => console.log (error));
  };

  return (
    <View>
      <View>
        <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: 'skyblue',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 15,
          }}
          onPress={() => handleAddList ()}
        >
          <Text>ADD PRODUC</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={list}
          renderItem={({item}) => (
            <ItemList
              item={item}
              handleDelete={handleDelete}
              handleShopping={handleShopping}
              navigation={navigation}
              handleShow={handleShow}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}
