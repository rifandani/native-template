import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';
//files
import Navigation from './src/navigation';
import useColorScheme from './src/hooks/useColorScheme';
import store from './src/lib/redux/store';

const App: React.FC = () => {
  // theme
  const colorScheme = useColorScheme();

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar
          barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
        />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
