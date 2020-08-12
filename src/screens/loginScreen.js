import React,{useState} from 'react';
import {
    View,
    Text,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
    TouchableHighlight,
    TextInput,
    AsyncStorage,
    PushNotificationIOS,
} from 'react-native';


//import css 
import {styleLogin} from '../assets/css/cssLogin'



export default function loginScreen({navigation}) {
    const [userName, setUserName] = useState(''); 
    const [password, setPassword] = useState('');




    const getUser = async() => {
        const name = await AsyncStorage.getItem('name');
        const password = await AsyncStorage.getItem('password');
        if(name !== null) {
            if(userName==name && password==password){
                navigation.navigate('list');
            }
            else{
                alert('nhap sai vui long nhap lai!');
            }
        }
        else{
            alert('khong co ton tai tai khoan');
        }
    }

    return(
        <KeyboardAvoidingView 
            style={styleLogin.container}
            >
                <TouchableWithoutFeedback  onPress={Keyboard.dismiss}>
                <View style={styleLogin.inner}>
                        <View>
                            <Text style={styleLogin.fontFamily}>HqpH3025</Text>
                            <TextInput
                             placeholder="useName" 
                             style={styleLogin.textInput}
                             value={userName}
                             onChangeText={setUserName}
                             />
                            <TextInput
                             placeholder="passWord" 
                             style={styleLogin.textInput}
                             value={password}
                             onChangeText={setPassword}
                             />
                        </View>
                        <View>
                            <TouchableHighlight 
                            style={styleLogin.button}
                            underlayColor="#01D475"
                            activeOpacity={0.5}
                            onPress={() => getUser()}
                            >
                                <Text style={styleLogin.textButton}>Sign In</Text>
                            </TouchableHighlight>
                            <TouchableHighlight 
                            style={styleLogin.button}
                            underlayColor="#01D475"
                            activeOpacity={0.5}
                            onPress={() => navigation.navigate('signup')}
                            >
                                <Text style={styleLogin.textButton}>Sign Up</Text>
                            </TouchableHighlight>
                        </View>
                </View>
                </TouchableWithoutFeedback >
            </KeyboardAvoidingView>  
    );
};