import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS } from '../constants'
import NFTDate from './NFTDate'
import Ionicons from '@expo/vector-icons/Ionicons';

const NFTTitle = ({name, creator, date}) => {
  return (
    <View >
        <View>
            <Text style={styles.nameStyle}>{name}</Text>
        </View>
        <View style={styles.creatorDateContainer}>
           <View style={styles.creatorContainer}>
               <Text style={styles.creatorStyle}>{creator}</Text>
               <Ionicons name="md-checkmark-circle" size={20} color="#4F46E5" />
           </View>
            <NFTDate date={date}/>
        </View>
    </View>
  )
}

export default NFTTitle

const styles = StyleSheet.create({
    nameStyle:{
        color: COLORS.black,
        fontSize: 20,
        fontFamily: FONTS.bold,
    },
    creatorDateContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 5
    },
    creatorContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
    },
    creatorStyle:{
        color: COLORS.black,
        fontSize: 14,
        fontFamily: FONTS.semiBold,
    }
})