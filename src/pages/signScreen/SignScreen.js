import React from 'react'
import { Text, useColorScheme, View, TouchableOpacity, SafeAreaView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Style from './style'
import { AppWords, PageName } from '../../constants/constants'
import AppBar from '../../components/appBar/appBar'

const SignScreen = ({ navigation }) => {
    return (
        <LinearGradient
            colors={['rgba(23, 43, 77, 1)', 'rgba(26, 23, 77, 1)']}
            start={{ x: 0, y: 0 }} // Start at the top-left corner
            end={{ x: 1, y: 0 }} // End at the bottom-right corner
        >
            <SafeAreaView>
                <View style={Style.background}>
                    <AppBar text={AppWords.createAccount} Navigation={navigation} />
                    <Body/>
                </View>
            </SafeAreaView>
        </LinearGradient>
    )
}
const Body = ({}) => {
    return (
        <View style={Style.body}>
            <Text style={Style.signUpWith}>Sign up with</Text>
            <Text>Body</Text>
            <Text>Body</Text>
        </View>
    )
}

export default SignScreen
