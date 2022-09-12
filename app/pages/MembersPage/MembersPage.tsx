import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Layout } from '../../components/Layout';
import { Members } from '../../components/Members';
import { Typography } from '../../components/UI/Typography';
import { useMembers } from '../../hooks/useMembers';
import { useCheckPhoneMutation, useGetUserQuery } from '../../redux/GSApi';

export const MembersPage = () => {
  const { members, status, changeMemberStatus, error } = useMembers('members');
  const { isLoading } = useGetUserQuery('');

  return (
    <Layout title="Расход">
      <Members
        kids={members ?? []}
        isLoading={isLoading}
        changeMemberStatus={changeMemberStatus}
        connectionStatus={status}
      />
    </Layout>
  );
};
