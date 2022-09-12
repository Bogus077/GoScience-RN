import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, View } from 'react-native';
import { useNavigate } from 'react-router-native';
import { COLORS } from '../../../assets/helpers/colors';
import { Btn } from '../../components/UI/Btn';
import { LinkTo } from '../../components/UI/LinkTo';
import { Typography } from '../../components/UI/Typography';
import { ROUTES } from '../../utils/router/router';
import { OnboardingPageStyles as styles } from './OnboardingPageStyles';

export const OnboardingPage = () => {
  const navigate = useNavigate();

  return (
    <View style={styles.main}>
      <StatusBar style="auto" />

      <View style={styles.header}>
        <Typography type="h1">go</Typography>
        <Typography type="h1" color={COLORS.orange}>
          Science
        </Typography>
      </View>

      <Image
        style={styles.image}
        source={require('../../../assets/img/onboarding.png')}
      />

      <View style={styles.navigate}>
        <Btn label="Создать аккаунт" onPress={() => navigate(ROUTES.signup)} />
        <View style={styles.loginButton}>
          <Typography size={16}>Уже есть аккаунт?</Typography>
          <LinkTo
            label="Войти"
            size={16}
            onPress={() => navigate(ROUTES.auth)}
          />
        </View>
      </View>
    </View>
  );
};
