import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { BaseStyles } from 'helpers/constants.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from 'components/Button';
class ListItem extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
              {this.renderItem(this.props.type)}
            </View>
        )
    }

    renderLock(boolin){
      if(boolin){
        return(
          <Icon name="lock" color="#FFFFFF"/>
        )
      }
    }

    renderItem(type){
      var toRender;

      switch (type) {
        case 'room':
          toRender = this.renderRoom(this.props.rowData)
          break;
        case 'story':
          toRender = this.renderStory(this.props.rowData)
          break;
        case 'goods':
          toRender = this.renderGoods(this.props.rowData)
          break;
        case 'comment':
          toRender = this.renderComment(this.props.rowData)
          break;
        case 'friend':
          toRender = this.renderFriend(this.props.rowData)
          break;
      }

      return toRender;
    }

    renderFriend(rd){
      return(
        <View style={BaseStyles.container}>
          <View style={{flexDirection:'row'}}>
            <View style={{flex:1}}>
              <Image style={styles.avatar} source={require('assets/FB-f-Logo__blue_100.png')}/>
            </View>
            <View style={{flex:3}}>
              <Text style={styles.goodName}>{rd.identifier}</Text>
              <Text style={styles.goodDesc}>{rd.bio}</Text>
            </View>
            <View style={{flex:1, contentAlign:'flex-end'}}>
              <Button style={styles.button}>
                <Text style={styles.text}>
                  <Icon name="settings" color="#FFFFFF"/>
                </Text>
              </Button>
            </View>
          </View>
        </View>
      )
    }

    renderGoods(rd){
      return(
        <View style={BaseStyles.container}>
          <View style={{flexDirection:'row'}}>
            <View style={{flex:1}}>
              <Image style={styles.avatar} source={require('assets/FB-f-Logo__blue_100.png')}/>
            </View>
            <View style={{flex:3}}>
              <Text style={styles.goodName}>{rd.item_name}</Text>
              <Text style={styles.goodDesc}>{rd.item_description}</Text>
            </View>
            <View style={{flex:1, contentAlign:'flex-end'}}>
              <Button style={styles.button}>
                <Text style={styles.text}>
                  <Icon name="coins" color="#FFFFFF"/>{rd.item_price}
                </Text>
              </Button>
            </View>
          </View>
        </View>
      )
    }

    renderCommentBackground(isAuthor, commenterName){
      if(isAuthor){
        return(
          <View style={styles.isAuthor}>
            <Text style={styles.commentAuthor}>{commenterName}</Text>
          </View>
        )
      }
      else{
        return(
          <View>
            <Text style={styles.commentAuthor}>{commenterName}</Text>
          </View>
        )
      }
    }

    renderComment(rd){
      return(
        <View style={BaseStyles.container}>
          <View style={{flexDirection:'row'}}>
            <View style={{flex:4}}>
              <View style={{flex:1, alignSelf:'flex-start'}}>
                {this.renderCommentBackground(rd.is_author, rd.user.name)}
              </View>
            </View>
            <View style={{flex:1, contentAlign:'flex-end'}}>
              <Button style={styles.button}>
                <Text style={styles.text}>
                  <Icon name="thumb-up" color="#FFFFFF"/>{rd.like_count}
                </Text>
              </Button>
            </View>
            <View style={{flex:1, contentAlign:'flex-end'}}>
              <Button style={styles.button}>
                <Text style={styles.text}>
                  <Icon name="thumb-down" color="#FFFFFF"/>{rd.dislike_count}
                </Text>
              </Button>
            </View>
          </View>
          <View>
            <Text style={styles.commentText}>{rd.message}</Text>
          </View>
        </View>
      )
    }

    renderStory(rd){
      return(
        <View style={BaseStyles.container}>
          <View style={{flexDirection:'row'}}>
            <View style={{flex:3}}>
              <Text style={styles.text}>{rd.title}</Text>
            </View>
            <View style={{flex:1}}>
              <Text style={styles.text}><Icon name="eye" color="#FFFFFF"/> {rd.view_count}</Text>
            </View>
            <View style={{flex:1}}>
              <Text style={styles.text}><Icon name="thumb-up" color="#FFFFFF"/> {rd.like_count}</Text>
            </View>
            <View style={{flex:1}}>
              <Text style={styles.text}><Icon name="comment" color="#FFFFFF"/> {rd.comment_count}</Text>
            </View>
          </View>
        </View>
      )
    }

    renderRoom(rd){
      return(
        <View style={BaseStyles.container}>
          <View style={{flexDirection:'row'}}>
            <View style={{flex:2}}>
              <Text style={styles.text}>{rd.name}</Text>
            </View>
            <View style={{flex:2}}>
              <Text style={styles.text}>{rd.user.name}</Text>
            </View>
            <View style={{flex:2}}>
              <Text style={styles.text}>{rd.room_type}</Text>
            </View>
            <View style={{flex:1}}>
              <Text style={styles.text}>{rd.user_count}/{rd.user_limit}</Text>
            </View>
            <View style={{flex:1}}>
              {this.renderLock(rd.has_password)}
            </View>
          </View>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  text:{
    textAlign: 'center',
    color:'#FFFFFF'
  },
  commentAuthor:{
    fontWeight: 'bold',
    fontSize: 16,
    color:'#FFFFFF',
  },
  commentText:{
    fontSize: 12,
    color:'#FFFFFF'
  },
  goodName:{
    fontWeight: 'bold',
    fontSize: 16,
    color:'#FFFFFF',
  },
  goodDesc:{
    fontSize: 12,
    color:'#FFFFFF'
  },
  avatar:{
      resizeMode: 'contain',
      height: 64,
      width: 64,
  },
  button:{
    textAlignVertical: 'center',
    borderRadius: 5,
    backgroundColor: '#FFFFFF'
  },
  isAuthor:{
    borderRadius: 5,
    backgroundColor: '#00bfff'
  },
});

const layout = StyleSheet.create({

});

export default ListItem;
