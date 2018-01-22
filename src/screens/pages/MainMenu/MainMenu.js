import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { BaseStyles, pushScreen } from 'helpers/constants.js';
import Button from 'components/Button';

class MainMenu extends React.Component {

    constructor(props){
        super(props);
        this.push = this.push.bind(this);
    }

    push(screen, title){
      passProps = {}
      pushScreen(this.props.navigator,screen, title,passProps);
    }

    render(){
        return(
            <View style={BaseStyles.container}>
                  <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                      <Button style={styles.button} onPress={() => this.push('fabltales_mobile.LobbyFinder', 'Lobby Finder')}>Create</Button>
                      <Button style={styles.button} onPress={() => this.push('fabltales_mobile.Library', 'Library')}>Library</Button>
                      <Button style={styles.button} onPress={() => this.push('fabltales_mobile.Shop', 'Shop')}>Shop</Button>
                    </View>
                    <View style={{flex:1}}></View>
                  </View>
                  <View style={{flex:1, justifyContent:'flex-end'}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                      <View style={{flex:1, flexDirection:'row'}}>
                        <Button onPress={() => this.push('fabltales_mobile.Profile', 'Profile')}>
                          <Image style={styles.avatar} source={require('assets/FB-f-Logo__blue_100.png')}/>
                        </Button>
                        <Text style={styles.text}>hi im facebook</Text>
                      </View>
                      <View style={{flex:1, justifyContent:'flex-end', alignItems:'flex-end'}}>
                        <Button onPress={() => this.push('fabltales_mobile.Friends', 'Friends')}>
                          <View style={styles.friendsButton}>
                            <Image style={styles.friends} source={require('assets/icons8-people-filled-50.png')}/>
                          </View>
                        </Button>
                      </View>
                    </View>
                  </View>
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
  friendsButton:{
    borderRadius: 5,
    backgroundColor: '#FFFFFF'
  },
  avatar:{
      resizeMode: 'contain',
      height: 64,
      width: 64,
  },
  friends:{
      resizeMode: 'contain',
      height: 40,
      width: 40,
      margin: 4
  },
  text:{
    textAlignVertical: 'center',
    color:'#FFFFFF',
    margin: 8
  }
});

const layout = StyleSheet.create({

});

export default MainMenu;
