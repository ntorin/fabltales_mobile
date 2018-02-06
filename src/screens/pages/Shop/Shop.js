import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { BaseStyles } from 'helpers/constants.js';
import PopulatableListView from 'components/PopulatableListView';

class Shop extends React.Component {

    constructor(props){
        super(props);
    }

    getGoods(page, callback, options){
      var goods = [{
          item_id: 1,
          item_name: 'yeet',
          item_description: 'does stuff okay',
          item_price: 120,
          item_image: 'meme',
        },
        {
          item_id: 2,
          item_name: 'pizza',
          item_description: 'yummy stuff',
          item_price: 1000,
          item_image: 'meme',
        }]
      callback(goods)
    }

    render(){
        return(
            <View style={BaseStyles.container}>
              <PopulatableListView
                type={'goods'}
                onFetch={this.getGoods}
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

export default Shop;
