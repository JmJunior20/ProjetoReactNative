import React, {useState} from 'react';
import { View, Text, TouchableHighlight, Image, FlatList } from 'react-native'

import Styles from './styles';

import getPosts from '../../repository/PostsRepository';

const Home = ({ navigation }) => {

    return (      
        <View style={ Styles.centeredView }>          
        <View style={ Styles.cardView }>
          <Image style={ Styles.promotionImage } source={ {uri:"https://i.pinimg.com/236x/d5/b3/a2/d5b3a28ec99cfe5b3b20226430764512.jpg" }}  />
          <View style={ Styles.descriptionText }>
            <Text style={ Styles.titleText }>"1 - Uma Lista (quase) Definitiva De Piores Medos"</Text>
            <Text style={ Styles.priceText }>"R$32,90"</Text>
            <TouchableHighlight
                style={ Styles.linkButton }
                title="Product"
                onPress={() => navigation.navigate('Detalhes')}
              >
              <Text style={ Styles.textLinkButton }>SAIBA MAIS</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={ Styles.cardView }>
          <Image style={ Styles.promotionImage } source={ {uri:"https://i.pinimg.com/236x/d5/b3/a2/d5b3a28ec99cfe5b3b20226430764512.jpg" }}  />
          <View style={ Styles.descriptionText }>
            <Text style={ Styles.titleText }>"2 - Uma Lista (quase) Definitiva De Piores Medos"</Text>
            <Text style={ Styles.priceText }>"R$32,90"</Text>
            <TouchableHighlight
                style={ Styles.linkButton }
                title="Product"
                onPress={() => navigation.navigate('Detalhes')}
              >
              <Text style={ Styles.textLinkButton }>SAIBA MAIS</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={ Styles.cardView }>
          <Image style={ Styles.promotionImage } source={ {uri:"https://i.pinimg.com/236x/d5/b3/a2/d5b3a28ec99cfe5b3b20226430764512.jpg" }}  />
          <View style={ Styles.descriptionText }>
            <Text style={ Styles.titleText }>"3 - Uma Lista (quase) Definitiva De Piores Medos"</Text>
            <Text style={ Styles.priceText }>"R$32,90"</Text>
            <TouchableHighlight
                style={ Styles.linkButton }
                title="Product"
                onPress={() => navigation.navigate('Detalhes')}
              >
              <Text style={ Styles.textLinkButton }>SAIBA MAIS</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={ Styles.cardView }>
          <Image style={ Styles.promotionImage } source={ {uri:"https://i.pinimg.com/236x/d5/b3/a2/d5b3a28ec99cfe5b3b20226430764512.jpg" }}  />
          <View style={ Styles.descriptionText }>
            <Text style={ Styles.titleText }>"4 - Uma Lista (quase) Definitiva De Piores Medos"</Text>
            <Text style={ Styles.priceText }>"R$32,90"</Text>
            <TouchableHighlight
                style={ Styles.linkButton }
                title="Product"
                onPress={() => navigation.navigate('Detalhes')}
              >
              <Text style={ Styles.textLinkButton }>SAIBA MAIS</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );    
};

export default Home;