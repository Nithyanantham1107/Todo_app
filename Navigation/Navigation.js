import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from '../screen/Homescreen';
import Notescreen from '../screen/Notescreen';
import { Notecontext } from '../helper/Notecontext';
import Updatescreen from '../screen/Updatescreen';
import Storeloadscreen from '../screen/Storeloadscreen';
import Updateanimescreen from '../screen/Updateanimescreen';

const Navigation = () => {
    const Stack=createNativeStackNavigator();
    const[dbdata,setdbdata]=useState([]);
  return (
    <Notecontext.Provider value={{dbdata,setdbdata}}>
   <NavigationContainer>
<Stack.Navigator screenOptions={{headerTitleAlign:"center"}}>
    <Stack.Screen name="Notes" component={Homescreen}/>
    <Stack.Screen name="todo" component={Notescreen}/>
    <Stack.Screen name="updateList" component={Updatescreen}/>
    <Stack.Screen name="store_anime" component={Storeloadscreen} options={{headerShown:false}}/>
    <Stack.Screen name="update_anime" component={Updateanimescreen} options={{headerShown:false}}/>
</Stack.Navigator>
   </NavigationContainer></Notecontext.Provider>
  )
}

export default Navigation;