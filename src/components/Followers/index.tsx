import React from "react";
import { View} from 'react-native';

import { Title } from "./styles";

export default function Followers({name}){
    return(
        <View>
            <Title>{name}</Title>
        </View>
    )
}
