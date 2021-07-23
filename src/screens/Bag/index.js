import React, { useState } from 'react';
import { View, Text, TouchableHighlight, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import Styles from './styles';

import Header from '../../components/Header';

const Bag = ({ navigation }) => {
  const [numero, setNumero] = useState(1);

    return (
        <>
        <Header />
        <View style={ Styles.centeredView }>
        <View style={ Styles.cardView }>
          <Image style={ Styles.promotionImage } source={ {uri:"https://i.pinimg.com/236x/d5/b3/a2/d5b3a28ec99cfe5b3b20226430764512.jpg" }}  />
          <View style={ Styles.descriptionText }>
            <Text style={ Styles.titleText }>Uma Lista (quase) Definitiva De Piores Medos</Text>            
          </View>
          <View style={ Styles.descriptionText }>  
            <Text style={ Styles.priceText }>R$32,90</Text>          
            <View style={ Styles.qnt }>
                <TouchableOpacity
                    onPress={() => setNumero(numero - 1)}>
                        <Icon name="minuscircleo" size={25} />
                </TouchableOpacity>  
              <Text style={ Styles.priceText }>{numero}</Text>
                <TouchableOpacity
                    onPress={() => setNumero(numero + 1)}>
                        <Icon name="pluscircleo" size={25} />
                </TouchableOpacity>          
            </View>
          </View>          
        </View>
        <View style={ Styles.cardView }>
          <Image style={ Styles.promotionImage } source={ {uri:"https://i.pinimg.com/236x/d5/b3/a2/d5b3a28ec99cfe5b3b20226430764512.jpg" }}  />
          <View style={ Styles.descriptionText }>
            <Text style={ Styles.titleText }>Uma Lista (quase) Definitiva De Piores Medos</Text>            
          </View>
          <View style={ Styles.descriptionText }>  
            <Text style={ Styles.priceText }>R$32,90</Text>         
            
            <View style={ Styles.qnt }>
                <TouchableOpacity
                    onPress={() => setNumero(numero - 1)}>
                        <Icon name="minuscircleo" size={25} />
                </TouchableOpacity>  
              <Text style={ Styles.priceText }>{numero}</Text>
                <TouchableOpacity
                    onPress={() => setNumero(numero + 1)}>
                        <Icon name="pluscircleo" size={25} />
                </TouchableOpacity>          
            </View>  
          </View>        
                   
        </View>
        <Text style={ Styles.priceText }>Total: R$65,80</Text>        
        <TouchableHighlight
            style={ Styles.linkButton }
            onPress={() => navigation.navigate('End')}
            >
            <Text style={ Styles.textLinkButton }>COMPRAR</Text>
        </TouchableHighlight>
        <TouchableHighlight
            style={ Styles.homeButton }
            onPress={() => navigation.navigate('Home')}
            >
            <Text style={ Styles.textLinkButton }>CONTINUAR COMPRANDO</Text>
        </TouchableHighlight>
      </View>
      </>
    );    
};

export default Bag;