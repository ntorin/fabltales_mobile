import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { BaseStyles } from 'helpers/constants.js';

class Profile extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={BaseStyles.container}>
              <View style={{flexDirection:'row'}}>
                <Image style={styles.avatar} source={require('assets/FB-f-Logo__blue_100.png')}/>
                <View style={{flex:1, justifyContent:'center'}}>
                  <Text style={styles.username}>{this.props.user.name}</Text>
                  <Text style={styles.bio}>Silly, splattered with deranged.</Text>
                </View>
              </View>
              <View style={{flex:1, flexDirection:'row'}}>
                <View style={{flex:1}}>
                  <Text style={styles.text}>Stories Written:</Text>
                  <Text style={styles.text}>{this.props.user.story_count}</Text>
                </View>
                <View style={{flex:1}}>
                  <Text style={styles.text}>Word Count:</Text>
                  <Text style={styles.text}>{this.props.user.word_count}</Text>
                </View>
              </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  avatar:{
      resizeMode: 'contain',
      height: 128,
      width: 128,
      margin: 10
  },
  username:{
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    color:'#FFFFFF',
    margin: 4
  },
  bio:{
    fontSize: 16,
    textAlign: 'center',
    color:'#FFFFFF',
    margin: 4
  },
  text:{
    fontSize: 16,
    textAlign: 'center',
    color:'#FFFFFF',
  }
});

const layout = StyleSheet.create({

});

export default Profile;
