import React from 'react';
import { StyleSheet, View, Text, TextInput, Image } from 'react-native';
import { BaseStyles } from 'helpers/constants.js';
import Button from 'components/Button';
import Modal from 'components/Modal';
import { iconsMap, iconsLoaded } from 'helpers/icons-loader';

class CurrentStory extends React.Component {

    static navigatorButtons = {
        rightButtons: [{
            icon: iconsMap['gear'],
            id: 'actions',
        }]
    };

    constructor(props){
        super(props);
        this._hideModal = this._hideModal.bind(this);
        this._showModal = this._showModal.bind(this);
        this.state = {
          story: 'I think its hilarious u kids talking about semphis. u wouldnt say this stuff to him at lan, hes jacked. not only that but he wears the freshest clothes, eats at the chillest restaurants and hangs out with the hottest dudes. yall are pathetic lol',
          input: '',
          turn: true,
          typing: false,
          isModalVisible: false,
        }
    }

    sendStoryPart(){
      this.setState({story : this.state.story + ' ' + this.state.input})
      this._textInput.setNativeProps({text: ''});
      this.setState({turn : false})
      this.setState({typing : false})
    }

    renderStoryInput(){
      if(this.state.turn){
        return(
          <View style={{flex:1}}>
            <TextInput
               ref={component => this._textInput = component}
               style={styles.text}
               underlineColorAndroid={'#FFFFFF'}
               onChangeText={(text) => this.setState({ input : text })}
               onFocus={() => this.setState({typing : true})}
               onEndEditing={() => this.setState({typing : false})}
               onSubmitEditing={() => this.sendStoryPart()}
            />
          </View>
        )
      }
    }

    _hideModal(){
      this.setState({isModalVisible : false})
    }

    _showModal(){
      this.setState({isModalVisible : true})
    }

    renderModal(){
      return(
        <Modal
          onRequestClose={this._hideModal}
          visible={this.state.isModalVisible}>
          <View style={{justifyContent:'space-between'}}>
            <Button style={styles.button}>Vote Kick</Button>
            <Button style={styles.button}>Vote Skip</Button>
            <Button style={styles.button}>Add Friend</Button>
            <Button style={styles.button}>View Profile</Button>
          </View>
        </Modal>
      )
    }

    renderPlayer(name){
      return(
        <View style={styles.avaBox}>
          <Button
            onPress={this._showModal}>
            <View style={styles.avaButton}>
              <Image style={styles.avatar} source={require('assets/icons8-people-filled-50.png')}/>
            </View>
          </Button>
          <Text style={styles.names}>{name}</Text>
        </View>
      )
    }

    renderPlayerList(){
        if(!this.state.typing){
          return(
            <View style={{flex:1, justifyContent:'flex-end'}}>
              <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                {this.renderPlayer('meme')}
                {this.renderPlayer('Dan')}
                {this.renderPlayer('Simple')}
                {this.renderPlayer('Me')}
              </View>
            </View>
          )
        }
    }

    render(){
          return(
              <View style={BaseStyles.container}>
                  {this.renderModal()}
                  <View style={{flex:6}}>
                    <Text style={styles.text}>{this.state.story}</Text>
                  </View>
                  {this.renderStoryInput()}
                  {this.renderPlayerList()}
              </View>
          )
    }
}

const styles = StyleSheet.create({
  text:{
    color:'#FFFFFF'
  },
  names:{
    color:'#FFFFFF',
    textAlignVertical:'center',
    textAlign:'center'
  },
  avatar:{
      resizeMode: 'contain',
      height: 64,
      width: 64,
      margin: 10
  },
  avaBox:{
    flex:1,
    alignItems:'center',
  },
  avaButton:{
    borderRadius: 5,
    backgroundColor: '#FFFFFF'
  },
  button: {
      flex: 1,
      borderRadius: 5,
      padding: 10,
      textAlignVertical: 'center',
  },
});

const layout = StyleSheet.create({

});

export default CurrentStory;
