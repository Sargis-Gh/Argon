import { StyleSheet } from 'react-native'
import { AppColors, Fonts } from '../../constants/constants'

const Style = StyleSheet.create({
    backgroundStyle: {
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        padding: 15,
        backgroundColor: AppColors.backgroundColor,
    },
    card: {
        height: 212,
        width: 164,
        backgroundColor: AppColors.white,
        borderRadius: 10,
        margin: 10,
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
    },
    viewArticle: {
        fontSize: 12,
        lineHeight: 17,
        color: AppColors.articleColor,
        fontFamily: Fonts.openSans,
    }
})

export default Style
