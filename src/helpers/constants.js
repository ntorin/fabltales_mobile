import { StyleSheet, Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { JSON_HEADERS } from 'helpers/apicalls';
import { iconsLoaded } from 'helpers/icons-loader';

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

export const goToHome = (user) =>{
  props = {user:user}
  iconsLoaded.then(() =>{
    Navigation.startSingleScreenApp({ // <<
      screen: {
        screen: 'fabltales_mobile.MainMenu', // <<
        navigatorStyle: {
            navBarHidden: true,
            navBarTransparent: true,
            drawUnderNavBar: true,
        },
      },
      drawer: {
        left: {
          screen: 'fabltales_mobile.LobbyChat',
          disableOpenGesture: false,
        },
        disableOpenGesture: false
      },
      animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade',
      passProps: props
    });
  })
}

export const pushScreen = (navigator, screen, title, passProps) =>{
  navigator.push({
    title: title,
    screen: screen,
    passProps: passProps,
  });
}

export const WEBSOCKET_URL = 'ws://18.220.223.89/cable';

export const setAuthData = (uid, client, access_token, token_type, expiry) => {
    JSON_HEADERS['access-token'] = access_token;
    JSON_HEADERS['token-type'] = token_type;
    JSON_HEADERS['client'] = client;
    JSON_HEADERS['expiry'] = expiry;
    JSON_HEADERS['uid'] = uid;
}
