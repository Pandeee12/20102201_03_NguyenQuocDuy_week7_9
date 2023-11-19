import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TouchableOpacity,TextInput} from 'react-native';
import { useState } from 'react';
export default function Seen3({navigation,route}) {
    const name =  route.params.name
    const [inputjob,setinputjob] = useState('')
  return (
    <View style={styles.container}>
        <View style={styles.title}>
          <View style={{flexDirection : 'row', justifyContent:'space-between',alignItems:'center'}}>
              <Image style={styles.avt} source={require('../assets/Rectangle.png')}/>
              <View>
              <Text style={{fontSize : 17, fontWeight : 750, paddingLeft : 10}}>Hi {name}</Text>
              <Text style={{fontSize : 15, fontWeight : 600}}>Have agreate day a head</Text>
              </View>
              <TouchableOpacity style={styles.back}
              onPress={()=> navigation.navigate('Seen2')} > 
              <Image style={{width:'40px',height:'40px',marginRight:10, justifyContent:'center'}} source={require("../assets/Icon Button 11.png")}/>
              </TouchableOpacity>
          </View>
        </View>
        <Text style={{fontSize:24,fontWeight:'bold',marginTop:30,marginBottom:25}}>
        ADD YOUR JOB
      </Text>
      <TouchableOpacity style={styles.inputjob}>
            <Image style={styles.img} source={require('../assets/Frame (4).png')} />
            <TextInput onChangeText={setinputjob} style={{ width: 250, height: 50 }} placeholder="input your job" />
        </TouchableOpacity>
        <TouchableOpacity
       onPress={()=>{
        navigation.navigate('Seen2',{inputjob})
      }}
      style={{backgroundColor:'#00BDD6', borderRadius:10,width:220,height:45,justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:'white'}}>
            FINISH ->
        </Text>
      </TouchableOpacity>
      <View style={{width:"100%",height:'50%'}}>
      <Image style={styles.imgfinish} source={require('../assets/book.png')} />
      </View>
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
    height: '10%'
  },
  inputjob:{
    width: '85%',
    height: '8%',
    borderWidth: 1,
    borderRadius: 7,
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
    marginLeft:40
  },
  img:{
    width: "20px",
    height: "20px",
    marginLeft:10,
    resizeMode: "contain",
  },
  imgfinish:{
    width: 350,
    height:350,
    resizeMode:'contain',
    margin:20
  }

});
