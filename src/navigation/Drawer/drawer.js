import { createDrawerNavigator } from '@react-navigation/drawer';

import MyTabs from '../BottomTabs/tabNavigation';
import { PageName } from '../../constants/constants';
import SettingsScreen from '../../pages/settingsScreen/settingsScreen';
import ProfileScreen from '../../pages/profileScreen/ProfileScreen';
import HomeScreen from '../../pages/homeScreen/HomeScreen';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={PageName.home} component={HomeScreen} />
      <Drawer.Screen name={PageName.profile} component={ProfileScreen} />
      <Drawer.Screen name={PageName.settings} component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;