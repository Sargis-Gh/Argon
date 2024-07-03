/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import MyStack from './src/navigation/Screens/navigation'
import { NavigationContainer } from '@react-navigation/native'

// const IS_SIMULATOR = true;

function App() {
    //     const [isAndroidSimulator, setIsAndroidSimulator] = useState(false);

    //   useEffect(() => {
    //     if (Platform.OS === 'android') {
    //       setIsAndroidSimulator(true);
    //     }

    //     if (__DEV__ && (IS_SIMULATOR || isAndroidSimulator)) {
    //       Alert.alert(
    //         'Force Close Simulator?',
    //         'Are you sure you want to force close the simulator?',
    //         [
    //           { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
    //           { text: 'Force Close', onPress: () => {} },
    //         ],
    //         { cancelable: false }
    //       );
    //     }
    //   }, []);

    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}

export default App
