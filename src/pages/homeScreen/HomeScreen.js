import React from 'react'
import { View, Button, FlatList, SafeAreaView } from 'react-native'
import Style from './Style'
import Card from './components/Card/Card'
import { Cards, PageName } from '../../constants/constants'

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={Style.backgroundStyle}>
                <FlatList
                    key={'#'}
                    keyExtractor={(item) => '#' + item.id}
                    data={Cards.data}
                    numColumns={2}
                    renderItem={({ item }) => <Card item={item} />}
                />
                <Button title='Go back' onPress={() => navigation.navigate(PageName.first)} />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen
