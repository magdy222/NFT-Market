import { View, Text , StyleSheet} from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS } from '../constants'



const MoreInfo = ({address, tokenId, tokenSt, blockchain}) => {


  return (
    <View >
      <View style={styles.container}>
        <Text style={styles.text}>Contract Address</Text>
        <Text style={styles.subText}>{address}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Token ID</Text>
        <Text style={styles.subText}>{tokenId}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Token Standard</Text>
        <Text style={styles.subText}>{tokenSt}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Blockchain</Text>
        <Text style={styles.subText}>{blockchain}</Text>
      </View>
    </View>
  )
}

export default MoreInfo

const styles = StyleSheet.create({
    container:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: 'rgba(255, 255, 255, 0.5)',
        borderBottomWidth: 1,
    },
    text:{
        fontSize: SIZES.medium,
        fontFamily: FONTS.bold,

    },
    subText:{
        fontSize: SIZES.medium,
        fontFamily: FONTS.semiBold,
        color: COLORS.white,
    }
})