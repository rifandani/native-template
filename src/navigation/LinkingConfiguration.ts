/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import {LinkingOptions} from '@react-navigation/native';

export default {
  // NOTE: might be wrong
  prefixes: ['myapp://', 'https://myapp.com'],
  config: {
    screens: {
      Root: {
        screens: {
          Redux: {
            screens: {
              ReduxScreen: 'redux',
            },
          },
          RQuery: {
            screens: {
              RQueryScreen: 'rquery',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
} as LinkingOptions;
