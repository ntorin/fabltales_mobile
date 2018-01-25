import React from 'react';
import { StyleSheet, View, Text, Image, TextInput } from 'react-native';
import { BaseStyles } from 'helpers/constants.js';
import Button from 'components/Button';
import PopulatableListView from 'components/PopulatableListView';

class LobbyChat extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={BaseStyles.container}>
              <TextInput underlineColorAndroid= '#FFFFFF' style={styles.chatbar}></TextInput>
              <PopulatableListView></PopulatableListView>
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

export default LobbyChat;
