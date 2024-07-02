import {StyleSheet} from 'react-native';
import { Fonts } from '../../constants/constants';

const Style = StyleSheet.create({
  backgroundStyle: {
    justifyContent: 'space-around',
    padding: 30,
    height: '100%',
    alignItems: 'flex-start',
    borderRadius: 15,
  },
  centerText: {
    fontSize: 55,
    lineHeight: 57,
    color: 'white',
    fontFamily: Fonts.openSans,
    fontWeight: '700',
  },
  futterText: {
    fontSize: 16,
    lineHeight: 22,
    color: 'white',
    fontFamily: Fonts.openSans,
  },
  buttonStyle: {
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '100%',
    height: 50,
    color: 'black',
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default Style;
