import React from 'react';
import { Text } from 'react-native';
import { TypographyStyles as styles } from './TypographyStyles';

type TypographyTypes = {
  children: string;
  style?: 'h1';
};

export const Typography = ({ children, style }: TypographyTypes) => {
  const additionalStyles = [];
  if (style === 'h1') additionalStyles.push(styles.h1);

  return <Text style={[styles.text, ...additionalStyles]}>{children}</Text>;
};
