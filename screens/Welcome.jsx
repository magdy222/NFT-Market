import { View, StyleSheet, Image, Animated, Text, SafeAreaView } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { COLORS, FONTS, SIZES } from '../constants/theme'
import nft04 from '../assets/images/nft04.jpg'
import nft16 from '../assets/images/nft16.jpg'
import nft08 from '../assets/images/nft08.jpg'
import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native'

const Welcome = () => {
  const navigation = useNavigation()

  const duration = 1000;
  const delay = duration + 400

  const moveImageAnimation = useRef(new Animated.ValueXY({ x: 100, y: 100 })).current
  const fadeImageAnimation = useRef(new Animated.Value(0)).current

  const fadeTextAnimation = useRef(new Animated.Value(0)).current
  const moveButtonAnimation = useRef(new Animated.Value(1)).current

  const pressHandler = () => {
    navigation.navigate("Home")
  }

  const imagesAnimationHandler = () => {
    Animated.sequence([
      Animated.timing(fadeImageAnimation, {
        toValue: 1,
        duration,
        useNativeDriver: true,
      }),
      Animated.spring(moveImageAnimation, {
        toValue: { x: 0, y: 0 },
        duration,
        useNativeDriver: true,
      }),
    ]).start()
  }

  const textAnimationHandler = () => {
    Animated.timing(fadeTextAnimation, {
      toValue: 1,
      duration,
      delay,
      useNativeDriver: true,
    }).start()
  }

  const buttonAnimationHandler = () => {
    Animated.spring(moveButtonAnimation, {
      toValue: 0,
      friction: 4,
      delay,
      useNativeDriver: true,
    }).start()
  }

  useEffect(() => {
    imagesAnimationHandler()
    textAnimationHandler()
    buttonAnimationHandler()
  }, [imagesAnimationHandler, textAnimationHandler, buttonAnimationHandler])

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.imageContainer,
          {
            opacity: fadeImageAnimation,
            transform: moveImageAnimation.getTranslateTransform(),
          },
        ]}
      >
        <View style={styles.imageCard}>
          <Image source={nft04} style={styles.image} />
        </View>
        <View style={[styles.imageCard, {top: SIZES.medium + 17}]}>
          <Image source={nft16} style={styles.image} />
        </View>
        <View style={styles.imageCard}>
          <Image source={nft08} style={styles.image} />
        </View>
      </Animated.View>
      <Animated.View
        style={[
          styles.textContainer,
          {
            opacity: fadeTextAnimation,
          },
        ]}
      >
        <Text style={styles.mainText}>Discover, Collect, and Own Digital Masterpieces</Text>
        <Text style={styles.subText}>Where Art Meets the Blockchain</Text>
      </Animated.View>
      <Animated.View
        style={[
          styles.buttonContainer,
          {
            transform: [
              {
                translateY: moveButtonAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 200],
                }),
              },
            ],
          },
        ]}
      >
        <Button
          styleButton={styles.buttonStyle}
          styleText={styles.buttonTextStyle}
          title="Get Started"
          pressHandler={pressHandler}
        />
      </Animated.View>
    </SafeAreaView>
  )
}

export default Welcome


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.bg,
        paddingHorizontal: SIZES.small + 30 
    },
    imageContainer: {
        flexDirection: 'row',
        top: - SIZES.medium,
        gap: SIZES.small,
        
    },
    image:{
      width: 200,
      height: 200,
      borderRadius: SIZES.medium
    },
    imageCard:{
      borderRadius: SIZES.medium + 10,
      padding: SIZES.small,
      backgroundColor: COLORS.cardBg
    },
    textContainer:{
      margin: SIZES.small,
      padding: SIZES.small,
      marginVertical: SIZES.xLarge + 6,
      
    },
    mainText:{
      fontSize: SIZES.xLarge + 5,
      fontFamily: FONTS.bold,
      color: COLORS.white,
      textAlign: 'center'
    },
    subText:{
      fontFamily: FONTS.light,
      color: COLORS.white,
      textAlign: 'center',
      marginTop: SIZES.large,
    },
    buttonContainer:{
      marginVertical: SIZES.medium,
      position: 'absolute',
      bottom: SIZES.xLarge + 10
    },
    buttonStyle:{
      width: 240,
      alignItems: 'center',
      backgroundColor: COLORS.second,
      padding: SIZES.small + 4 ,
      borderRadius: SIZES.medium,

    },
    buttonTextStyle:{
      color: COLORS.white,
      fontFamily: FONTS.semiBold,
      fontSize: SIZES.large,
      textAlign: 'center',
    }

})