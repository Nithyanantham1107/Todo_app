import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import LottieView from "lottie-react-native";
import { useNavigation ,useIsFocused} from "@react-navigation/native";

const Storeloadscreen = () => {
  const[second,setsecond]=useState(0);
  const navigation =useNavigation();
  useEffect(
    ()=>{
      setsecond(second+1);
      if(second==150){
          navigation.navigate("Notes")
      }
    }
   
  ,[second])
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
     
    <LottieView
    style={{width:300,height:300}}
    source={require("../assets/store.json")}
    autoPlay 
    loop />
    </View>
  )
}

export default Storeloadscreen;