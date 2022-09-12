import React from 'react';
import { Text } from 'react-native';
import { TypographyStyles as styles } from './TypographyStyles';

type TypographyTypes = {
  children: string;
  type?: 'h1';
  color?: string;
  size?: number;
  font?: 'bold' | 'light' | 'medium' | 'thin';
};

export const Typography = ({
  children,
  type,
  color,
  size,
  font,
}: TypographyTypes) => {
  const additionalStyles = [];
  if (type === 'h1') additionalStyles.push(styles.h1);
  color && additionalStyles.push({ color });
  font && additionalStyles.push(styles[font]);
  size && additionalStyles.push({ fontSize: size });

  return <Text style={[styles.text, ...additionalStyles]}>{children}</Text>;
};
