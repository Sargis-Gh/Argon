import React from 'react'
import { Text, useColorScheme, View, Button, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Style from './Style'
import Logo from '../../assets/logo'
import { PageName } from '../../constants/constants'

const FirstScreen = ({ navigation }) => {
    return (
        <LinearGradient
            colors={['rgb(43, 19, 137)', 'rgb(229, 125, 222)']}
            start={{ x: 0, y: 0 }} // Start at the top-left corner
            end={{ x: 1, y: 1 }} // End at the bottom-right corner
        >
            <View style={Style.backgroundStyle}>
                <Logo />
                <View>
                    <Text style={Style.centerText}>Design</Text>
                    <Text style={Style.centerText}>Systeam</Text>
                    <Text style={Style.futterText}>Fully coded React Native components.</Text>
                </View>
                <TouchableOpacity
                    activeOpacity={1}
                    style={Style.buttonStyle}
                    onPress={() => navigation.navigate(PageName.tabs)}>
                    <Text>Get started</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}

export default FirstScreen
