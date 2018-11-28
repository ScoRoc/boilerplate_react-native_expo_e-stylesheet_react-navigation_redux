import React from 'react';
import { Dimensions, View } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';

import store from './src/redux/store/store';

import MainScreen from './src/screens/MainScreen';
import IAPScreen from './src/screens/IAPScreen';

const RootStack = createStackNavigator(
  {
    Main: MainScreen,
    IAP: IAPScreen
  },
  {
    initialRouteName: 'Main',
    mode: 'modal',
    headerMode: 'none'
  }
);

const { height, width } = Dimensions.get('window');
const baseScreenWidth = 375; // from iPhoneX vertical

EStyleSheet.build({
  $rem: width / baseScreenWidth,
  $orange: '#ff8e18',
  $darkGray: '#333',
  $pink: '#f3a',
  $brightBlue: '#3ee'
});

// export default createAppContainer(RootStack);
const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
};
