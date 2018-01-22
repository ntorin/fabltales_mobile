import React from 'react';
import { StyleSheet, View, Text, TextInput, Image } from 'react-native';
import { BaseStyles, goToHome } from 'helpers/constants.js';
import Button from 'components/Button';
import { JSON_HEADERS, AUTH_POST, AUTH_POST_SIGNIN } from 'helpers/apicalls.js';

class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          email: '',
          password: '',
        }

        this.loginUser = this.loginUser.bind(this);
        this.registerUser = this.registerUser.bind(this);
    }

    loginUser(){
      AUTH_POST_SIGNIN(this.state.email, this.state.password, this.setHeaders)
        .then((responseJSON) => {
          console.log(responseJSON)
          goToHome()
        })
    }

    registerUser(){
      AUTH_POST(this.state.email, this.state.password, this.state.password, this.setHeaders)
        .then((responseJSON) => {
          console.log(responseJSON);
        });
    }

    setHeaders(){
      console.log('running setHeaders');
    }

    render(){
        return(
            <View style={BaseStyles.container}>
              <Image style={styles.logo} source={require('assets/fabltales.png')}/>
              <View style={{flex:3}}>
                <View>
                  <Text style={styles.text}>Email</Text>
                  <TextInput
                    style={styles.text}
                    underlineColorAndroid={'#FFFFFF'}
                    onChangeText={(text) => this.setState({ email: text })}
                  />
                </View>
                <View>
                  <Text style={styles.text}>Password</Text>
                  <TextInput
                    style={styles.text}
                    underlineColorAndroid={'#FFFFFF'}
                    secureTextEntry={true}
                    onChangeText={(text) => this.setState({ password: text })}
                  />
                </View>
              </View>
              <View style={{flexDirection:'row', flex:5}}>
                <View style={{flex: 1}}>
                    <Button style={styles.button} onPress={this.registerUser}>
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
      borderRadius: 5,
      margin: 5,
      textAlignVertical: 'center',
    },

});

const layout = StyleSheet.create({

});

export default Login;
