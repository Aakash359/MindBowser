/**
 * @Assignment_Of_MindBowser_Submitted_By_Aakash_Verma on 8/2/21
 */

import React, { useState, useEffect} from 'react';
import {StyleSheet,FlatList,TextInput,Text,View,
TouchableHighlight,Image,ActivityIndicator,TouchableOpacity} from 'react-native';
import { Images,} from '@common';
import MainContainer from './component/mainContainer';
import CardLayout from './component/CardLayout';
import { scale } from "react-native-size-matters"; 

function Home({navigation}) {
  

  const [gifs, setGifs] = useState([]);
  const [term, updateTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(1);

  useEffect(() => getData(), []);
  async function fetchGifs() {

    try {
      const API_KEY = 'gPZGLXpiFFyZYVZDeXMtmcJJrqZNZJ7a';
      const BASE_URL = 'http://api.giphy.com/v1/gifs/search';
      const resJson = await fetch(`${BASE_URL}?api_key=${API_KEY}&q=${term}`);
      const res = await resJson.json();
      setGifs(res.data);
    } catch (error) {
      console.warn(error);
    }
  }

  const getData = () => {
    console.log('getData');
    setLoading(false);
    
    fetch('http://api.giphy.com/v1/gifs/searchoffset='
          + offset)
     
      .then((response) => response.json())
      .then((responseJson) => {
        setOffset(offset + 1);
        setGifs([...gifs, ...responseJson.results]);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const renderFooter = () => {
    return (
    
      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={getData}
          style={styles.loadMoreBtn}>
          <Text style={styles.btnText}>Load More</Text>
          {loading ? (
            <ActivityIndicator
              color="white"
              style={{marginLeft: 8}} />
          ) : null}
        </TouchableOpacity>
      </View>
    );
  };

  const ItemView = ({item}) => {
    return (
      
      <Text
        style={styles.itemStyle}
        onPress={() => getItem(item)}>
        {item.id}
        {'.'}
        {item.title.toUpperCase()}
      </Text>
    );
  };

 

  const getItem = (item) => {
    
    alert('Id : ' + item.id + ' Title : ' + item.title);
  };

  function onEdit(newTerm) {
    updateTerm(newTerm);
    fetchGifs();
  }
    return (
      
      <MainContainer>

         <TouchableHighlight
          activeOpacity={1}
          underlayColor={'#ddd'}
          onPress={() =>
            navigation.toggleDrawer()}
          style={{
            width: scale(35), height: scale(35),
            alignItems: "center",
            justifyContent: 'center',
            backgroundColor: '#424242'
          }}
        >
          <Image source={Images.menu}
            style={{
              width: scale(20),
              height: scale(20),
            }} />
        </TouchableHighlight>
         <View
        style={{
           backgroundColor: '#424242',
           borderRadius: scale(5),
           justifyContent: "center",
           alignItems:"center",
           padding: scale(10),
         
           alignSelf:'center'}}
      >
         <Text style={{
         fontSize: scale(18),
          color: 'white',
         
        }}
        numberOfLines={1}
        >Giphy Data</Text>

      </View>
         <View style={styles.view}>
      <TextInput
        
        placeholder="Search Giphy"
        placeholderTextColor='grey'
        style={styles.textInput}
        onChangeText={(text) => onEdit(text)}
      />
       
      <FlatList
        data={gifs}
        onEndThreshold={0.3}
        keyExtractor={(item, index) => index.toString()}
        enableEmptySections={true}
        renderItem={ItemView}
        ListFooterComponent={renderFooter}
        renderItem={({ item }) => {
          
                return <CardLayout item={item} />
              }}
            />
           
    </View>
      </MainContainer>
        
    );
  
}

const styles = StyleSheet.create({
 
  view: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white'
  },
  textInput: {
    width: '100%',
    height: 50,
    color: 'black',
    backgroundColor:'#F3F2EE',
    borderRadius:10,
    borderWidth:2,
    borderColor:'#424242'
  },
  image: {
    width: 300,
    height: 150,
    borderWidth: 3,
    marginBottom: 5
  },
 
  btnText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  
 
});
export default Home

