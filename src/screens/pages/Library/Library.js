import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { BaseStyles, pushScreen } from 'helpers/constants.js';
import Button from 'components/Button';
import { Navigation } from 'react-native-navigation';
import PopulatableListView from 'components/PopulatableListView';

class Library extends React.Component {

    constructor(props){
        super(props);
    }

    push(screen, title){
      passProps = {user: this.props.user}
      pushScreen(this.props.navigator,screen, title,passProps);
    }

    getStories(page, callback, options){
      var stories= [{
        title: 'meme',
        passage: 'scream',
        is_editing: false,
        is_complete: true,
        like_count: 253,
        view_count: 4124,
        comment_count: 21,
      },
      {
        title: 'memery',
        passage: 'fsdfs',
        is_editing: false,
        is_complete: true,
        like_count: 23,
        view_count: 512,
        comment_count: 3,
      },
      {
        title: 'Frogs! On Ice!',
        passage: 'fsdfs',
        is_editing: false,
        is_complete: true,
        like_count: 3603,
        view_count: 6000,
        comment_count: 402,
      }]

      callback(stories)
    }

    enterStory(){

    }

    render(){
        return(
            <View style={BaseStyles.container}>
              <TextInput underlineColorAndroid= '#FFFFFF' style={styles.chatbar}></TextInput>
              <PopulatableListView
                type={'story'}
                onFetch={this.getStories}
                onPress={this.enterStory}
                pagination={true}
              />
            </View>
        )
    }
}

const styles = StyleSheet.create({
  chatbar:{
      color: '#FFFFFF',
      textAlign: 'center'
  },
});

const layout = StyleSheet.create({

});

export default Library;
