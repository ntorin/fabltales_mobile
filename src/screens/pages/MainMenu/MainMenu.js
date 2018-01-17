import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { BaseStyles, pushScreen } from 'helpers/constants.js';
import Button from 'components/Button';

class MainMenu extends React.Component {

    constructor(props){
        super(props);
        this.push = this.push.bind(this);
    }

    push(screen){
      passProps = {}
      pushScreen(this.props.navigator,screen,passProps);
    }

    render(){
        return(
            <View style={BaseStyles.container}>
                <Text>boo</Text>
                <Button onPress={() => this.push('fabltales_mobile.Create')}>Create</Button>
                <Button onPress={() => this.push('fabltales_mobile.Library')}>Library</Button>
                <Button onPress={() => this.push('fabltales_mobile.Shop')}>Shop</Button>
                <Button onPress={() => this.push('fabltales_mobile.Friends')}>Friends</Button>
                <Button onPress={() => this.push('fabltales_mobile.Profile')}>Profile</Button>
                <Button onPress={() => this.push('fabltales_mobile.Settings')}>Settings</Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({

});

const layout = StyleSheet.create({

});

export default MainMenu;
