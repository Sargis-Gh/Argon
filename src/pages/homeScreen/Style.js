import { StyleSheet } from 'react-native'
import { AppColors, Fonts } from '../../constants/constants'

const Style = StyleSheet.create({
    backgroundStyle: {
        flex: 1,
        padding: 15,
        backgroundColor: AppColors.backgroundColor,
    },
    card: {
        height: 212,
        width: 164,
        backgroundColor: AppColors.white,
        borderRadius: 10,
        margin: 10,
        justifyContent: 'space-between'
    },
    imageStyle: {
        height: 117,
        width: AppColors.white,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    cardTitle: {
        fontSize: 14,
        lineHeight: 18,
        color: AppColors.titleColor,
        fontFamily: Fonts.openSans,
        marginTop: 8,
        marginLeft: 8
    },
    viewArticle: {
        fontSize: 12,
        lineHeight: 17,
        color: AppColors.articleColor,
        fontFamily: Fonts.openSans,
    }
})

export default Style
