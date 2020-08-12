import React,{useState, useContext} from 'react';
import {
    View,
    Text,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
    TouchableHighlight,
    TextInput,
    AsyncStorage,
} from 'react-native';


//import css 
import {styleSigUp} from '../assets/css/cssSignUp'




export default function signup({navigation}) {

    //khoi tao useStae
    const [userName, setUserName] = useState(''); 
    const [password, setPassword] = useState('');
    
   
   const setUser = async() => {
        try{
            //setdata
             const user = await AsyncStorage.setItem('name',userName);
             const pass = await AsyncStorage.setItem('password',password);
           ///get data
             const va= await AsyncStorage.getItem('name');
             const va1= await AsyncStorage.getItem('password');
            navigation.navigate('list');
             console.log('show:'+va+va1);
        }
        catch (error){
           alert('data faile')
 
        };
   }

    return(
        <KeyboardAvoidingView 
            style={styleSigUp.container}
            >
                <TouchableWithoutFeedback  onPress={Keyboard.dismiss}>
                <View style={styleSigUp.inner}>
                        <View>
                            <Text style={styleSigUp.fontFamily}>HqpH3025</Text>
                            <TextInput
                             placeholder="useName" 
                             style={styleSigUp.textInput}
                             value={userName}
                             onChangeText={setUserName}
                             />
                            <TextInput
                             placeholder="passWord" 
                             style={styleSigUp.textInput}
                             value={password}
                             onChangeText={setPassword}
                             />
                        </View>
                        <View>
                            <TouchableHighlight 
                            style={styleSigUp.button}
                            underlayColor="#01D475"
                            activeOpacity={0.5}
                            onPress={() => setUser()}
                            >
                                <Text style={styleSigUp.textButton}>Create An Account</Text>
                            </TouchableHighlight>
                        </View>
                        <Text style={{color:'#ffffff',fontSize:30}}>{userName}:{password}</Text>
                </View>
                </TouchableWithoutFeedback >
            </KeyboardAvoidingView>  
    );
};