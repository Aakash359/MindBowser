/**
 * @Assignment_Of_MindBowser_Submitted_By_Aakash_Verma on 8/2/21
 */

import React from "react";
import { View,StyleSheet, } from "react-native";

const MainContainer = (props) => {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
  
  });

export default MainContainer;
