/**
 * @Assignment_Of_MindBowser_Submitted_By_Aakash_Verma on 8/2/21
 */

import * as React from 'react'
import {Text, View,TouchableHighlight} from 'react-native';
import MainContainer from './component/mainContainer';
import Icon from 'react-native-vector-icons/AntDesign';
 



function SideMenuScreen({navigation}) 
{
 return (
      <MainContainer>
            
      <View style={{flexDirection:'row',
        backgroundColor:'#F3F2EE',
        height:'16%',
        padding:20,
        
        
        }}>
         <View style={{justifyContent:'center',
                       
                      }}>
                     
               <Text style={{fontSize:25,}}>
                     Giphy App
               </Text>

         </View>

       
         
         
       </View>
       
       <TouchableHighlight
               activeOpacity={0.6}
               underlayColor="#DDDDDD"
              style={{
              
                  borderWidth:0.5,borderColor:'#424242', height:'8%',
                  justifyContent:'center'
               }}
              onPress={() => navigation.navigate('Favourite')}
            >
      
     
           <View style = {{flexDirection:'row',}}>
           <Icon style = {{paddingLeft : 10,}} name="heart" size={25} color="black" />

            <Text  style={{textAlign:'center',paddingLeft:10, fontSize:18,}} >
                 Favourite
           </Text>

           </View>
      </TouchableHighlight>

      <TouchableHighlight
               activeOpacity={0.6}
               underlayColor="#DDDDDD"
              style={{
              
                  borderWidth:0.5,borderColor:'#424242', height:'8%',
                  justifyContent:'center'
               }}
              onPress={() => navigation.navigate('DetailView')}
            >
      
     
           <View style = {{flexDirection:'row',}}>
           <Icon style = {{paddingLeft : 10,}} name="profile" size={25} color="black" />

            <Text  style={{textAlign:'center',paddingLeft:10, fontSize:18,}} >
                  Giphy Detail
           </Text>

           </View>
           

   
     </TouchableHighlight>
      

 </MainContainer>
     
    );
  
}


export default SideMenuScreen

