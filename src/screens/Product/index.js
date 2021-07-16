import React, {useState} from 'react';
import { View, Text, TouchableHighlight, Image, Linking } from 'react-native'

import Styles from './styles';


const Product = ({ navigation, route }) => {
    const {produto} = route.params;

    return (
        <View style={ Styles.centeredView }>
        <View style={ Styles.cardView }>
          <Image style={ Styles.promotionImage } source={ {uri:produto.url} } />
          <View style={ Styles.descriptionText }>
            <Text style={ Styles.titleText }>{produto.nome}</Text>
            <Text style={ Styles.priceText }>R${produto.preco},00</Text>
            <TouchableHighlight
                style={ Styles.linkButton }
                onPress={() => navigation.navigate('Sacola')}
              >
              <Text style={ Styles.textLinkButton }>COMPRAR</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );    
};

export default Product;