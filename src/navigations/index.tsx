import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator'
import { COLLECTIONEDIT, LISTMUSIC, PLAYMUSIC, TABNAVIGATION } from '@config/constrans';
import { CollectionEdit, ListMusic, PlayMusic } from '@scenes';

const Stack = createStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName={TABNAVIGATION} headerMode="none" >
                <Stack.Screen name={TABNAVIGATION} component={TabNavigator} ></Stack.Screen>
                <Stack.Screen name={LISTMUSIC} component={ListMusic}></Stack.Screen>
                <Stack.Screen name={PLAYMUSIC} component={PlayMusic}></Stack.Screen>
                <Stack.Screen name={COLLECTIONEDIT} component={CollectionEdit}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;