import React from "react";
import { View,Text, StyleSheet, Touchable, TouchableOpacity } from "react-native";



const Task = ({text}) => {
  return (
    <View style={styles.item}>
        <View style={styles.itemsLeft}>
            <TouchableOpacity style={styles.square}></TouchableOpacity>

            <Text style={styles.itemText}>{text}</Text>
        </View>

        <View style={styles.circle}></View>
       
    </View>
  )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor:'white',
        padding:15,
        borderRadius:6,
        marginBottom:20,
        flexDirection:"row",
        justifyContent:"space-between",

    },
    itemsLeft:{
        flexDirection:"row",
        alignItems:"center",
        flexWrap:"wrap"
        //  
    },

    square:{
        width:24,
        height:24,
        backgroundColor:'#915F6D',
        borderRadius:5,
        opacity:0.4,
        marginRight:15
    },
    itemText:{
        maxWidth:80
    },
    circle:{
        width:12,
        height:12,
        borderColor:'#915F6D',
        borderRadius:5,
        borderWidth:2,
        alignSelf:"center"
    }
})

export default Task