import React from 'react';
import { View } from 'react-native';
import { Typography } from '../../UI/Typography';
import { HeaderStyles as styles } from './HeaderStyles';

type HeaderTypes = {
  title: string;
};

export const Header = ({ title }: HeaderTypes) => {
  return (
    <View style={styles.main}>
      <Typography type="h1">{title}</Typography>
    </View>
  );
};
