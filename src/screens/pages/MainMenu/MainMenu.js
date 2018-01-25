import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { BaseStyles, pushScreen } from 'helpers/constants.js';
import Button from 'components/Button';
import { Navigation } from 'react-native-navigation';
import Overlay from 'components/Overlay'

class MainMenu extends React.Component {

    constructor(props){
        super(props);
        this.push = this.push.bind(this);
    }

    push(screen, title){
      passProps = {user: this.props.user}
      pushScreen(this.props.navigator,screen, title,passProps);
    }

    toggleChat(){
      this.props.navigator.toggleDrawer({
        side: 'left',
        animated: true
      })
    }

    render(){
        return(
            <View style={BaseStyles.container}>
                  <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                      <Button style={styles.button} onPress={() => this.push('fabltales_mobile.LobbyFinder', 'Lobby Finder')}>Create</Button>
                      <Button style={styles.button} onPress={() => this.push('fabltales_mobile.Library', 'Library')}>Library</Button>
                      <Button style={styles.button} onPress={() => this.push('fabltales_mobile.Shop', 'Shop')}>Shop</Button>
                      <Button style={styles.button} onPress={() => this.push('fabltales_mobile.Lobby', 'Meme Lobby')}>Lobby Test</Button>
                      <Button style={styles.button} onPress={() => this.toggleChat()}>TOGGLE CHAT</Button>
                    </View>
                    <View style={{flex:1}}></View>
                  </View>
                  <Overlay{...this.props}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  button:{
    margin: 10,
    textAlignVertical: 'center',
    borderRadius: 5,
    backgroundColor: '#FFFFFF'
  },
});

const layout = StyleSheet.create({

});

export default MainMenu;
