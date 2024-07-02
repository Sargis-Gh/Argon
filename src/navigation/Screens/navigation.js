import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MyTabs from '../BottomTabs/tabNavigation'
import { PageName } from '../../constants/constants'
import FirstScreen from '../../pages/firstScreen/FirstScreen'

const Stack = createNativeStackNavigator()

const MyStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName={PageName.first}>
            <Stack.Screen name={PageName.first} component={FirstScreen} />
            <Stack.Screen name={PageName.tabs} component={MyTabs} />
        </Stack.Navigator>
    )
}

export default MyStack
