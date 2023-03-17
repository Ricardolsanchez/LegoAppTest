import React from 'react'
import { View, StyleSheet, FlatList, Image, TouchableOpacity, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductItem from '../../components/ProductItem'
import products from '../../data/products';

type Props = {
    count: number
}

const HomeScreen = ({ navigation}: Props) => {

    return (
        <SafeAreaView>
            <View style={styles.page}>
            <View>
                <Image
                    style={styles.carti}
                    source={require('../../assets/cart.png')}
                />
                
                <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}><Text style={styles.textCart}>Cart</Text></TouchableOpacity>
            </View>
            <View style={styles.root}>
                <Image
                    style={styles.image}
                    source={require('../../assets/profile.jpg')}
                />
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={styles.text}>Log out</Text></TouchableOpacity>

            {/* Render Product Component*/}
            <FlatList
                data={products}
                renderItem={({ item }) => <ProductItem item={item} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
        
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    page: {
        padding: 10,
    },
    root: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 280,
        marginBottom: 10,
        borderColor: "#0000ff",
        borderWidth: 1,
    },
    text: {
        color: "blue",
        marginLeft: 375
    },
    cart: {
        fontWeight: "bold",
        top: 65,
        left: 20,
        color: "black"
    },
    carti: {
        top: 60,
        width: 20,
        left: 20,
        height: 20,
        flexDirection: "row"
    },
    textCart: {
        fontWeight: "bold",
        top: 70,
        left: 20,
        color: "black"
    }
})


export default HomeScreen;