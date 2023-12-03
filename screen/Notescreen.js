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



  
  const Notescreen = () => {
    const{dbdata,setdbdata}=useContext(Notecontext);
    const [name, setname] = useState();
    const [task1, settask1] = useState();
    const [task2, settask2] = useState();
    const [task3, settask3] = useState();
  
    const [val, setval] = useState([]);
  
    const navigation = useNavigation();
    const showapi = async () => {
    
      try {
        const res = await axios.get(value.base+"/user/view");
  
        setval(res.data);
      } catch (error) {
        console.log(error);
      }
      console.log("hello")
    };
    const handlesave = async () => {
      let data = { name: name, task1: task1, task2: task2,task3:task3 };
  
      try {
        var res = await axios.post(value.base+"/user/add", data);
  
       
        setdbdata(res.data)
        console.log(dbdata)
        navigation.navigate("store_anime")
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
              placeholder="type name.."
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
              placeholder="type task.."
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
              placeholder="type task.."
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
              placeholder="type task.."
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
            onPress={handlesave}
          >
            <Text style={{ fontSize: 25, fontWeight: 800, color: "white" }}>
           ADD
            </Text>
          </TouchableOpacity>
          
        </View>
  

      
      </View>
    );
  };
  
  export default Notescreen;
  