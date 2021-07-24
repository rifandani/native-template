import 'react-native';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
// files
import Navigation from '../src/navigation';

// FIXME: test still does not works, possible fix:
// react-native/@jest/create-cache-key-function
// downgrade jest to 26
describe('Navigation', () => {
  it('given Navigation, should render ReduxScreen', async () => {
    const {findByText, findAllByText, debug} = render(
      <Navigation colorScheme="light" />,
    );

    debug();

    const titleScreen = await findByText('Counter App');
    const items = await findAllByText(/Item number/);

    expect(titleScreen).toBeTruthy();
    expect(items).toHaveLength(10);
  });

  it('given Navigation, clicking on RQuery should render RQueryScreen', async () => {
    const {findByText, debug} = render(<Navigation colorScheme="light" />);

    debug();

    fireEvent(await findByText('Item number 5'), 'press');

    const newHeader = await findByText('Showing details for 5');
    const newBody = await findByText('the number you have chosen is 5');

    expect(newHeader).toBeTruthy();
    expect(newBody).toBeTruthy();
  });
});
