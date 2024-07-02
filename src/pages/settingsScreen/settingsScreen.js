import React from 'react';
import {Text, useColorScheme, View, Button} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Style from './Style';

const SettingsScreen = ({navigation}) => {
  return (
    <View style={Style.backgroundStyle}>
        <Text style={Style.headerText}>Settings</Text>
        <Button
          title="Go back"
          onPress={() => navigation.navigate('Home')}
        />
    </View>
  );
}

export default SettingsScreen;
