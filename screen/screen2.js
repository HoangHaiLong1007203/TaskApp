import React,{useState} from "react";
import { Image, View,Text,TextInput, ImageBackground, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from "../styles/mainstyle";

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

function Screen2(){
    return(
        <View style={[styles.container,{padding:0}]}>
            <ScrollView >
                <Image source={require('../img/Maps.png')}/>
            </ScrollView>
        </View>
    )
}
export default Screen2;
