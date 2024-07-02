import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import Style from '../../Style'

export default Card = ({ imageUri, title, article }) => {
    return (
        <View style={Style.card}>
            <Image source={imageUri} style={Style.imageStyle} />
            <View style={{ padding: 10, justifyContent: 'space-between', flex: 1 }}>
                <Text style={Style.cardTitle}>{title}</Text>
                <TouchableOpacity>
                    <Text style={Style.viewArticle}>{article}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
