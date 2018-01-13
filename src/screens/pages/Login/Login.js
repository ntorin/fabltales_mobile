import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
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
              <Button onPress={this.loginUser}>
              ooboi
              </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({

});

const layout = StyleSheet.create({

});

export default Login;
