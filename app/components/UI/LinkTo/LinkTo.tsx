import React from 'react';
import { View } from 'react-native';
import { COLORS } from '../../../../assets/helpers/colors';
import { Typography } from '../Typography';
import { LinkToStyles as styles } from './LinkToStyles';

type LinkToTypes = {
  label: string;
  onPress: () => void;
  size?: number;
};

export const LinkTo = ({ label, onPress, size = 14 }: LinkToTypes) => {
  return (
    <View style={styles.main} onTouchEnd={onPress}>
      <Typography color={COLORS.orange} font="medium" size={size}>
        {label}
      </Typography>
    </View>
  );
};
