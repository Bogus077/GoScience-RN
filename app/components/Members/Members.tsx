import React, { useCallback } from 'react';
import { ScrollView, View } from 'react-native';
import { COLORS } from '../../../assets/helpers/colors';
import {
  ChangeMemberStatusRequest,
  Member,
} from '../../models/members/members';
import { getPlat } from '../../utils/members/members';
import { Typography } from '../UI/Typography';
import { MembersPlat } from './MembersPlat';
import { MembersStyles as styles } from './MembersStyles';
import { MembersSum } from './MembersSum';

type MembersTypes = {
  kids: Member[];
  isLoading: boolean;
  changeMemberStatus: (data: ChangeMemberStatusRequest) => void;
  connectionStatus: boolean;
};

export const Members = ({
  kids,
  isLoading,
  changeMemberStatus,
  connectionStatus,
}: MembersTypes) => {
  const plats = [
    getPlat(kids, 1),
    getPlat(kids, 2),
    getPlat(kids, 3),
    getPlat(kids, 4),
    getPlat(kids, 5),
  ];

  const handleChangeStatus = useCallback(
    async (id: number, status: boolean) => {
      changeMemberStatus({ id, status });
    },
    [changeMemberStatus]
  );

  const kidsIll = kids.reduce((sum, kid) => (kid.status ? sum : sum + 1), 0);

  return (
    <View style={styles.main}>
      <View style={styles.sum}>
        <MembersSum label="Всего" number={kids.length.toString()} />
        <MembersSum
          label="В строю"
          number={(kids.length - kidsIll).toString()}
        />
        <MembersSum label="Болеют" number={kidsIll.toString()} />
      </View>

      <ScrollView
        horizontal={true}
        style={styles.members}
        contentContainerStyle={{ width: '500%' }}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        scrollEventThrottle={200}
      >
        {plats.map((plat, key) => (
          <MembersPlat
            kids={plat}
            key={key}
            plat={key + 1}
            handleChangeStatus={handleChangeStatus}
          />
        ))}
      </ScrollView>
    </View>
  );
};
