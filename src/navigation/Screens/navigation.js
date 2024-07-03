import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MyDrawer from '../Drawer/drawer'
import MyTabs from '../BottomTabs/tabNavigation'
import { PageName } from '../../constants/constants'
import FirstScreen from '../../pages/firstScreen/FirstScreen'
import HomeScreen from '../../pages/homeScreen/HomeScreen'
import SignScreen from '../../pages/signScreen/SignScreen'

const Stack = createNativeStackNavigator()

const MyStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            >
            <Stack.Screen name={PageName.first} component={FirstScreen} />
            <Stack.Screen name={PageName.sign} component={SignScreen} />
            {/* <Stack.Screen name={PageName.tabs} component={MyTabs} /> */}
            <Stack.Screen name={PageName.drawer}component={MyDrawer}/>
        </Stack.Navigator>
    )
}

export default MyStack
