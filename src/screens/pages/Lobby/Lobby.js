import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { BaseStyles } from 'helpers/constants.js';
import Button from 'components/Button';
import PopulatableListView from 'components/PopulatableListView';

class Lobby extends React.Component {

    constructor(props){
        super(props);
    }

    static navigatorButtons = {
            rightButtons: [{
                title: 'Start',
                id: 'actions',
            }]
        };

    render(){
        return(
            <View style={BaseStyles.container}>
              <PopulatableListView></PopulatableListView>
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

export default Lobby;
