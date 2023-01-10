import { View, Text, TextInput,StyleSheet, Button, FlatList } from 'react-native'
import React, { useContext, useState } from 'react'
import { favoritesContext } from '../../../context/FavoritesContext'
import { favoritesStorageHelper } from '../../../library/helpers/FavoritesStorageHelper'
const WorkScreen = ({navigation}) => {
const [title,settitle]=useState('')

const {toDoes,setToDoes}=useContext(favoritesContext)

const AddTitle=()=>{
  let text={
    title:title,
    starred:false
  }
  setToDoes([...toDoes,text])
  favoritesStorageHelper.set(setToDoes([...toDoes,text]))
}
const renderItem=(item)=>{
  <Text>{item.title}</Text>
}
  return (
    <View>
     <View style={styles.InputView}>
     <TextInput onChangeText={settitle} style={styles.Input} placeholder='Title'></TextInput>
     </View>
     <View style={styles.InputView}>
      <Button onPress={()=>AddTitle()} style={styles.ButtonWork} title='Add'></Button>
     </View>
     
     <FlatList 
     data={toDoes}
     renderItem={renderItem}
     />
     
    </View>
  )
}

const styles= StyleSheet.create({
  Input:{
    width:300,
    height:50,
    borderWidth:2,
    borderRadius:18
  },
  InputView:{
    marginTop:20,
    alignItems:'center'
  },
  ButtonWork:{
    width:300,
    height:50
  }
})
export default WorkScreen;