import { StyleSheet } from 'react-native'

const styleSigUp = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#050405',
        justifyContent:'center'
    },
    inner: {
        padding:24,
        justifyContent:'space-around',
    },
    fontFamily: {
        fontSize: 36,
        marginBottom:36,
        textAlign: 'center',
        color:'#ffffff'
        
    },
    textInput: {
        height:50,
        borderColor: '#000000',
        borderBottomWidth : 1,
        borderBottomColor:'#ffffff',
        marginBottom:16,
        color: '#ffffff',


    },
    button: {
        height:40,
        backgroundColor:'#01D475',
        borderRadius:50,
        marginBottom:8,
        justifyContent:'center',
    },
    textButton:{
        textAlign:'center',
        fontStyle:'normal',
        fontSize:18,
        color:'#ffffff'
    
    }
});

export {
    styleSigUp,
}