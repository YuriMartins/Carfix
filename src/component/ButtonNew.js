import React from 'react';
import { View, StyleSheet } from 'react-native';

import {FontAwesome5} from '@expo/vector-icons';

export default function ButtonNew({ focused, size }){
    return(
        <View style={[styles.container, { backgroundColor: focused ? '#FF0000' : 'gray' }]}>
            <FontAwesome5 name="robot" size={size} color={ focused ? '#FFF' : '#FFF' }/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    }
})