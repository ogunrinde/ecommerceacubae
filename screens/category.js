import React, { Component } from 'react';
import {View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { CheckBox,Card } from 'react-native-elements'
import {search} from '../action/fetch';
import {connect } from 'react-redux';

class CategoryScreen extends React.Component {
    constructor(props){
       super(props);
    }
    static navigationOptions = {
        header:null
    };
    search = async (val) =>{
        let param = {
            sex:val,
            type:''
        };
        //this.props.dispatch(title());
        await this.props.dispatch(search(param));
        this.props.navigation.navigate('search');
    }
    type = async (val) => {
        let param = {
            type:val,
            sex:''
        };
        await this.props.dispatch(search(param));
        this.props.navigation.navigate('search');
    }
    render(){
        return(
           <ScrollView showsVerticalScrollIndicator = {false} style={styles.container}>
                 <View style={{flex:1,alignSelf:'center'}}>
                     <Text style={{marginTop:20,fontFamily:'Montserrat-Bold',fontSize:15}}>Categories</Text>
                 </View>
                 <View>
                 <TextInput 
                      placeholder="Search for category"
                      style = {{backgroundColor:'#e2e2e2',marginTop:10,borderRadius:60,paddingStart:20,padding:5}}
                     />
                 </View>
                 <View>
                    <Text style={{fontSize:12,fontFamily:'Montserrat-Regular',marginTop:34,color:'#4f4f4f'}}>GENDER</Text>
                     <View style={{flexDirection:'row'}}>
                         
                         <TouchableOpacity style={{width:'33.33%'}} onPress={() =>this.search('Male')}>
                            <Card
                                containerStyle={{marginStart:0,width:'98%',borderRadius:7,backgroundColor:'#FFDCDC',borderColor:'#FFDCDC',padding:20,paddingLeft:0,paddingRight:0}}
                                style={{width:'33.33%',color:'#FFDCDC',borderRadius:30}}>
                                <Text style={{alignSelf:'center',fontFamily:'Montserrat-SemiBold',color:'#4f4f4f'}}>Male</Text>
                            
                            </Card>
                           
                         </TouchableOpacity>
                         <TouchableOpacity style={{width:'33.33%'}} onPress={() =>this.search('Female')}>
                            <Card
                                containerStyle={{marginStart:0,width:'98%',borderRadius:7,backgroundColor:'#FDbDF6',borderColor:'#FDbDF6',padding:20,paddingLeft:0,paddingRight:0}}
                                style={{width:'50%',color:'#FFDCDC',borderRadius:30}}>
                                <Text  style={{alignSelf:'center',fontFamily:'Montserrat-SemiBold',color:'#4f4f4f'}}>Female</Text>
                            
                            </Card>
                           
                         </TouchableOpacity>
                         <TouchableOpacity style={{width:'33.33%'}} onPress={() =>this.search('Children')}>
                            <Card
                                containerStyle={{marginStart:0,width:'98%',borderRadius:7,backgroundColor:'#F0FFDC',borderColor:'#F0FFDC',padding:20,paddingLeft:0,paddingRight:0}}
                                style={{width:'50%',color:'#FFDCDC',borderRadius:30}}>
                                <Text  style={{alignSelf:'center',fontFamily:'Montserrat-SemiBold',color:'#4f4f4f'}}>Children</Text>
                            
                            </Card>
                           
                         </TouchableOpacity>
                     
                     </View>
                    
                     
                 </View>
                 <View>
                 <Text style={{fontSize:12,fontFamily:'Montserrat-Regular',marginTop:34,color:'#4f4f4f'}}>TYPE</Text>
                 <View style={{flexDirection:'row'}}>
                         <TouchableOpacity style={{width:'50%'}} onPress={() => this.type('Top')}>
                            <Card
                                containerStyle={{marginStart:0,width:'98%',borderRadius:7,backgroundColor:'#C8fcb0',borderColor:'#C8fcb0',padding:40,paddingLeft:10,paddingRight:10}}
                                style={{width:'50%',color:'#c8fcb0',borderRadius:30}}>
                                <Text style={{alignSelf:'center',fontFamily:'Montserrat-SemiBold',color:'#4f4f4f'}}>Top</Text>
                            
                            </Card>
                           
                         </TouchableOpacity>
                         <TouchableOpacity style={{width:'50%'}} onPress={() => this.type('Suits')}>
                            <Card
                                containerStyle={{marginStart:0,width:'98%',borderRadius:7,backgroundColor:'#fcf5b4',borderColor:'#fcf5b4',padding:40,paddingLeft:10,paddingRight:10}}
                                style={{width:'50%',color:'#FCf584',borderRadius:30}}>
                                <Text style={{alignSelf:'center',fontFamily:'Montserrat-SemiBold',color:'#4f4f4f'}}>Suits</Text>
                            
                            </Card>
                           
                         </TouchableOpacity>
                     
                     </View>
                 <View style={{flexDirection:'row'}}>
                         <TouchableOpacity style={{width:'50%'}} onPress={() => this.type('Trousers')}>
                            <Card
                                containerStyle={{marginStart:0,width:'98%',borderRadius:7,backgroundColor:'#99f1fd',borderColor:'#99f1fd',padding:40,paddingLeft:10,paddingRight:10}}
                                style={{width:'50%',color:'#c8fcb0',borderRadius:30}}>
                                <Text style={{alignSelf:'center',fontFamily:'Montserrat-SemiBold',color:'#4f4f4f'}}>Trousers</Text>
                            
                            </Card>
                           
                         </TouchableOpacity>
                         <TouchableOpacity style={{width:'50%'}} onPress={() => this.type('Skirts')}>
                            <Card
                                containerStyle={{marginStart:0,width:'98%',borderRadius:7,backgroundColor:'#ffd0a5',borderColor:'#ffd0a5',padding:40,paddingLeft:10,paddingRight:10}}
                                style={{width:'50%',color:'#FCf584',borderRadius:30}}>
                                <Text style={{alignSelf:'center',fontFamily:'Montserrat-SemiBold',color:'#4f4f4f'}}>Skirts</Text>
                            
                            </Card>
                           
                         </TouchableOpacity>
                     
                     </View>
                     <View style={{flexDirection:'row'}}>
                         <TouchableOpacity style={{width:'50%'}} onPress={() => this.type('Shorts')}>
                            <Card
                                containerStyle={{marginStart:0,width:'98%',borderRadius:7,backgroundColor:'#fd9999',borderColor:'#fd9999',padding:40,paddingLeft:10,paddingRight:10}}
                                style={{width:'50%',color:'#c8fcb0',borderRadius:30}}>
                                <Text style={{alignSelf:'center',fontFamily:'Montserrat-SemiBold',color:'#4f4f4f'}}>Shorts</Text>
                            
                            </Card>
                           
                         </TouchableOpacity>
                         <TouchableOpacity style={{width:'50%'}} onPress={() => this.type('Dresses')}>
                            <Card
                                containerStyle={{marginStart:0,width:'98%',borderRadius:7,backgroundColor:'#a5b3ff',borderColor:'#a5b3ff',padding:40,paddingLeft:10,paddingRight:10}}
                                style={{width:'50%',color:'#FCf584',borderRadius:30}}>
                                <Text style={{alignSelf:'center',fontFamily:'Montserrat-SemiBold',color:'#4f4f4f'}}>Dresses</Text>
                            
                            </Card>
                           
                         </TouchableOpacity>
                     
                     </View>   
                 </View>
           </ScrollView>
        );
    }

}
const styles = StyleSheet.create({
   container:{
       padding:10,
       flex:1,
       backgroundColor:'#fff'
   }
});
const mapStateToProps = state => {
    return {
        data: state.Reducer
    };
};
export default connect(mapStateToProps)(CategoryScreen);
//export default ;