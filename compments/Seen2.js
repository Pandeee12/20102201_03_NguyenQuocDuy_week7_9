import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TouchableOpacity,TextInput, FlatList } from 'react-native';
import { useState } from 'react';
import connectAPI from '../api/connectAPI';
import{Ionicons} from '@expo/vector-icons';
export default function Seen2({navigation,route}) {
    const name =  route.params.name
    const inputjob =  route.params.inputjob
    const[data,setData]=useState()
    const request=connectAPI.get('/job',{}).then((result)=>{
      setData(result.data);
    });
  return (
    <View style={styles.container}>
        <View style={styles.title}>
          <View style={{flex:1,flexDirection : 'row'}}>
            <TouchableOpacity style={styles.back}
              onPress={()=> navigation.navigate('Seen1')} > 
              <Image style={{width:'40px',height:'40px',marginLeft:10, justifyContent:'center'}} source={require("../assets/Icon Button 11.png")}/>
              </TouchableOpacity>
              <Image style={styles.avt} source={require('../assets/Rectangle.png')}/>
              <View>
              <Text style={{fontSize : 17, fontWeight : 750, paddingLeft : 10}}>Hi {name}</Text>
              <Text style={{fontSize : 15, fontWeight : 600}}>Have agreate day a head</Text>
              </View>
          </View>
          <TouchableOpacity style={styles.search}>
            <Image style={styles.img} source={require('../assets/Frame (1).png')} />
            <TextInput onChangeText={(txt) => setSearchText(txt)} style={{ width: 250, height: 50 }} placeholder="Search" />
          </TouchableOpacity>
        </View>
      <FlatList style={styles.FlatList}
        data={data}
        renderItem={({ item }) => {
          return (
            <View style={styles.viewitem}>
                <View style={{gap:15, flexDirection:'row'}}>
                <TouchableOpacity style={{paddingLeft:30}}>
                <Image  style={styles.img} source={require('../assets/Frame (2).png')}/>
                </TouchableOpacity>
                <Text style={{fontWeight:'bold'}}>{item.name}</Text>
                </View>
              <TouchableOpacity style={{paddingRight:30}}
                onPress={()=>{
                navigation.navigate('Seen3')
                }}>
                <Image style={styles.img} source={require('../assets/Frame (3).png')}/>
              </TouchableOpacity>
            </View>
          );
        }}
      />
      <TouchableOpacity style={styles.add}
       onPress={()=>{
        navigation.navigate('Seen3',{name})
      }}
      >
      <Ionicons name="add" size={45} color="white" />
      </TouchableOpacity> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    width:'100%',
    height: '20%'
  },
  search:{
    flex:1,
    width: '85%',
    height: 50,
    borderWidth: 1,
    borderRadius: 15,
    gap: 10,
    margin:15,
    marginLeft:25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  avt:{
    width: 60,
    height: 60,
    borderRadius : 50,
    marginLeft:90
  },
  viewitem:{
    width: '94%',
    height: "50px",
    borderRadius: 10,
    margin: 10,
    flexDirection:'row',
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#9095A0",
  },
  img:{
    width: "20px",
    height: "20px",
    marginLeft:10,
    resizeMode: "contain",
  },
  btnsearch:{
    width: 300,
    height: 50,
    borderWidth: 1,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
    marginTop: 30,
  },
  FlatList:{
    width:'100%',
    height: '60%',
  },
  add:{
    width:69,
    height:69,
    borderRadius:100,
    backgroundColor:'#00BDD6', 
    justifyContent:'center',
    alignItems:'center',
  }
});
