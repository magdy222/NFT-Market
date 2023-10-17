import { View, Text , StyleSheet} from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS } from '../constants'
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Button from './Button'

const NFTInfo = ({comments, price, views, love}) => {
  return (
    <View style={styles.container}>
        <View style={styles.wrapper}>
            <Text style={styles.textStyle}>{views}</Text>
            <Entypo name="eye" size={18} color="white" />
        </View>
        <View style={styles.wrapper}>
            <Text style={styles.textStyle}>{comments}</Text>
            <MaterialCommunityIcons name="comment-text-multiple" size={18} color="white" />
        </View>
        <View style={styles.wrapper}> 
            <Text style={styles.textStyle}>{price}</Text>
            <MaterialCommunityIcons name="ethereum" size={18} color="white" />
        </View>
        {love && 
                <View>
                    <Button
                        Icon={<AntDesign name="heart" size={18} color={COLORS.second} />}
                        styleButton={styles.heartButton}
                    />
                </View>
                }
    </View>
  )
}

export default NFTInfo

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
        gap: 20
    },
    wrapper:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.second,
        paddingHorizontal: SIZES.small,
        paddingVertical: 5,
        borderRadius: 20,
        gap: 4,
        width: 70,
    },
    textStyle:{
        color: COLORS.white,
        fontSize: 14,
        fontFamily: FONTS.regular
    }, 
    heartButton:{
        borderRadius: 20,
        backgroundColor: COLORS.black,
        padding:SIZES.small -2,
        borderWidth: 1,
        borderColor: COLORS.second
    }
})