import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
// files
import OtomaText from '../components/OtomaText';
import Colors from '../constants/Colors';
import {ThemedView} from '../components/Themed';
import {useAppDispatch, useAppSelector} from '../lib/redux/store';
import {
  counterSelector,
  decrement,
  increment,
} from '../lib/redux/slices/counter';

export default function ReduxScreen() {
  const {count} = useAppSelector(counterSelector);
  const dispatch = useAppDispatch();

  const onIncrement = () => {
    dispatch(increment());
  };

  const onDecrement = () => {
    dispatch(decrement());
  };

  return (
    <ThemedView style={styles.container}>
      <OtomaText
        style={styles.title}
        lightColor={Colors.light.text}
        darkColor={Colors.dark.text}>
        Counter App
      </OtomaText>

      <View style={styles.separator} />

      <Text>{count}</Text>

      <Button title="increment" onPress={onIncrement} />
      <Button title="decrement" onPress={onDecrement} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
