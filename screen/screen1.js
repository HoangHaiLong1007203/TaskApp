import React,{useState, useCallback } from "react";
import { Image, View,Text,TextInput, ImageBackground, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from "../styles/mainstyle";

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');


const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const clearSearch = () => {
      setSearchQuery('');
    };
    return (
      <View style={styles.searchbar}>
        <Image style={styles.icon} source={require('../icon/iconSearch.png')}/>
        <TextInput
          style={styles.input}
          onChangeText={setSearchQuery}
          value={searchQuery}
          placeholder="Search"
        />
    </View>
    );
  };
const Tit =({txt1,txt2,onPress}) =>{
    return(
        <View style={[styles.row,{justifyContent:'space-between',width:width,padding:20}]}>
            <Text style={styles.title}>{txt1}</Text>
            <TouchableOpacity  onPress={onPress} >
                <Text style={styles.show}>{txt2}</Text>
            </TouchableOpacity>
        </View>
    )
}
const Items =({pic, navigation}) =>{
    
    return(
        <TouchableOpacity  onPress={() => navigation.navigate('Screen3')} >
            <View style={[styles.shadow,{borderRadius:36, padding:10,margin:10,backgroundColor:'white'}]}>
                <View style={{width:width*.6, margin:10}}>
                    <Image style={styles.icon} source={pic}/>
                    <Text style={[styles.ab,styles.wt]}>date</Text>
                    <Image style={[styles.icon,styles.ab,{alignSelf:'flex-end',top:10,right:15}]} source={require('../icon/Vector.png')}/>
                    <View  style={[styles.ab,styles.row,{bottom:0,left:10}]}>
                        <Image style={[styles.icon,]} source={require('../img/Ava.png')}/>
                        <Text style={styles.wt}>name</Text>
                        <Image style={styles.icon} source={require('../icon/Icon_Verify.png')}/>
                        <View style={styles.trans}></View>
                    </View>
                </View>
                <View style={{flexDirection:'row',width:width*.6,padding:10,justifyContent:'space-between'}}>
                    <Text style={styles.title}>caption</Text>
                    <Image style={[styles.icon]} source={require('../icon/Icon_Chat.png')}/>
                </View>
            </View>
        </TouchableOpacity>
    );
};
const Items2 =({icon,txt1,txt2}) =>{
    return(
        <TouchableOpacity >
            <View style={[{backgroundColor:'white',borderRadius:10,margin:5,width:width*.9},styles.row,styles.shadow]}>           
                <View style={styles.row}>
                    <Image style={[styles.icon]} source={icon}/>
                    <View style={{alignItems:'flex-start',marginLeft:10}}>
                        <Text style={[styles.title,{fontSize:16}]}>{txt1}</Text>
                        <Text style={[styles.show,{fontSize:14}]}>{txt2}</Text>
                    </View>
                </View>
                <Image style={[styles.icon]} source={require('../icon/iconMore.png')}/>
            </View>
        </TouchableOpacity>
    );
};
function Screen1({navigation}){
    const handlePress = useCallback(() => {
        navigation.navigate('Screen2');
    }, [navigation]);
    return(
        <View style={styles.container}>
            <View style={[styles.header,styles.shadow]}>
                <SearchBar/>
                <TouchableOpacity >
                    <Image style={styles.icon} source={require('../icon/Icon_Filter.png')}/>
                </TouchableOpacity>
            </View>
            <ScrollView >               
                <Tit txt1='Next to you' txt2='On the map ' 
                    onPress={handlePress}/>
                <View>
                    <View style={[styles.row,{padding:0}]}>
                        <Items pic={require('../img/imgDogCard.png')} navigation={navigation}/>
                        <Items pic={require('../img/imgDogCard.png')} navigation={navigation}/>
                        <Items pic={require('../img/imgDogCard.png')} navigation={navigation}/>
                    </View>
                </View>
                <Tit txt1='Categories' txt2='See all'/>
                <View>
                    <Items2 icon={require('../icon/Icon_Moving.png')} 
                    txt1='Moving and things' 
                    txt2='24 tasks'/>
                    <Items2 icon={require('../icon/Icon_House.png')} 
                    txt1='Help around the house' 
                    txt2='5 tasks'/>
                </View>
            </ScrollView>
        </View>
    )
}
export default Screen1;