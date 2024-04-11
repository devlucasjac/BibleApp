import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Bible from "./screens/Bible/index";
import BibleSearch from "./screens/BibleSearch/index";
 
import { useState, useContext} from 'react';

import Books from './context/Books';

const Stack = createNativeStackNavigator();

export default function App() {

  const [books,setBooks] = useState()

  return (
    <NavigationContainer>
      <Books.Provider value={{books,setBooks}}>
    <Stack.Navigator initialRouteName='Bible'>
        <Stack.Screen name="Bible" component={Bible}/>
        <Stack.Screen name="BibleSearch" component={BibleSearch}/>
    </Stack.Navigator>
      </Books.Provider>
    </NavigationContainer>
  );
}

