import React from 'react';
import { StyleSheet, View, Text, TextInput, Image } from 'react-native';
import { BaseStyles, goToHome } from 'helpers/constants.js';
import Button from 'components/Button';


class Login extends React.Component {

    constructor(props){
        super(props);
        this.loginUser = this.loginUser.bind(this);
    }

    loginUser(){
        goToHome();
    }

    render(){
        return(
            <View style={BaseStyles.container}>
              <Image style={styles.logo} source={require('assets/fabltales.png')}/>
              <View style={{flex:3}}>
                <View>
                  <Text style={styles.text}>Username</Text>
                  <TextInput style={styles.text} underlineColorAndroid={'#FFFFFF'}/>
                </View>
                <View>
                  <Text style={styles.text}>Password</Text>
                  <TextInput style={styles.text} underlineColorAndroid={'#FFFFFF'}/>
                </View>
              </View>
              <View style={{flexDirection:'row', flex:5}}>
                <View style={{flex: 1}}>
                  <Button style={styles.button}>
                    Register
                  </Button>
                  </View>
                  <View style={{flex: 1}}>
                  <Button style={styles.button} onPress={this.loginUser}>
                      Login
                  </Button>
                  </View>
              </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    logo:{
        flex: 1,
        resizeMode: 'contain',
        height: undefined,
        width: undefined,
        alignContent:'flex-start',
    },
    text:{
      color: '#FFFFFF',
    },
    button:{
      flex: 1,
      textAlignVertical: 'center',
      alignContent:'flex-start',
    },

});

const layout = StyleSheet.create({

});

export default Login;
