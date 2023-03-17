import { Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

interface ButtonProps {
  text: string;
  onPress: () => void;
}

const Button = ({ text, onPress }: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={styles.root}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FF5733',
    justifyContent: 'center',
    margin: 5,
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#d97818'
  },
  text: {
    fontSize: 16,
    color: '#fff',
  }
});

export default Button;