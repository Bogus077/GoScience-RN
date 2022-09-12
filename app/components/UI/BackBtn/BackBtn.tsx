import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BackBtnStyles as styles } from './BackBtnStyles';
import { COLORS } from '../../../../assets/helpers/colors';
import { useNavigate } from 'react-router-native';

export const BackBtn = () => {
  const navigate = useNavigate();
  return (
    <View style={styles.main} onTouchEnd={() => navigate(-1)}>
      <Ionicons name="arrow-back" size={24} color={COLORS.text.secondary} />
    </View>
  );
};
