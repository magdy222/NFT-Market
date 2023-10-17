import { View, SafeAreaView, StyleSheet, Text, Animated } from 'react-native'
import React, { useEffect, useRef , useState} from 'react'
import {DATA, COLORS, SIZES, FONTS} from '../constants'
import NFTCard from '../components/NFTCard'
import {FlashList} from '@shopify/flash-list'
import NFTSearch from '../components/NFTSearch'

const Home = () => {

  const [nftData, setNftData] = useState(DATA)
  
  const moveSearchAnimation = useRef(new Animated.Value(0)).current
  const searchHandler = (value) =>{
    if(value){
      const filteredData = DATA.filter((nft)=>{
        return nft.name.toLowerCase().includes(value.toLowerCase())
    })
    setNftData(filteredData)
    }else{
      setNftData(DATA)
    }
  }

  const NotFound = () =>{
    return(
      <View style={styles.notFoundContainer}>
        <Text style={styles.notFoundText}>Oops...!</Text>
        <Text style={styles.notFoundText}>Not Found</Text>
      </View>
    )
  }
  
  const moveAnimationHandler = () => {
    Animated.spring(
      moveSearchAnimation,
      {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }
    ).start()
  }

  useEffect(() => {
    moveAnimationHandler()
  }, [moveAnimationHandler])

  return (
    <SafeAreaView  style={styles.container}>
      <View style={{flex:1}}>
        <Animated.View style={{
          top: -100,
          transform: [
            {
              translateY: moveSearchAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 100],
              })
            }
          ]
        }}>
            <NFTSearch searchHandler={searchHandler}/>
        </Animated.View>


        {!nftData.length ? (<NotFound/>) : (
          <FlashList
          data={nftData}
          renderItem={({item}) => <NFTCard NFTData ={item} /> }
          keyExtractor={(item) => item.id} 
          estimatedItemSize={200}
      />
        )}
        
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: COLORS.bg
  },
  notFoundContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  notFoundText:{
    fontSize:30,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    marginTop:10
  }
})