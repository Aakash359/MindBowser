/**
 * @Assignment_Of_MindBowser_Submitted_By_Aakash_Verma on 8/2/21
 */

import * as React from 'react'
import {Text,StyleSheet, View,TouchableHighlight,Image} from 'react-native';
import MainContainer from './component/mainContainer';

import { scale } from "react-native-size-matters";
import { Images,} from '@common';

function Favourite({ navigation }) {
  


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
        >Favourite List</Text>

      </View>
      

        </MainContainer>
    );
  
}

const styles = StyleSheet.create({
 
 
 
  listItem: {
    
    justifyContent:'center',
    padding:15,
    
       
  },
 
});
export default Favourite

