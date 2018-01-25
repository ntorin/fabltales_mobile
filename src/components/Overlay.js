import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { BaseStyles, pushScreen } from 'helpers/constants.js';
import Button from 'components/Button';
import { Navigation } from 'react-native-navigation';

class Overlay extends React.Component {

    constructor(props){
        super(props);
        this.push = this.push.bind(this);
    }

    push(screen, title){
      passProps = {user: this.props.user}
      pushScreen(this.props.navigator,screen, title,passProps);
    }

    render(){
        return(
            <View style={{flex:1}}>
              <View/>
              <View style={{flex:1, justifyContent:'flex-end'}}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                  <View style={{flex:1, flexDirection:'row'}}>
                    <Button onPress={() => this.push('fabltales_mobile.Profile', 'Profile')}>
                      <Image style={styles.avatar} source={require('assets/FB-f-Logo__blue_100.png')}/>
                    </Button>
                    <Text style={styles.text}>{this.props.user.email}</Text>
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
  friendsButton:{
    borderRadius: 5,
    backgroundColor: '#FFFFFF'
  },
  avatar:{
      resizeMode: 'contain',
      height: 64,
      width: 64,
      margin: 10
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

export default Overlay;
