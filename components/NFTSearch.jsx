import { View, Text, Image, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import avatar from '../assets/avatars/avatar02.jpg'
import { COLORS, FONTS } from '../constants'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const NFTSearch = ({searchHandler}) => {
  return (
    <View>
        <View style={styles.container}>
            <Image source={avatar} style={styles.avatarStyle}/>
            <View style={{marginTop:5}}>
                <Text style={styles.nameStyle}> Magdy Mofeed</Text>
                <Text style={styles.subTitleStyle} >Creator</Text>
            </View>
            <MaterialCommunityIcons name="check-decagram" size={24} color="white" style={{marginTop:-5}}/>
        </View>
        <View style={styles.saerchContainer}>
            <Feather name="search" size={24} color="black" />
            <TextInput
                placeholder="Search NFTs"
                placeholderTextColor={COLORS.black}
                style={styles.searchStyle}
                onChangeText={searchHandler}
            />
        </View>
    </View>
  )
}

export default NFTSearch

const styles = StyleSheet.create({
    container:{
        width:'100%',
        marginTop:70,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        gap:10

    },
    avatarStyle:{
        width: 50,
        height: 50,
        borderRadius: 50
    },
    nameStyle:{
        fontSize:20,
        fontFamily: FONTS.bold,
        color: COLORS.white
    },
    subTitleStyle:{
        fontSize:14,
        fontFamily: FONTS.regular,
        color: COLORS.white,
        marginLeft:5
    },
    saerchContainer:{
        width:'90%',
        height:50,
        flexDirection:'row',
        alignItems:'center',
        gap:20,
        backgroundColor: COLORS.cardBg,
        borderRadius: 10,
        marginLeft:20,
        marginTop:20,
        marginBottom:40,
        paddingHorizontal:20
    }
    ,searchStyle:{

        
        
    }
})