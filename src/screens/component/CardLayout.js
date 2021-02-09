/**
 * @Assignment_Of_MindBowser_Submitted_By_Aakash_Verma on 8/2/21
 */

import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import { scale } from "react-native-size-matters";
import Icon from 'react-native-vector-icons/AntDesign'; 

const { width, height } = Dimensions.get('window')



const CardLayout = ({item }) => {
     
    console.log(item)
    return (
        <TouchableOpacity
              
       
         >
        <View style={styles.cardView}>
            
            <Text style={styles.title}> {item.title}</Text>
            <Text style={styles.author}>{item.author} </Text>
            <Image
            resizeMode='contain'
            style={styles.image}
            source={{uri: item.images.original.url}}
            />
            <Text style={styles.description}>{item.description}</Text>
            <Icon style = {{paddingLeft : 10,}} name="hearto" size={25} color="black" />

        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardView: {
            padding: scale(10),
            shadowColor: "#000",
            shadowOffset: {
              width: 0.8,
              height: 0.8,
            },
            shadowOpacity: 0.48,
            shadowRadius: 11.95,
            elevation: 20,
            borderRadius: width * 0.05,
            backgroundColor: "#fff",
            margin: width * 0.03,
            
    },
    title: {
        marginHorizontal: width * 0.05,
        marginVertical: width * 0.03,
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'

    },
    description: {
        marginVertical: width * 0.05,
        marginHorizontal: width * 0.02,
        color: 'gray',
        fontSize: 18
    },
    image: {
        height: height / 6,
        marginLeft: width * 0.05,
        marginRight: width * 0.05,
        marginVertical: height * 0.02
    },
    author: {
        marginBottom: width * 0.0,
        marginHorizontal: width * 0.05,
        fontSize: 15,
        color: 'gray'

    }

})



export default CardLayout