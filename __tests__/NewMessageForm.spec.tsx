import 'react-native';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native'; // Note: test renderer must be required after react-native
import {ReactTestInstance} from 'react-test-renderer';
// files
import NewMessageForm from '../src/components/NewMessageForm';

describe('NewMessageForm', () => {
  describe('clicking send', () => {
    const messageText = 'Hello world';
    const sendHandler = jest.fn();
    let getByTestId: (testID: string | RegExp) => ReactTestInstance;

    beforeEach(() => {
      ({getByTestId} = render(<NewMessageForm onSend={sendHandler} />));

      fireEvent.changeText(getByTestId('messageText'), 'Hello world');
      fireEvent.press(getByTestId('sendButton'));
    });

    it('clears the message field', () => {
      expect(getByTestId('messageText').props.value).toEqual('');
    });

    it('calls the send handler', () => {
      expect(sendHandler).toHaveBeenCalledWith(messageText);
    });
  });
});
