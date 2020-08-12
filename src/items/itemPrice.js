import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';


export default function itemprice({item}){
    const [push,setPush]  = useState(item.number)
    //console.log(push)
    return(
        <View style={sty.container}>
            <Text>{item.name}</Text>
             <Text>{item.price*item.number}</Text>

        </View>
    )
}
const sty = StyleSheet.create({
    container:{
        height:100,
        backgroundColor:'#DADADA'
    }
})
