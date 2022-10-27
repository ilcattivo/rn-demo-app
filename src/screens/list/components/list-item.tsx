import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled from '@emotion/native';
import {getImage} from '../../../utils/image';
import {Typography} from '../../../components/typography';
import {RootStackParamList} from '../../../stack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {IListItem} from '../list-screen';
import {Avatar} from '../../../components/avatar';

//
//

const thumbnailSize = 600;

export const ListItem: React.FC<{item: IListItem}> = ({item}) => {
  const nav =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'ListScreen'>
    >();

  const hasDiscount = item.salePrice && item.salePrice < item.price;

  return (
    <ListItemContainer onPress={() => nav.navigate('ItemScreen', item)}>
      <Avatar
        style={styles.image}
        source={{uri: getImage(thumbnailSize, item.id)}}
      />

      <View style={styles.flex}>
        <Typography weight="medium">{item.name}</Typography>
        <Typography>
          {hasDiscount ? (
            <Typography style={item.salePrice ? styles.discounted : undefined}>
              SAR {item.price}
            </Typography>
          ) : null}
          {hasDiscount ? '  ' : null}
          <Typography color={hasDiscount ? '#DA2121' : '#000000'}>
            SAR {item.salePrice || item.price}
          </Typography>
        </Typography>

        <Typography fontSize={14} color="#545454">
          Brand: {item.name}
        </Typography>
      </View>
    </ListItemContainer>
  );
};

//
//

const ListItemContainer = styled.TouchableOpacity({
  paddingTop: 10,
  paddingBottom: 10,
  paddingHorizontal: 25,
  borderBottomColor: 'rgba(0,0, 0, 0.05)',
  borderBottomWidth: 1,
  flexDirection: 'row',
});

//
//

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  image: {
    marginTop: 8,
    marginRight: 16,
  },
  discounted: {
    textDecorationLine: 'line-through',
  },
  sale: {
    color: '#DA2121',
  },
});
