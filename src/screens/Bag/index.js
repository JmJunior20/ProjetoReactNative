import React, {useState} from 'react';
import { View, Text, TouchableHighlight, Image, Linking } from 'react-native'

import Styles from './styles';

const Bag = ({ navigation }) => {

    return (
        <View style={ Styles.centeredView }>
        <View style={ Styles.cardView }>
          <Image style={ Styles.promotionImage } source={ {uri:"https://i.pinimg.com/236x/d5/b3/a2/d5b3a28ec99cfe5b3b20226430764512.jpg" }}  />
          <View style={ Styles.descriptionText }>
            <Text style={ Styles.titleText }>Uma Lista (quase) Definitiva De Piores Medos</Text>            
          </View>
          <View style={ Styles.descriptionText }>  
            <Text style={ Styles.priceText }>R$32,90</Text>          
            <Text style={ Styles.priceText }>QNT: 1</Text>
          </View>          
        </View>
        <View style={ Styles.cardView }>
          <Image style={ Styles.promotionImage } source={ {uri:"https://i.pinimg.com/236x/d5/b3/a2/d5b3a28ec99cfe5b3b20226430764512.jpg" }}  />
          <View style={ Styles.descriptionText }>
            <Text style={ Styles.titleText }>Uma Lista (quase) Definitiva De Piores Medos</Text>            
          </View>
          <View style={ Styles.descriptionText }>  
            <Text style={ Styles.priceText }>R$32,90</Text>          
            <Text style={ Styles.priceText }>QNT: 1</Text>
          </View>          
        </View>
        <Text style={ Styles.priceText }>Total: R$65,80</Text>        
        <TouchableHighlight
            style={ Styles.linkButton }
            onPress={() => navigation.navigate('End')}
            >
            <Text style={ Styles.textLinkButton }>COMPRAR</Text>
        </TouchableHighlight>
      </View>
    );    
};

export default Bag;