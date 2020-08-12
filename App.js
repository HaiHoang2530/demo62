import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableHighlight,
} from 'react-native';

import {Provider} from 'react-redux';
//import store from './src/store/index'
//navigation
import { NavigationContainer,useRoute } from '@react-navigation/native';
import { createStackNavigator,  } from '@react-navigation/stack';

//sceen
import Login from './src/screens/loginScreen';
import List from './src/screens/listScreen';
import Bill from './src/screens/billScreen';
import Sign from './src/screens/signup';
import Show from './src/items/showItem';


const TabStack = createStackNavigator();

// Navhsdaghfdsgfjadsgfhsdgfh

function App(){
  return(
    
      <NavigationContainer>
        <TabStack.Navigator>
          <TabStack.Screen name='login' component={Login} options={{headerShown:false}}/>
          <TabStack.Screen name='list' component={List} 
          options={({navigation})=>({
            headerLeft:false,
            headerRight:()=>
              <TouchableHighlight
              onPress={()=>navigation.navigate('bill')}
              >
                <Image
                source={require('./src/assets/images/shopping.png')}/>
              </TouchableHighlight>
          })
          }/>
          <TabStack.Screen name='bill' component={Bill} />
          <TabStack.Screen name='signup' component={Sign} options={{headerShown:false}}/>
          <TabStack.Screen name='show' component={Show} />
        </TabStack.Navigator>
      </NavigationContainer>
    
  );
};
   

export default App;
