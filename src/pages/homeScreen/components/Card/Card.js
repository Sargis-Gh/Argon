import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import Style from '../../Style'

export default Card = ({ item: { image, title } }) => {
    // destru
    return (
        <View style={Style.card}>
            <View>
                <Image source={image} style={Style.imageStyle} />
                {!!title && <Text style={Style.cardTitle}>{title}</Text>}
            </View>
            <TouchableOpacity>
                <Text style={Style.viewArticle}>View article</Text>
            </TouchableOpacity>
        </View>
    )
}
