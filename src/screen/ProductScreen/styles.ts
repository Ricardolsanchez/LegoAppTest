import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

   root: {
      padding: 10,
      backgroundColor: 'White',
   },
   price: {
      fontSize: 18,
      fontWeight: 'bold',
   },
   oldPrice: {
      fontSize: 12,
      fontWeight: 'normal',
      textDecorationLine: 'line-through'
   },

   title: {

   },

   description: {
      lineHeight: 18,
   },
   button: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
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
   }
});

export default styles;