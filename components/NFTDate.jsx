import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../constants'

const NFTDate = ({date}) => {
  return (
    <View>
      <Text style={styles.dateStyle}>{date}</Text>
    </View>
  )
}

export default NFTDate

const styles = StyleSheet.create({
    dateStyle:{
        color: COLORS.black,
        fontSize: 12,
        fontFamily: FONTS.semiBold,
    }
})