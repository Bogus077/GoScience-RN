import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { useNavigate } from 'react-router-native';
import { ROUTES } from '../../utils/router/router';
import { Typography } from '../UI/Typography';
import { MainMenuStyles as styles } from './MainMenuStyles';
import { AntDesign, Ionicons } from '@expo/vector-icons';

export const MainMenu = () => {
  const navigate = useNavigate();

  return (
    <View style={styles.wrapper}>
      <View style={styles.menu}>
        <View
          style={styles.menu__item}
          onTouchEnd={() => navigate(ROUTES.members)}
        >
          <Ionicons name="home" size={14} color="#ff6633" />
          <Typography>Расход</Typography>
        </View>
        <View
          style={styles.menu__item}
          onTouchEnd={() => navigate(ROUTES.profile)}
        >
          <AntDesign name="profile" size={14} color="#ff6633" />
          <Typography>Профиль</Typography>
        </View>
        <View
          style={styles.menu__item}
          onTouchEnd={() => navigate(ROUTES.settings)}
        >
          <Ionicons name="settings" size={14} color="#ff6633" />
          <Typography>Настройки</Typography>
        </View>
      </View>
    </View>
  );
};
