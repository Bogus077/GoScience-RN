import React from 'react';
import { View } from 'react-native';
import { COLORS } from '../../../../assets/helpers/colors';
import { Typography } from '../../UI/Typography';
import { MembersSumStyles as styles } from './MembersSumStyles';

type MembersSumTypes = {
  number: string;
  label: string;
};

export const MembersSum = ({ number, label }: MembersSumTypes) => {
  return (
    <View style={styles.sum__item}>
      <View style={styles.sum__number}>
        <Typography size={20} font="bold">
          {number}
        </Typography>
      </View>
      <View>
        <Typography font="medium" color={COLORS.text.secondary}>
          {label}
        </Typography>
      </View>
    </View>
  );
};
