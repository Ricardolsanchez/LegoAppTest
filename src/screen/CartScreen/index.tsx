import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { connect } from 'react-redux';
import Axios from 'axios';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

type StockData = {
  id: number,
  name: string,
  unit_price: number,
  stock: number,
  image: string
}

const CartScreen: React.FC = (props) => {
  const [stockData, setStockData] = useState<StockData[]>([]);
  const [quantity, setQuantity] = useState('');
  const updateStockData = async (stockData: StockData): Promise<void> => {
      const response = await Axios.get('https://1be9db56-c889-466d-9c12-cba178414901.mock.pstmn.io/buy', stockData);
      console.log(response.data);
  };

  const handleUpdate = async () => {
    const stockData = { name, quantity: parseInt(quantity, 10) };
    await updateStockData(stockData);
  };


  return (
    <View>
      <Text>Your Products Here!</Text>
      <Button
      onPress={handleUpdate}
      text={'Buy Now'}         
      />
        <Text style={styles.grandTotal}>Grand Total= 400$</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  grandTotal:{
    marginTop: "100%",
    marginLeft: 20,
    fontSize: 30,
    fontWeight: "bold"
  }
})

export default CartScreen;