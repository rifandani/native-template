import React from 'react';
import {StyleSheet, View} from 'react-native';
// files
import OtomaText from '../components/common/OtomaText';
import UserList from '../components/rquery/UserList';
import Colors from '../constants/Colors';
import {ThemedView} from '../components/common/Themed';

export default function RQueryScreen() {
  return (
    <ThemedView style={styles.container}>
      <OtomaText
        style={styles.title}
        lightColor={Colors.light.text}
        darkColor={Colors.dark.text}>
        useQuery
      </OtomaText>

      <View style={styles.separator} />

      <UserList />
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
