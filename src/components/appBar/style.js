import {StyleSheet} from 'react-native';
import { Fonts } from '../../constants/constants';

const Style = StyleSheet.create({
  backgroundStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 40,
    width: '100%',
    height: 25,
  },
  headerText: {
    fontSize: 16,
    lineHeight: 22,
    color: 'white',
    fontWeight: '700',
    fontFamily: Fonts.openSans,
  },
});

export default Style;
