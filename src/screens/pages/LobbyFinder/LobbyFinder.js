import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { BaseStyles } from 'helpers/constants.js';
import Button from 'components/Button';
import PopulatableListView from 'components/PopulatableListView';

class LobbyFinder extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={BaseStyles.container}>
              <View style={{flexDirection:'row'}}>
                <TextInput underlineColorAndroid= '#FFFFFF' style={styles.search}>Search</TextInput>
                <Button style={styles.button}>Advanced</Button>
              </View>
              <PopulatableListView></PopulatableListView>
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
