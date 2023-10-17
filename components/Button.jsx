import {TouchableOpacity, Text } from 'react-native'
import React from 'react'

const Button = ({pressHandler, Icon, title, styleText,styleButton}) => {

   const RenderIconOrTextButton = () => {
    
    if(!Icon){
        return (<Text style={styleText}>{title && title}</Text>)
    }else{
        return (Icon)
    }
   }

  return (
    <TouchableOpacity onPress={pressHandler} style={styleButton}>
       <RenderIconOrTextButton/>
    </TouchableOpacity>
  )
}

export default Button