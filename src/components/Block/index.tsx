import React from "react";
import { View,StyleSheet} from 'react-native';

import { Title } from "./styles";

export default function Block({blockTitle})
{
    return (
        <View style={styles.block}>
            <View style={styles.titleView}>
                <Title>{blockTitle}</Title>
            </View>  
        </View>            
    )
}

const styles = StyleSheet.create({
    block:{
        width: 150,
        height: 90,
        marginRight: 10,
        borderRadius: 10,
        backgroundColor: '#DBDBDB',
    },  
    titleView:{
        marginTop:10,
        marginLeft:12,
    },       
})
