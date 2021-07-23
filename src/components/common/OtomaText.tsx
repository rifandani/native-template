import React from 'react';
// files
import {ThemedText, TextProps} from './Themed';

export default function OtomaText(props: TextProps) {
  const {style, ...otherProps} = props;

  const fontFamily = {fontFamily: 'OtomanopeeOne-Regular'};

  return <ThemedText style={[style, fontFamily]} {...otherProps} />;
}
