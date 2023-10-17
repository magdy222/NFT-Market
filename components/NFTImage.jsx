import { View, StyleSheet, Image, StatusBar } from 'react-native'
import React from 'react'
import Button from './Button'
import { COLORS, SIZES } from '../constants'
import { AntDesign } from '@expo/vector-icons';

const NFTImage = ({image, imageStyle, love, arrow, pressHandler}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={imageStyle} resizeMode='cover'/>
      {love && 
          <Button styleButton={styles.buttonHeart}
              Icon={<AntDesign name="heart" size={18} color={COLORS.second} />}
          />
        } 
      {arrow && 
          <Button styleButton={styles.arrow}
              Icon={<AntDesign name="arrowleft" size={18} color={COLORS.second} />}
              pressHandler={pressHandler}
          />
        } 
    </View>
  )
}

export default NFTImage

const styles = StyleSheet.create({
    container:{
        position: 'relative',
        width: '100%',
    },
    buttonHeart:{
      borderRadius: 20,
      backgroundColor: COLORS.black,
      padding:SIZES.small -2,
      borderWidth: 1,
      borderColor: COLORS.second,
      position: 'absolute',
      top: StatusBar.currentHeight + 10,
      right: 15
    },
    arrow:{
      backgroundColor: COLORS.white,
      padding:SIZES.small -2,
      borderWidth: 1,
      borderColor: COLORS.second,
      position: 'absolute',
      top: StatusBar.currentHeight + 10,
      left: 15,
      borderRadius: 20,
    }
})