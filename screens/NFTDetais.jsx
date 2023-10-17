import { View, Text, StyleSheet, SafeAreaView, Animated } from 'react-native'
import React, { useRef , useEffect}  from 'react'
import NFTImage from '../components/NFTImage'
import NFTTitle from '../components/NFTTitle'
import NFTInfo from '../components/NFTInfo'
import Avatars from '../components/Avatars'
import Button from '../components/Button'
import { COLORS, FONTS } from '../constants'
import MoreInfo from '../components/MoreInfo'

const NFTDetails = ({navigation, route}) => {

  const { NFTData } = route.params
  const moveAnimation = useRef(new Animated.Value(0)).current
  const fade = useRef(new Animated.Value(0)).current

  const pressHandler = () => {
    navigation.goBack()
  }

  const moveAnimationHandler = () => {
      Animated.spring(moveAnimation, {
              toValue: 1,
              friction: 6,
              tension: 0,
              useNativeDriver: true,
          }).start()
  }

  const fadeAnimationHandler = () => {
          Animated.timing(fade , {
              toValue: 1,
              duration: 1000,
              delay: 300,
              useNativeDriver: true,
          }).start()
  }

  useEffect(() => {
      moveAnimationHandler()
      fadeAnimationHandler()
  }, [moveAnimationHandler, fadeAnimationHandler])


  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={{ 
            flex: 1 ,
            transform: [
                {
                    translateY: moveAnimation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [200, 0 ],
                    })
                }
            ]
            }}>
          <NFTImage image={NFTData.image} imageStyle={styles.imageStyles}
            love
            arrow
            pressHandler={pressHandler}
          />
          <View style={{marginTop: -40, marginLeft: 10}}> 
              <Avatars avatar={NFTData.avatars}/>
          </View>
          <View style={styles.section}>
              <NFTTitle 
                name={NFTData.name}
                creator={NFTData.creator}
                date={NFTData.date}
              />
          </View>
          <View style={styles.section}>
              <NFTInfo
                comments={NFTData.comments}
                price={NFTData.price}
                views={NFTData.views}
              />
          </View>
          <View style={styles.section}>
              <MoreInfo
                address={NFTData.address}
                tokenId={NFTData.tokenId}
                tokenSt={NFTData.tokenSt}
                blockchain={NFTData.blockchain}
              />
          </View>
          <Animated.View style={[styles.bidContainer, {
            opacity: fade ,
            }]}>
              <View>
                  <Text style={styles.bidText}>Current Bid</Text>
                  <Text style={styles.bid}>{NFTData.topBid}$</Text>
              </View>
              
              <Button title='Place Bid' styleButton={styles.button} styleText={{textAlign: 'center', color: COLORS.white}}/>
          </Animated.View>
      </Animated.View>
    </SafeAreaView>
  )
}

export default NFTDetails

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: COLORS.bg,
  },
  imageStyles:{
    width: '100%',
    height: 350,
    borderRadius: 20,
  },
  section:{
    marginTop: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 20,
    padding: 15,
    },
  button:{
    backgroundColor: COLORS.second,
    padding: 18,
    borderRadius: 10,
    width: 100,
  },
  bidContainer:{
    marginTop: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 20,
    padding: 15,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bidText:{
    fontSize: 18,
    fontFamily: FONTS.semiBold,
    color: COLORS.black,
  },
  bid:{
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: COLORS.black,
    gap: 5,
    marginLeft: 10,
  }
})