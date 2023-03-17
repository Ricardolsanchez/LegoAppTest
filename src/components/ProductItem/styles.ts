import {StyleSheet} from 'react-native'

const styles = StyleSheet.create ({
    root: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 10,
        backgroundColor: '#fff',
        marginVertical: 5
    },
    image: {
        flex: 2,
        height: 150,
        resizeMode: 'contain'
    },

    rightContainer: {
        padding: 10,
        flex: 3,

    },
    title: {
        fontSize: 18,
    },
    price: {
        fontSize: 18,
    },

    oldPrice: {
       fontSize: 12,
       fontWeight: 'normal',
       textDecorationLine: 'line-through',
    },
    stock: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    button: {
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        marginTop: 5,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        width: 80
    },
    text: {
        fontSize: 8,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white'
    },
    quantity: {
        color: '#007eb9'
    }
})

export default styles;