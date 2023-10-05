import { StyleSheet } from 'react-native';
import {Dimensions} from "react-native";

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCFCFC',
        alignItems: 'center',
        justifyContent: 'center',
        padding:10,
        // fontFamily:'Montserrat',
    },
    header:{
        // height:height*.12,
        backgroundColor: '#FCFCFC',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        width:width,
        marginTop:30,
    },
    shadow: {
        // shadowColor: '#000',
        // shadowOffset: {
        //     width: 0,
        //     height: 10,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        elevation: 5,
    },
    searchbar: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 12,
        backgroundColor:'white',
        borderWidth:1,
        borderColor:'white',
        width:width*.75,
        padding:10,
        height:48
    },
    title:{
        fontSize:20,
        color:'#313131',
        fontWeight:'bold',
        // textAlign:'right',
    },
    show:{
        fontSize:13,
        color:'#989898',
        textAlign:'right',
    },
    wt:{
        color:'white',
        padding:10,
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        alignItems:'center',
    },
    icon:{
        padding:10,
    },
    ab:{
        position:'absolute',
        zIndex:1,
    },
    trans:{
        backgroundColor:'white',
        opacity:.2,
        borderRadius:60,
        height:40,
        width:120,
        position:'absolute',
    },
    trans2:{
        backgroundColor:'white',
        opacity:.2,
        borderRadius:60,
        height:60,
        width:130,
        position:'absolute',
    },
})
export default styles;
