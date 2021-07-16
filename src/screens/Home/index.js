import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableHighlight, ActivityIndicator } from 'react-native'

import Styles from './styles';

import getPosts from '../../repository/postsRepository';

import Header from '../../components/Header';

const Home = ({ navigation }) => {
    const [postList, setPostList] = useState([]);
    const [loading, setLoading] = useState(false)

    const carregaPosts = async () => {
      if(loading) return      
      setLoading(true)
      const posts = await getPosts()
      setPostList(posts)
      setLoading(false)
    }

    const renderFooter = () => {
      if(!loading) return null
      return <ActivityIndicator size="large" color="#111" />
    }

    useEffect(() => {
      // if(loading) return
      carregaPosts()
    }, [])

    return ( 
      <>
      <Header /> 
      <FlatList
        style={Styles.container}         
        data={postList}
        keyExtractor={item => item.id}
        ListFooterComponent={renderFooter}
        renderItem={({item}) => (
                  
          <View style={ Styles.cardView }>
            <Image style={ Styles.promotionImage } source={ {uri:item.url} } />
            <View style={ Styles.descriptionText }>
              <Text style={ Styles.titleText }>{item.nome}</Text>
              <Text style={ Styles.priceText }>R${item.preco},00</Text>
              <TouchableHighlight
                  style={ Styles.linkButton }
                  title="Product"
                  onPress={() => navigation.navigate('Detalhes', {produto: item})}
                >
                <Text style={ Styles.textLinkButton }>SAIBA MAIS</Text>
              </TouchableHighlight>
            </View>
          </View>         
          
        )}
      />
      </> 
    );    
};

export default Home;