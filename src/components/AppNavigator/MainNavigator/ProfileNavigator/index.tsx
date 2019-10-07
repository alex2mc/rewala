import { createStackNavigator } from 'react-navigation-stack';

import ProfileScreen from './ProfileScreen';
import ChangePasswordScreen from './ChangePasswordScreen';

export const ProfileNavigator = createStackNavigator(
  {
    ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions: {
        header: null,
      },
    },
    ChangePasswordScreen: {
      screen: ChangePasswordScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'ProfileScreen',
    headerMode: 'screen',
  },
);
