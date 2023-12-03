import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    ScrollView,
  } from "react-native";
  
  import { MaterialCommunityIcons } from '@expo/vector-icons';
  import React, { useContext, useState } from "react";
  import { Ionicons } from "@expo/vector-icons";
  import axios from "axios";
  import { value } from "../global_var/Globe";
    import { useNavigation } from "@react-navigation/native";
import { Notecontext } from "../helper/Notecontext";



  
  const Updatescreen = ({route}) => {
    const{dbdata,setdbdata}=useContext(Notecontext);
    const [name, setname] = useState();
    const [task1, settask1] = useState();
    const [task2, settask2] = useState();
    const [task3, settask3] = useState();

    const [val, setval] = useState([]);
  
    const navigation = useNavigation();
   
    const handleupdate = async () => {
      let data = { name: name, task1: task1, task2: task2,task3:task3 };
   const id=route.params
      try {
        var res = await axios.put(value.base+`/user/update/${id._id}`, data);
  
       
        setdbdata(res.data)
        console.log(res.data)
        navigation.navigate("update_anime")
      } catch (error) {
        console.log(error);
      }
    };
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: "#E0F4FF",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
       
          <Text style={{ fontSize: 35, fontWeight: 800 }}>TODO LIST</Text>
          <View
            style={{
            
              borderTopWidth:5,
            
              padding: 15,
            
              margin: 10,
              marginBottom:15,
              height: 300,
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: 800 }}>NAME</Text>
            <TextInput
              defaultValue={route.params.name}
              value={name}
              onChangeText={(value) => {
                setname(value);
              }}
              style={{
                marginLeft: 30,
                width: 300,
                backgroundColor: "white",
                borderRadius: 10,height:40
              }}
            />
            <Text style={{ fontSize: 25, fontWeight: 800 }}>TASK 1</Text>
            <TextInput
               defaultValue={route.params.task1}
              value={task1}
              onChangeText={(value) => {
                settask1(value);
              }}
              style={{
                marginLeft: 30,
                width: 300,
                backgroundColor: "white",
                borderRadius: 10,height:40
              }}
            />
            <Text style={{ fontSize: 25, fontWeight: 800 }}>TASK 2</Text>
            <TextInput
              defaultValue={route.params.task2}
              value={task2}
              onChangeText={(value) => {
                settask2(value);
              }}
              style={{
                marginLeft: 30,
                width: 300,
                backgroundColor: "white",
                borderRadius: 10,height:40
              }}
            />
            <Text style={{ fontSize: 25, fontWeight: 800 }}>TASK 3</Text>
            <TextInput
               defaultValue={route.params.task3}
              value={task3}
              onChangeText={(value) => {
                settask3(value);
              }}
              style={{
                marginLeft: 30,
                width: 300,
                backgroundColor: "white",
                borderRadius: 10,height:40
              }}
            />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              width: 150,
              marginTop: 20,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
            }}
            onPress={handleupdate}
          >
            <Text style={{ fontSize: 25, fontWeight: 800, color: "white" }}>
          UPDATE
            </Text>
          </TouchableOpacity>
          
        </View>
  

      
      </View>
    );
  };
  
  export default Updatescreen;
  