import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Typography } from '../Typography';
import { BtnStyles as styles } from './BtnStyles';

type BtnTypes = {
  label: string;
  fullSize?: boolean;
  onPress: () => void;
};

export const Btn = ({ label, fullSize, onPress }: BtnTypes) => {
  return (
    <TouchableOpacity
      style={[styles.main, fullSize && { width: '100%' }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Typography color="white" size={16} font="medium">
        {label}
      </Typography>
    </TouchableOpacity>
  );
};
