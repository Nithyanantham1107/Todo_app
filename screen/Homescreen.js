import { View, Text, Touchable, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation ,useIsFocused} from "@react-navigation/native";
import Noteslist from '../components/Noteslist';
import { value } from '../global_var/Globe';
import axios from 'axios';
import { Notecontext } from '../helper/Notecontext';


const Homescreen = () => {
    const navigation=useNavigation();

    const{dbdata,setdbdata}=useContext(Notecontext);
    const[val,setval]=useState([]);
  

const [flag,setflag]=useState(0);

    
    useEffect(()=>{

      axios.get(value.base+"/user/view").then((res)=>{
     setdbdata(res.data)
     console.log("hello ")
   
      }).catch( (err)=>{
        console.log(err)
      });
    
    }
      ,[])
   


   
  return (
    <View style={{flex:1,paddingTop:20,backgroundColor:"#c7f9cc"}}>
         <View style={{}}>
  
       <ScrollView >  
        {(dbdata|| []).map((dummy) => (
         <Noteslist key={dummy._id} data={dummy}/>)).filter(Boolean)}
        </ScrollView> 
        </View>

   
    <TouchableOpacity style={{position:"absolute",marginTop:600,padding:4,marginLeft:310,borderRadius:10,backgroundColor:"#57cc99"}}
    onPress={()=>{navigation.navigate("todo")}}>
    <Ionicons name="add-outline" size={50} color="white" />
    </TouchableOpacity>
    </View>
  )
}

export default Homescreen;