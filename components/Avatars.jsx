import { View, Image, StyleSheet } from 'react-native'
import React from 'react'

const Avatars = ({avatar}) => {
  return (
    <View style={styles.container}>
       { avatar.map((avatar) => {
        return(
            <Image
                key={avatar.id}
                source={avatar.image}
                style={styles.avatar}
                resizeMode='contain'
            />
        )
       })}
    </View>
  )
}

export default Avatars

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 5,
  },
  avatar:{
    width: 40,
    height: 40,
    borderRadius: 40,
    marginLeft: -5,

  }
})