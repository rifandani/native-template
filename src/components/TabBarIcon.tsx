import React from 'react';
import MIcon from 'react-native-vector-icons/MaterialIcons';

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
export default function TabBarIcon(props: {
  name: React.ComponentProps<typeof MIcon>['name'];
  color: string;
}) {
  const {name, color} = props;

  return (
    <MIcon
      size={30}
      // {...props}
      name={name}
      color={color}
    />
  );
}
