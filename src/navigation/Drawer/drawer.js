import { createDrawerNavigator } from '@react-navigation/drawer';

import MyTabs from '../BottomTabs/tabNavigation';
import { PageName } from '../../constants/constants';
import SettingsScreen from '../../pages/settingsScreen/settingsScreen';


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={PageName.tabs} component={MyTabs} />
      <Drawer.Screen name={PageName.settings} component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;