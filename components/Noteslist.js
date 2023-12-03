import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';
import { value } from '../global_var/Globe';
import Updatescreen from '../screen/Updatescreen';
import { Notecontext } from '../helper/Notecontext';
import { useNavigation } from "@react-navigation/native";
const Noteslist = ({data}) => {
  const navigation=useNavigation();
  const{dbdata,setdbdata}=useContext(Notecontext);
  console.log(data);
  if(data==undefined){
    return null 
  }
  const Deleteapi= async (id)=>{
    try{  
       const res = await axios.delete(value.base+`/user/delete/${id}`);
     
      
       console.log(res.data)
       setdbdata(res.data)
     } catch (error) {
       console.log(error);
     }

   
       
   }
  return (
  
    <View style={{flexDirection:"row",marginLeft:10,backgroundColor:"white",justifyContent:"space-between",marginHorizontal:1,width:365,borderRadius:8,height:110,
    marginVertical:6}}>
     <View style={{paddingLeft:3,}}>
    <Text style={{fontSize:40,color:"#4AD393",fontWeight:"bold"}}>{data.name}</Text>
     <Text numberOfLines={1}  style={{fontWeight:"700",justifyContent:"center"}}>
     -> {data.task1}
     
     </Text>
     
     <Text numberOfLines={1}  style={{fontWeight:"700",justifyContent:"center"}}>
    
    -> {data.task2}
     
     </Text>
     <Text numberOfLines={1}  style={{fontWeight:"700",justifyContent:"center"}}>
     
     -> {data.task3}
     </Text>
     </View>
     <View style={{justifyContent:"space-between",backgroundColor:"white",borderRadius:8
    }}>
    <TouchableOpacity style={{backgroundColor:"#B6E388",padding:10,margin:2,borderRadius:10}} onPress={()=>{

      navigation.navigate("updateList",data)
    }}>
     <MaterialIcons name="system-update-alt" size={30} color="white" /></TouchableOpacity>
    <TouchableOpacity style={{backgroundColor:"#B6E388",padding:10,margin:2,borderRadius:10}} onPress={()=>{Deleteapi(data._id)}}> 
      <AntDesign name="delete" size={30} color="white" />
      </TouchableOpacity> 
      </View>
     </View> 
  
  )
}

export default Noteslist;