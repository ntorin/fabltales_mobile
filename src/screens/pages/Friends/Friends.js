import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { BaseStyles, pushScreen } from 'helpers/constants.js';
import Button from 'components/Button';
import { Navigation } from 'react-native-navigation';
import PopulatableListView from 'components/PopulatableListView';

class Friends extends React.Component {

    constructor(props){
        super(props);
    }

    getFriends(page, callback, options){
      var friends = [{
          identifier: 'pummello',
          bio: 'i love anime!'
        },
        {
          identifier: 'slald',
          bio: 'i hate life i hate life i hate life i hate life i hate life'
        }]

      callback(friends)
    }

    render(){
        return(
            <View style={BaseStyles.container}>
              <PopulatableListView
                type={'friend'}
                onFetch={this.getFriends}
                pagination={true}
              />
            </View>
        )
    }
}

const styles = StyleSheet.create({

});

const layout = StyleSheet.create({

});

export default Friends;
