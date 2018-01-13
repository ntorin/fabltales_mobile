import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {BaseStyles, PrimaryColor} from 'helpers/constants.js';
import RNButton from 'react-native-button';

class Button extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <RNButton
            onPress={this.props.onPress}
            textStyle={styles.textStyle}
            isLoading={this.props.isLoading}
            isDisabled={this.props.isDisabled}
            style={[styles.style, this.props.style]}>
            {this.props.children}
            </RNButton>
        )
    }
}

const styles = StyleSheet.create({
    textStyle: {
        color: '#FFFFFF'
    },

    style: {
        borderColor: PrimaryColor,
        backgroundColor: PrimaryColor,
        borderWidth: 8
    }
});

const layout = StyleSheet.create({

});

export default Button;
