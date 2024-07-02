import React from 'react'
import { Text, useColorScheme, View, Button, FlatList, ScrollView } from 'react-native'
import Style from './Style'
import Card from './components/Card/Card'
import { Cards, PageName } from '../../constants/constants'

const HomeScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={Style.backgroundStyle}>
                <FlatList
                    key={'#'}
                    keyExtractor={(item) => '#' + item}
                    data={Cards.data}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <Card imageUri={item.image} title={item.title} article={item.article} />
                    )}
                />
                <Button title='Go back' onPress={() => navigation.navigate(PageName.first)} />
            </View>
        </ScrollView>
    )
}

export default HomeScreen
