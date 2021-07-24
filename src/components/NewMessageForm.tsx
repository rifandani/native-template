import React, {useState} from 'react';
import {Button, TextInput, View} from 'react-native';

type Props = {
  onSend?: (inputText: string) => void;
};

export default function NewMessageForm({onSend}: Props) {
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (onSend) {
      onSend(inputText);
    }
    setInputText('');
  };

  return (
    <View>
      <TextInput
        testID="messageText"
        value={inputText}
        onChangeText={setInputText}
      />

      <Button testID="sendButton" title="Send" onPress={handleSend} />
    </View>
  );
}
