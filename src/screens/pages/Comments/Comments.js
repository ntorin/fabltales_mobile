import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { BaseStyles } from 'helpers/constants.js';
import PopulatableListView from 'components/PopulatableListView';

class Comments extends React.Component {

    constructor(props){
        super(props);
    }

    getComments(page, callback, options){
      var comments = [{
          story_id: 1,
          user_id: 1,
          user:{
            name: 'pummello'
          },
          is_author: true,
          message: 'i love anime yes i do! i love anime yes i do! i love anime yes i do! i love anime yes i do! i love anime yes i do! i love anime yes i do! i love anime yes i do! ',
          like_count: 420,
          dislike_count: 69,
        },
        {
          story_id: 1,
          user_id: 2,
          user:{
            name: 'slad'
          },
          is_author: false,
          message: 'this is great',
          like_count: 12,
          dislike_count: 1,
        }]
      callback(comments)
    }

    render(){
        return(
            <View style={BaseStyles.container}>
              <PopulatableListView
                type={'comment'}
                onFetch={this.getComments}
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

export default Comments;
