import React from 'react';
import {Button, Text, View} from 'react-native';
// files
import {useAppDispatch, useAppSelector} from '../../lib/redux/store';
import {
  counterSelector,
  decrement,
  increment,
} from '../../lib/redux/slices/counter';

export default function Counter() {
  const {count} = useAppSelector(counterSelector);
  const dispatch = useAppDispatch();

  const onIncrement = () => {
    dispatch(increment());
  };

  const onDecrement = () => {
    dispatch(decrement());
  };

  return (
    <View>
      <Text>{count}</Text>

      <Button title="increment" onPress={onIncrement} />
      <Button title="decrement" onPress={onDecrement} />
    </View>
  );
}
