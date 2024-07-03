import React from 'react'
import { Text, useColorScheme, View, Button, TouchableOpacity } from 'react-native'

import Style from './style'
import RightIcon from '../../assets/icons/right'
import { PageName } from '../../constants/constants'

export default AppBar = ({ Navigation, text }) => {
    return (
        <View style={Style.backgroundStyle}>
            <TouchableOpacity onPress={() => Navigation.navigate(PageName.first)}>
                <RightIcon />
            </TouchableOpacity>
            <Text style={Style.headerText}>{text}</Text>
        </View>
    )
}
