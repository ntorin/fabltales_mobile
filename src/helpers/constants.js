import { StyleSheet, Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';

export const BaseStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#131862'
  },

  absolute: {
        position: "absolute",
        top: 0, left: 0, bottom: 0, right: 0,
  },
});


export const PrimaryColor = '#FFFFFF';
export const ScreenBackgroundColor = '#00080';

export const goToHome = () =>{
  Navigation.startSingleScreenApp({ // <<
    screen: {
      screen: 'fabltales_mobile.MainMenu', // <<
      navigatorStyle: {
          navBarHidden: true,
          navBarTransparent: true,
          drawUnderNavBar: true,
      },
    },
    animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade'
  });
}

export const pushScreen = (navigator, screen, passProps) =>{
  navigator.push({
    screen: screen,
    passProps: passProps,
  });
}
