import React, { ReactElement } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MainMenu } from '../MainMenu';
import { LayoutStyles as styles } from './LayoutStyles';
import { Header } from './Header';

type LayoutTypes = {
  children: ReactElement;
  title: string;
};

export const Layout = ({ children, title }: LayoutTypes) => {
  return (
    <SafeAreaView style={styles.layout}>
      <StatusBar style="auto" />
      <Header title={title} />
      {children}
      {/* <MainMenu /> */}
    </SafeAreaView>
  );
};
