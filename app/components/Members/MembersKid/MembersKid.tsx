import React from 'react';
import { View } from 'react-native';
import { Member } from '../../../models/members/members';
import { Typography } from '../../UI/Typography';
import { MembersKidStyles as styles } from './MembersKidStyles';

type MembersKidTypes = {
  kid: Member;
  handleChangeStatus: (id: number, status: boolean) => Promise<void>;
};

export const MembersKid = ({ kid, handleChangeStatus }: MembersKidTypes) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.main}>
        <Typography>{`${kid.surname} ${kid.name}`}</Typography>
      </View>
      <View
        style={styles.status__wrapper}
        onTouchEnd={() => handleChangeStatus(kid.id, !kid.status)}
      >
        <View style={[styles.status, kid.status && styles.status_positive]} />
      </View>
    </View>
  );
};
