import { View, Text, Pressable, StyleSheet } from 'react-native'
import React, { useState } from 'react';

type Props = {
  count: number;
}

const QuantitySelector: React.FC<Props> = () => {

  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };

  const less = () => {
    if (count > 0) {
      setCount(count -1);
    }
  };

  return (
    <View style={styles.root}>
      <Pressable onPress={less} style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </Pressable>

      <Text style={styles.quantity}>{count}</Text>

      <Pressable onPress={add} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWith: 1,
    borderColor: '#e3e3e3',
    width: 130,
  },
  button: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d1d1d1'
  },
  buttonText: {
    fontSize: 18,
  },
  quantity: {
    color: '#007eb9'
  }
})

export default QuantitySelector;