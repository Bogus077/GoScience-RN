import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Layout } from '../../components/Layout';
import { Typography } from '../../components/UI/Typography';
import { AuthPageStyles as styles } from './AuthPageStyles';
import { COLORS } from '../../../assets/helpers/colors';
import { BackBtn } from '../../components/UI/BackBtn';
import { useNavigate } from 'react-router-native';
import { InputText } from '../../components/UI/Form/InputText';
import { useCheckPhoneMutation, useLoginMutation } from '../../redux/GSApi';
import { AuthorizationRequest } from '../../models/user/auth';
import { FormikContext, useFormik } from 'formik';
import {
  authInitialValues,
  loginValidationSchema,
} from '../../models/validators/validators';
import { InputPhone } from '../../components/UI/Form/InputPhone';
import { InputPassword } from '../../components/UI/Form/InputPassword';
import { Btn } from '../../components/UI/Btn';
import { ROUTES } from '../../utils/router/router';
import { FetchError } from '../../models/api/errors';
import { VALIDATION_ERRORS } from '../../models/validators/errors';

export const AuthPage = () => {
  const navigate = useNavigate();
  const [logIn, { isLoading, isError, error }] = useLoginMutation();

  const handleSubmit = async (values: AuthorizationRequest) => {
    if (isLoading) {
      return;
    }
    const result = await logIn(values);
    if ('data' in result && result.data) {
      navigate(ROUTES.members);
    }
  };

  const formik = useFormik({
    initialValues: authInitialValues,
    validationSchema: loginValidationSchema,
    onSubmit: handleSubmit,
    validateOnChange: false,
  });

  useEffect(() => {
    if (isError && error && 'data' in error) {
      const errorData = error as FetchError;
      errorData.data.errorMessage === 'Invalid password'
        ? formik.setFieldError('password', VALIDATION_ERRORS.PASSWORD.WRONG)
        : errorData.data.errorMessage === 'User not found'
        ? formik.setFieldError('phone', VALIDATION_ERRORS.PHONE.IS_NOT_EXISTS)
        : formik.setFieldError(
            'password',
            VALIDATION_ERRORS.SERVER.UNTYPED_ERROR
          );
    }
  }, [error, isError]);

  return (
    <View style={styles.main}>
      <StatusBar style="auto" />

      <View style={styles.header}>
        <View style={{ marginRight: 20 }}>
          <BackBtn />
        </View>

        <Typography type="h1">Авторизация</Typography>
      </View>

      <View style={styles.form}>
        <FormikContext.Provider value={formik}>
          <View style={{ marginBottom: 20 }}>
            <InputPhone
              name="phone"
              placeholder="+7 987 654 32 10"
              label="Номер телефона"
            />
          </View>
          <View>
            <InputPassword name="password" label="Пароль" />
          </View>
          <View style={styles.submitBtn}>
            <Btn label="Войти" onPress={formik.handleSubmit} />
          </View>
        </FormikContext.Provider>
      </View>
    </View>
  );
};
