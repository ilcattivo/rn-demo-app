import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {D} from '@mobily/ts-belt';

import ListScreen, {IListItem} from './screens/list/list-screen';
import {ItemScreen} from './screens/item/item-screen';

import {ThemeFont} from './components/typography';

//
//

export type RootStackParamList = {
  ListScreen: undefined;
  ItemScreen?: IListItem;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Stack = () => {
  return (
    <RootStack.Navigator
      initialRouteName="ListScreen"
      screenOptions={{
        headerShadowVisible: false,
        headerBackTitle: '',
        headerTitleStyle: {
          fontSize: 16,
          ...D.selectKeys(ThemeFont.medium, [
            'fontFamily',
            'fontSize',
            'fontWeight',
            'color',
          ]),
        },
        contentStyle: {
          backgroundColor: '#eee',
        },
      }}>
      <RootStack.Screen
        name="ListScreen"
        component={ListScreen}
        options={{title: 'Items'}}
      />
      <RootStack.Screen
        name="ItemScreen"
        component={ItemScreen}
        options={{title: 'Item'}}
      />
    </RootStack.Navigator>
  );
};

export default Stack;
