import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import ProductScreen from '../../screen/ProductScreen';
import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler';
import QuantitySelector from '../QuantitySelector';

interface ProductItemProps {
    item: {
        id: string;
        name: string;
        image: string;
        unit_price: number;
        stock: number;
    };
}

const ProductItem = ({item, quantity, setQuantity, value}: ProductItemProps) => {

    const handleChange = () => {
        setValue = (value + 1)
    } 

    const Navigation = useNavigation();

    const onPress = () => {
        Navigation.navigate('ProductScreen', 
        {id: item.id,
        });
    }
 
  return (
      <Pressable onPress={onPress} style={styles.root}>
                <Image style={styles.image} source={{ uri: item.image }} />

                <View style={styles.rightContainer}>
                    <Text style={styles.title} numberOfLines={3}>{item.name}</Text>
                    <Text style={styles.price}>{item.unit_price}</Text>
                    <Text style={styles.stock}>Stock: {item.stock}</Text>
                    <FontAwesome name="heart" size={18} color={"red"}/>
                    <QuantitySelector quantity={quantity} setQuantity={setQuantity}/>
                    <TouchableOpacity style={styles.button} onPress={() => handleChange}>
                        <Text style={styles.text}>Add to cart</Text>
                    </TouchableOpacity>
                </View>
    </Pressable>
  );
};

export default ProductItem;