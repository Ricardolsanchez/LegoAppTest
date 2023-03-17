import { View, Text, Button, Image, StyleSheet } from 'react-native'
import React from 'react';
import QuantitySelector from '../QuantitySelector';

type CartItemProps ={
    name: string,
    image: string,
    unit_price: number,
    stock: number,
    quanti: number
}


const CartItem = ({name, image, unit_price, stock, quanti}: CartItemProps) => {
  return (
    <View>
      <View>
        <Text style={styles.amount}>{quanti}</Text>
        
        <Text style={styles.text}>{name}</Text>
      </View>
      
      <Text>{unit_price}</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
      width: "100%",
      height: 60,
      resizeMode: "contain",
      borderRadius: 10
    },
    text: {
      lineHeight: 18,
      padding: 10,
      fontSize: 20
    },
    amount: {
      fontSize: 20,
      marginLeft: 20,
      marginTop: 40,
    }
  })

export default CartItem;