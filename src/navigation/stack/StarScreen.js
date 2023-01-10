import { View, Text, Button,StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { favoritesStorageHelper } from '../../../library/helpers/FavoritesStorageHelper'

const StarScreen = ({navigation}) => {

const [favorites,setfavorites]=useContext()

  return (
    <View>
      <Button style={StyleSheet.ButtonEmpty} title='Empty'></Button>
    </View>
  )
}



const styles=StyleSheet.create({
  ButtonEmpty:{
    width:200,
    height:50
  }
})

export default StarScreen