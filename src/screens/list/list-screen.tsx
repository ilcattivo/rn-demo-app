import {SafeAreaView} from 'react-native-safe-area-context';

import ListData from '../../utils/fake-data';
import {ListItem} from './components/list-item';
import {FlatList, ListRenderItem} from 'react-native';
import {useCallback} from 'react';

//
//

export interface IListItem {
  id: string;
  name: string;
  description: string;
  price: string;
  salePrice: string | undefined;
  brand: string;
}

const ListScreen = () => {
  const renderItem: ListRenderItem<IListItem> = useCallback(({item}) => {
    return <ListItem item={item} />;
  }, []);

  const getItemLayout = useCallback(
    (_data: unknown[] | null | undefined, index: number) => ({
      length: 90,
      offset: 90 * index,
      index,
    }),
    [],
  );

  return (
    <SafeAreaView edges={['top', 'bottom']}>
      <FlatList
        data={ListData}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
      />
    </SafeAreaView>
  );
};

export default ListScreen;
