import React from "react";
import { View,StyleSheet } from 'react-native';

import { Title,User } from "./styles";

export default function Playlists({title,user}){
    return(
        <View style={styles.details}>
            <Title>{title}</Title>
            <User>De {user}</User>
        </View>
    )
}

const styles = StyleSheet.create({
    details:{
        display:'flex',
        width: 140,
        justifyContent:'flex-start',
        marginTop: 10,
        marginLeft: 10,
    },
})