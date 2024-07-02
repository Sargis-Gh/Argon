import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import { PageName } from '../../constants/constants';
import HomeScreen from '../../pages/homeScreen/HomeScreen';
import ProfileScreen from '../../pages/profileScreen/ProfileScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name={PageName.home} component={HomeScreen} />
      <Tab.Screen name={PageName.profile} component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;
