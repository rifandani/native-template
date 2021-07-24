import React from 'react';
import {FlatList, Text, View} from 'react-native';
// files
import useGetUsers from '../../hooks/useGetUsers';

const UserList = () => {
  const {isLoading, data, error} = useGetUsers();

  return (
    <View>
      {isLoading ? <Text>Loading...</Text> : null}
      {error ? <Text>{error.message}</Text> : null}
      {data ? (
        <FlatList
          data={data}
          renderItem={({item}) => <Text>{item.name}</Text>}
          keyExtractor={item => item.id.toString()}
        />
      ) : null}
    </View>
  );
};

export default UserList;
