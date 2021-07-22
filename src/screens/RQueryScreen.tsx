import React from 'react';
import {StyleSheet, View} from 'react-native';
// files
import OtomaText from '../components/OtomaText';
import {ThemedView} from '../components/Themed';

export default function RQueryScreen() {
  return (
    <ThemedView style={styles.container}>
      <OtomaText style={styles.title}>useQuery</OtomaText>

      <View style={styles.separator} />
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
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
