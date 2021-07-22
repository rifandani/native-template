import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
// files
import OtomaText from '../components/OtomaText';
import Colors from '../constants/Colors';
import useGetUsers from '../hooks/useGetUsers';
import {ThemedView} from '../components/Themed';

export default function RQueryScreen() {
  const {isLoading, data, error} = useGetUsers();

  return (
    <ThemedView style={styles.container}>
      <OtomaText
        style={styles.title}
        lightColor={Colors.light.text}
        darkColor={Colors.dark.text}>
        useQuery
      </OtomaText>

      <View style={styles.separator} />

      {isLoading ? <Text>Loading...</Text> : null}
      {error ? <Text>{error.message}</Text> : null}
      {data ? (
        <FlatList
          data={data}
          renderItem={({item}) => <Text>{item.name}</Text>}
          keyExtractor={item => item.id.toString()}
        />
      ) : null}
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
