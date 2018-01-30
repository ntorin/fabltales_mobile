import React from 'react';
import { StyleSheet, View, Text, TextInput, Image, Alert } from 'react-native';
import { BaseStyles, goToHome, setAuthData } from 'helpers/constants.js';
import Button from 'components/Button';
import { JSON_HEADERS, AUTH_POST, AUTH_POST_SIGNIN } from 'helpers/apicalls.js';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }

        this.loginUser = this.loginUser.bind(this);
        this.registerUser = this.registerUser.bind(this);
    }

    setFirstResponse = (response) => {
        this.setState({ responseHeaders: response.headers.map, status: response.status })
    }

    loginUser() {
        var email = this.state.email;
        var password = this.state.password;
        console.log(email)

        this.setState({ loginLoading: true, loginDisabled: true, registerDisabled: true })

        AUTH_POST_SIGNIN('boo2@boo.com', 'ooboi1234', this.setFirstResponse)
            .then((responseJSON) => {
                this.validateAuthentication(responseJSON);
            });
    }

    registerUser() {

        var email = this.state.email;
        var password = this.state.password;
        var password_confirmation = this.state.password;

        this.setState({ registerLoading: true, registerDisabled: true, loginDisabled: true })

        AUTH_POST(email, password, password_confirmation, this.setFirstResponse)
            .then((responseJSON) => {
                this.validateAuthentication(responseJSON);
            });
    }

    isNewUser() {
        var u = this.state.user;
        return (u.accepted_tos == false || u.identifier == null || u.name == null) ? true : false;
    }

    validateAuthentication(responseJSON) {
        if (this.state.status == 200) {
            this.setState({ user: responseJSON.data })
            setAuthData(this.state.responseHeaders['uid'][0],
                this.state.responseHeaders['client'][0],
                this.state.responseHeaders['access-token'][0],
                this.state.responseHeaders['token-type'][0],
                this.state.responseHeaders['expiry'][0]);
            goToHome(this.state.user)
        } else {
            Alert.alert('Login Error', "Please make sure your email and password are correct, and try again.", [{ text: "OK", }])
            this.setState({ loginLoading: false, loginDisabled: false, registerLoading: false, registerDisabled: false })
        }
    }



    setHeaders() {
        console.log('running setHeaders');
    }

    render() {
        return (
            <View style={BaseStyles.container}>
                <Image
                    style={styles.logo}
                    source={require('assets/fabltales.png')}
                />
                <View style={{ flex: 3 }}>
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
                <View style={{ flexDirection: 'row', flex: 5 }}>
                    <View style={{ flex: 1 }}>
                        <Button style={styles.button} onPress={this.registerUser}>
                            Register
                    </Button>
                    </View>
                    <View style={{ flex: 1 }}>
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
    logo: {
        flex: 1,
        resizeMode: 'contain',
        height: undefined,
        width: undefined,
        alignContent: 'flex-start',
    },
    text: {
        color: '#FFFFFF',
    },
    button: {
        borderRadius: 5,
        margin: 5,
        textAlignVertical: 'center',
    },

});

const layout = StyleSheet.create({

});

export default Login;
