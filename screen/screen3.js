import React,{useState} from "react";
import { Image, View,Text,TextInput, ImageBackground, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from "../styles/mainstyle";

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const Items =({pic}) =>{
    return(
        <View style={{borderRadius:36, padding:10,margin:10,backgroundColor:'white'}}>
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
    );
};
function Screen3(){
    return(
        <View style={[styles.container,{padding:0}]}>
            <View >
                <Image source={require('../img/imgFlowers1.png')}/>
                <Image style={[styles.icon,styles.ab,{alignSelf:'flex-start',top:25,left:15}]} source={require('../icon/iconBack.png')}/>
                <Image style={[styles.icon,styles.ab,{alignSelf:'flex-end',top:25,right:15}]} source={require('../icon/iconShare.png')}/>
                <View  style={[styles.ab,styles.row,{bottom:0,left:10}]}>
                    <Image style={[styles.icon,{height:32,width:32,marginRight:10}]} source={require('../img/Ava.png')}/>
                    <View style={{justifyContent:'center'}}>
                        <View style={[styles.row,{padding:0}]}>
                            <Text  style={[styles.wt,{padding:0}]}>name</Text>
                            <Image style={styles.icon} source={require('../icon/Icon_Verify.png')}/>                   
                        </View>
                        <View  style={[styles.row,{padding:0}]}>
                            <Image  source={require('../icon/iconStart.png')}/>
                            <Text style={styles.wt}>4.9</Text>
                        </View>
                    </View>
                    <View style={styles.trans2}></View>
                </View>
                <Text style={[styles.ab,styles.wt,{right:30,bottom:20}]}>date</Text>
            </View>
            <View style={{height:height*.5}}>
                <View style={{width:width,marginTop:20,paddingLeft:20}}>
                    <Image style={[styles.icon,styles.ab,{alignSelf:'flex-end',top:10,right:15}]} source={require('../icon/Icon_Like.png')}/>
                    <Text style={[styles.title,{fontSize:26}]}>Go for a walk</Text>
                    <Text style={[styles.title,{fontSize:26}]}>and feed the dog</Text>
                    <Text style={{fontSize:16}}>Leaving for a week, French Bulldog Wilfred needs help feeding twice a day and walk from 26 to 30 September. I bought food, it will be easy.</Text>
                    <View style={{flexDirection:'row',padding:10}}>
                        <Image style={[styles.icon]} source={require('../icon/iconWallet.png')}/>
                        <Text style={[styles.title,{fontSize:14}]}> Reward 34$</Text>
                    </View>
                    <View style={{flexDirection:'row',padding:10}}>
                        <Image style={[styles.icon]} source={require('../icon/iconGeo.png')}/>
                        <Text style={[styles.title,{fontSize:14}]}> 3 HERALD</Text>
                        <Text style={[styles.show,{fontSize:14}]}>  400m from you</Text>
                    </View>
                </View>
                <View style={[styles.row,styles.ab,{bottom:0}]}>
                    <TouchableOpacity style={[styles.shadow,{backgroundColor:'white',padding:15,margin:10}]}>
                        <Image style={[styles.icon]} source={require('../icon/Icon_Chat.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.shadow,{backgroundColor:'#A58EFF',padding:10,borderRadius:15,height:60,width:width*.7,justifyContent:'center'}]}>
                        <Text style={[styles.title,{fontSize:14,color:'white',alignSelf:'center'}]}>Respond</Text>          
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default Screen3;
