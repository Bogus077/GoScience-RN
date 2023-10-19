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
import { Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const OnboardingPage = () => {
  const navigate = useNavigate();

  return (
    <View style={styles.main}>
      <StatusBar style="auto" />

      <View style={styles.header}>
        <Typography type="h1">КК</Typography>
        <Typography type="h1" color={COLORS.orange}>
          Авангард
        </Typography>
      </View>

      <Image
        style={styles.image}
        source={require('../../../assets/img/onboarding.png')}
      />

      <View style={styles.navigate}>
        <Btn label="Войти" onPress={() => navigate(ROUTES.auth)} />
        <View>
          <Text
            style={{
              marginTop: 20,
              color: COLORS.text.secondary,
              textAlign: 'center',
            }}
          >
            Приложение для работы с онлайн-расходом Кадетского Корпуса Авангард
          </Text>
        </View>
      </View>
    </View>
  );
};
