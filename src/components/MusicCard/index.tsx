import React from "react";
import { View,StyleSheet} from 'react-native';

import {Entypo} from 'react-native-vector-icons'

import {Title,SubTitle} from './styles';

export default function MusicCard({title,singer}){
    return(
        <View style={styles.descriptionContainer}>

            <View style={styles.songDescription}>
                <Title>{title}</Title>
                <SubTitle>{singer}</SubTitle>
            </View>
            <Entypo name='dots-three-vertical' size={23} style={styles.icon} />
            
        </View>
    )
}

const styles = StyleSheet.create({
    descriptionContainer:{
        flexDirection:'row',
    },    
    songDescription:{
        paddingLeft:5, 
        alignSelf:'center',  
        width:295
    },
    icon:{
        alignSelf:'center',   
    },
})


