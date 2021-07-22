import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
//files
import Navigation from './src/navigation';
import useColorScheme from './src/hooks/useColorScheme';

const App: React.FC = () => {
  // theme
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <Navigation colorScheme={colorScheme} />
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
      />
    </SafeAreaProvider>
  );
};

export default App;
