import { useField } from 'formik';
import React, { useMemo } from 'react';
import { TextInput, View } from 'react-native';
import { COLORS } from '../../../../../assets/helpers/colors';
import { Typography } from '../../Typography';
import { InputTextStyles as styles } from '../InputText/InputTextStyles';
import MaskInput from 'react-native-mask-input';

type InputTextTypes = {
  label?: string;
  name: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  onChange?: () => void;
};

export const InputPhone = ({
  label,
  name,
  placeholder,
  type,
  required,
  disabled,
}: InputTextTypes) => {
  const [field, meta, helpers] = useField<string>(name);

  const isInvalid = useMemo(() => {
    return Boolean(meta.error);
  }, [meta.error]);

  return (
    <View>
      <View style={[styles.main, isInvalid && styles.main_error]}>
        {label && (
          <Typography size={12} color={COLORS.text.secondary}>
            {label}
          </Typography>
        )}
        <MaskInput
          {...field}
          value={field.value}
          placeholder={placeholder}
          onBlur={() => helpers.setTouched(!meta.touched)}
          keyboardType="phone-pad"
          autoComplete="tel"
          onChangeText={(masked, unmasked) => {
            helpers.setValue(masked);
          }}
          mask={[
            '+',
            /\d/,
            ' (',
            /\d/,
            /\d/,
            /\d/,
            ')',
            ' ',
            /\d/,
            /\d/,
            /\d/,
            ' ',
            /\d/,
            /\d/,
            ' ',
            /\d/,
            /\d/,
          ]}
        />
      </View>
      {meta.error && (
        <Typography color={COLORS.negative}>{meta.error}</Typography>
      )}
    </View>
  );
};
