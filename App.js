/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import MyStack from './src/navigation/Screens/navigation'
import { NavigationContainer } from '@react-navigation/native'

function App() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}

export default App
