import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native'; // Note: test renderer must be required after react-native
// files
import Hello from '../components/Hello';

describe('Hello', () => {
  it('renders the correct message', () => {
    const {queryByText} = render(<Hello />);

    expect(queryByText('Hello World')).not.toBeNull();
  });
});
