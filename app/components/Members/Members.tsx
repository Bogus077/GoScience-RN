import React from 'react';
import { View } from 'react-native';
import { MembersStyles as styles } from './MembersStyles';

type MembersTypes = {
  kids: string;
};

export const Members = ({ kids }: MembersTypes) => {
  return <View style={styles.main}>Header</View>;
};
