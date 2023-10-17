import { View, SafeAreaView , StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS } from '../constants'
import NFTImage from './NFTImage'
import Avatars from './Avatars'
import NFTTitle from './NFTTitle'
import NFTInfo from './NFTInfo'
import { useNavigation } from '@react-navigation/native'

const NFTCard = ({NFTData}) => {
      
      const navigation = useNavigation()

      const pressHandler = () => {
          navigation.navigate('NFTDetails', {NFTData})
      }

  return (
    <SafeAreaView style={styles.container}>
       <TouchableOpacity onPress={pressHandler}>
          <NFTImage image={NFTData.image} imageStyle={styles.imageStyles}/>
       </TouchableOpacity>
       <View style={styles.cardTop}>
          <Avatars avatar={NFTData.avatars}/>
       </View>
       <View style={styles.cardBottom}>
        <NFTTitle 
          name={NFTData.name}
          creator={NFTData.creator}
          date={NFTData.date}
        />
        <View>
            <NFTInfo
                comments={NFTData.comments}
                price={NFTData.price}
                views={NFTData.views}
                love
            />
        </View>
       </View> 
    </SafeAreaView>
  )
}

export default NFTCard

const styles = StyleSheet.create({
    container:{
        backgroundColor: COLORS.cardBg,
        marginBottom: SIZES.large, 
        borderRadius: SIZES.medium,
        marginHorizontal: SIZES.medium
    },
    imageStyles:{
        width: '100%',
        height: 300,
        borderRadius: SIZES.medium,
        marginBottom: SIZES.medium
    },
    cardTop:{
        marginTop: -30, 
        paddingHorizontal: SIZES.medium,
        width: '100%'
    },
    cardBottom:{
        paddingHorizontal: SIZES.medium,
        width: '100%',
        paddingVertical: SIZES.large,
    },
  })