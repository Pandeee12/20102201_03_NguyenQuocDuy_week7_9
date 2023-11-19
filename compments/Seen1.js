import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TouchableOpacity,TextInput } from 'react-native';
import { useState } from 'react';
export default function Seen1({navigation}) {
    const [name,setName] = useState('')
  return (
    <View style ={styles.container}>
    <Image style={styles.image1} source={require('../assets/book.png')}/>
    <Text style={styles.text1}>
        MANAGE YOUR <br/> TASK 
    </Text>
    <TouchableOpacity style={styles.btn1}>
    <Image style={styles.image2} source={require('../assets/Frame.png')}/>
    <TextInput style={styles.textInput} onChangeText={setName} placeholder='Enter your name'/>
    </TouchableOpacity>
    <TouchableOpacity
    onPress={()=>{
      navigation.navigate('Seen2',{name})
    }}
    style={styles.btn2}>
    <Text style={styles.text2}>
    GET STARTED -
    </Text>
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
  image1:{
    width: 270,
    height:270,
    resizeMode:'contain',
    marginBottom: 30
  },
  text1:{
    fontWeight:700,
    fontSize:24, 
    lineHeight:36,
    textAlign:'center', 
    color: '#8353E2', 
  }, 
  btn1:{
    width:300,
    height:50,  
    borderWidth:1, 
    borderRadius:15, 
    gap:10,
    marginTop:30,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
   },
   image2:{
    width:30,
    height:30,
    resizeMode:'contain',
},
textInput:{
    width:250,
    height:50,
},
btn2:{
    width:200,
    height:50,
    borderRadius:15, 
    gap:10,
    marginTop:30, 
    backgroundColor:'#00BDD6', 
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
},
text2:{
    fontSize:19, 
    lineHeight:36,
    color: 'white', 
    textAlign:'center', 
}
});
