import {StyleSheet} from 'react-native';
import { AppColors, Fonts } from '../../constants/constants';

const Style = StyleSheet.create({
  background: {
    padding: 30,
    height: '100%',
    rowGap: 70,
  },
  body: {
    width: '100%',
    height: 'auto',
    padding: 30,
    backgroundColor: AppColors.white,
    alignItems: 'center',
    borderRadius: 5,

  },
  centerText: {
    fontSize: 55,
    lineHeight: 57,
    color: 'white',
    fontFamily: Fonts.openSans,
    fontWeight: '700',
  },
  signUpWith: {
    fontSize: 12,
    lineHeight: 17,
    color: 'rgba(136, 152, 170, 1)',
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
