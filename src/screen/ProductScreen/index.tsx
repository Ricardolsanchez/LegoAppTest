import React from 'react';
import { Text, StyleSheet, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import Button from '../../components/Button';
import {connect} from 'react-redux';
import { useRoute, useNavigation } from '@react-navigation/native';
import products from '../../data/products';


interface ProductProps {
  product: CartItem;
  cartReducer: CartState;
  onAddItem: Function;
}

const ProductScreen = ({handleChange}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const legoId = route.params?.id;
  const lego = products.find((l) =>l.id === legoId);

  if(!lego) {
    return (<Text>lego not found!</Text>
    )
  }
  return (
    <View>
      <Image source={{ uri:lego.image }} style={styles.image} />
      <Text style={styles.title}>{lego.name}</Text>
      <Text style={styles.title}>{lego.unit_price}</Text>
      <Text style={styles.title}>Stock: {lego.stock}</Text>
      <Button 
      text={'Add to cart'} 
      onPress={() => onAddItem(product)}/>
      <Button 
      text={'Buy now'} 
      onPress={() => {
        console.warn('Buy now')}} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {},
  image: {
    width: "100%",
    height: 300,
  },
  title: {},
})

export default ProductScreen; 
