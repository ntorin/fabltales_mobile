import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { BaseStyles } from 'helpers/constants.js';
import Button from 'components/Button';
import PopulatableListView from 'components/PopulatableListView';

class LobbyFinder extends React.Component {

    constructor(props){
        super(props);
    }

    getRooms(page, callback, options){
      var rooms = [{
          user_id: 1,
          user: {
            name: 'pommello'
          },
          story_id: 1,
          name: 'test',
          has_password: true,
          room_type: 'meme',
          password: 'asdf',
          word_limit: 5,
          user_count: 5,
          user_limit:10
        },
        {
          user_id: 2,
          user: {
            name: 'saldald'
          },
          story_id: 2,
          name: 'test',
          room_type: 'darp',
          has_password: false,
          password: 'asdf',
          word_limit: 5,
          user_count: 5,
          user_limit:10
        }]
      callback(rooms)
    }

    enterRoom(){

    }

    render(){
        return(
            <View style={BaseStyles.container}>
              <View style={{flexDirection:'row'}}>
                <TextInput underlineColorAndroid= '#FFFFFF' style={styles.search}>Search</TextInput>
                <Button style={styles.button}>Advanced</Button>
              </View>
              <PopulatableListView
                type={'room'}
                onFetch={this.getRooms}
                onPress={this.enterRoom}
                pagination={true}
              />
            </View>
        )
    }
}

const styles = StyleSheet.create({
  search:{
      flex: 1,
      color: '#FFFFFF',
      textAlign: 'center'
  },
  button:{
    flex: 1,
    borderRadius: 5,
    margin: 5,
    textAlignVertical: 'center',
  },
});

const layout = StyleSheet.create({

});

export default LobbyFinder;
