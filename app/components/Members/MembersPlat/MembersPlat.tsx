import React from 'react';
import { ScrollView, View } from 'react-native';
import { COLORS } from '../../../../assets/helpers/colors';
import { Member } from '../../../models/members/members';
import { sortBySurname } from '../../../utils/members/members';
import { Typography } from '../../UI/Typography';
import { MembersKid } from '../MembersKid';
import { MembersPlatStyles as styles } from './MembersPlatStyles';

type MembersPlatTypes = {
  kids: Member[];
  plat: number;
  handleChangeStatus: (id: number, status: boolean) => Promise<void>;
};

export const MembersPlat = ({
  kids,
  plat,
  handleChangeStatus,
}: MembersPlatTypes) => {
  const kidsIll = kids.reduce((sum, kid) => (kid.status ? sum : sum + 1), 0);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.main}
      contentContainerStyle={styles.container}
    >
      <View style={styles.summary}>
        <View style={styles.summary__header}>
          {plat === 5 ? (
            <Typography size={14} font="bold">
              Спортвзвод
            </Typography>
          ) : (
            <Typography size={14} font="bold">{`${plat} Взвод`}</Typography>
          )}
        </View>

        <View style={styles.summary__item}>
          <View style={styles.summary__count}>
            <Typography size={16} font="bold">
              {kids.length.toString()}
            </Typography>
          </View>
          <Typography size={12} color={COLORS.text.secondary}>
            Всего
          </Typography>
        </View>

        <View style={styles.summary__item}>
          <View style={styles.summary__count}>
            <Typography size={16} font="bold">
              {(kids.length - kidsIll).toString()}
            </Typography>
          </View>
          <Typography size={12} color={COLORS.text.secondary}>
            В строю
          </Typography>
        </View>

        <View style={styles.summary__item}>
          <View style={styles.summary__count}>
            <Typography size={16} font="bold">
              {kidsIll.toString()}
            </Typography>
          </View>
          <Typography size={12} color={COLORS.text.secondary}>
            Болеют
          </Typography>
        </View>
      </View>

      {kids.sort(sortBySurname).map((kid) => (
        <MembersKid
          kid={kid}
          key={kid.id}
          handleChangeStatus={handleChangeStatus}
        />
      ))}
    </ScrollView>
  );
};
