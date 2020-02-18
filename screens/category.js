import React, { Component } from 'react';
import {View, Text, ScrollView, StyleSheet, TextInput,Image, TouchableOpacity} from 'react-native';
import { CheckBox,Card } from 'react-native-elements'
import {search} from '../action/fetch';
import IonIcon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';

import {connect } from 'react-redux';

class CategoryScreen extends React.Component {
    constructor(props){
       super(props);
       this.state = {
           men:[],
           women:[],
           children:[],
           siteurl:'http://www.acubae.com',
       }
    }
    static navigationOptions = {
        header:null
    };
    componentDidMount(){
        this.setdata();
    }
    setdata(){
        let men = []
        let women = [];
        let children = [];
        for(let r  = 0; r < this.props.data.products.length;r++){
            if(this.props.data.products[r].gender.toLowerCase() == 'men'){
                if(men.length < 2) men.push(this.props.data.products[r]);
                if(r == 1) break;
            }
        }
        for(let r  = 0; r < this.props.data.products.length;r++){
            if(this.props.data.products[r].gender.toLowerCase() == 'women'){
                if(women.length < 2) women.push(this.props.data.products[r]);
                if(r == 1) break;
            }
        }
        for(let r  = 0; r < this.props.data.products.length;r++){
            if(this.props.data.products[r].gender.toLowerCase() == 'children'){
                if(children.length < 2)children.push(this.props.data.products[r]);
                if(r == 1) break;
            }
        }
        this.setState({men:men,women:women,children:children});
    } 
    search = async (val) =>{
        let param = {
            sex:val,
            type:'',
            category:''
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
                 <View style={{flex:1}}>
                     <Text style={{marginTop:20,fontFamily:'Montserrat-Bold',fontSize:15}}>Categories</Text>
                 </View>
                 <View style={{flexDirection:'row'}}>
                 <View style ={{width:'80%'}}>
                  <TextInput 
                      placeholder="Search for category"
                      style = {{backgroundColor:'#e2e2e2',marginTop:10,paddingStart:20,padding:5}}
                     />
                  </View>    
                  <View style ={{width:'20%',backgroundColor:'#ba1717',marginTop:10,marginLeft:7,borderRadius:2}}>
                    <IonIcon onPress = {() => this.props.navigation.navigate('filter')} name="ios-funnel" size={25} color="#fff" style={{position:'relative',textAlign:'center',marginRight:8,marginTop:5}}></IonIcon>      
                  </View> 
                 </View>

                 <View>
                    <View style={{margiTop:50}}>
                        <View style = {{flexDirection:'row', marginTop:20}}>
                            <Text style={{color:'#A2A2A2',fontFamily:'Montserrat-Bold',fontSize:15,width:'85%'}}>MEN</Text>
                            <Text onPress = {() => this.search('Men')} style={{color:'#BA1717',fontFamily:'Montserrat-Bold', fontSize:13}}>See all</Text>
                        </View> 
                        <View style={{flexDirection:'row', marginTop:15,flexWrap:'wrap'}}>
                        {
                               this.state.men.map((men)=>    
                        <View style={{width:'50%'}}>  
                            <TouchableOpacity onPress = {() =>this.productdetails(men)}>
                            <Image
                            source={{uri: `${this.state.siteurl+'/public/images/'+men.picture.split('|')[0]}`}}
                            style={{width:'70%',aspectRatio:1, alignSelf:'center'}}                        
                            />
                            <Text style={{marginTop:10,fontFamily:'Montserrat-Regular',color:'#666666', fontSize:13,alignSelf:'center',textTransform:'capitalize'}}>{men.name}</Text>
                            <Text style={{fontFamily:'Montserrat-Bold',color:'#d71515', fontSize:13,alignSelf:'center'}}>{currencyFormatter.format(men.newprice, { code: 'NGN' })}</Text>
                            </TouchableOpacity>
                        </View>
                        )}
                        </View>
                    </View> 
                    <View style={{marginTop:50}}>
                        <View style = {{flexDirection:'row', marginTop:20}}>
                            <Text style={{color:'#A2A2A2',fontFamily:'Montserrat-Bold',fontSize:15,width:'85%'}}>WOMEN</Text>
                            <Text onPress = {() => this.search('Women')} style={{color:'#BA1717',fontFamily:'Montserrat-Bold', fontSize:13}}>See all</Text>
                        </View> 
                        <View style={{flexDirection:'row', marginTop:15,flexWrap:'wrap'}}>
                        {
                               this.state.women.map((women)=>    
                        <View style={{width:'50%'}}>
                            
                            <View style={{width:30,height:30,borderRadius:15,position:'relative',alignSelf:'flex-end',marginRight:'10%',backgroundColor:'#d71515',fontSize:8}}>
                            <Text style={{backgroundColor:'#d71515',fontSize:12,color:'#fff',alignSelf:'center',marginTop:6}}>{women.discount}%</Text>
                            </View>   
                            <TouchableOpacity onPress = {() =>this.productdetails(women)}>
                            <Image
                            source={{uri: `${this.state.siteurl+'/public/images/'+women.picture.split('|')[0]}`}}
                            style={{width:'70%',aspectRatio:1, alignSelf:'center'}}                        
                            />
                            <Text style={{marginTop:10,fontFamily:'Montserrat-Regular',color:'#666666', fontSize:13,alignSelf:'center',textTransform:'capitalize'}}>{women.name}</Text>
                            <Text style={{fontFamily:'Montserrat-Bold',color:'#d71515', fontSize:13,alignSelf:'center'}}>{currencyFormatter.format(women.newprice, { code: 'NGN' })}</Text>
                            </TouchableOpacity>
                        </View>
                        )}
                        </View>
                    </View>
                    <View style={{marginTop:50}}>
                        <View style = {{flexDirection:'row', marginTop:20}}>
                            <Text style={{color:'#A2A2A2',fontFamily:'Montserrat-Bold',fontSize:15,width:'85%'}}>CHILDREN</Text>
                            <Text onPress = {() => this.search('Children')} style={{color:'#BA1717',fontFamily:'Montserrat-Bold', fontSize:13}}>See all</Text>
                        </View> 
                        <View style={{flexDirection:'row', marginTop:15,flexWrap:'wrap'}}>
                        {
                               this.state.children.map((children)=>    
                        <View style={{width:'50%'}}>
                            
                            <View style={{width:30,height:30,borderRadius:15,position:'relative',alignSelf:'flex-end',marginRight:'10%',backgroundColor:'#d71515',fontSize:8}}>
                            <Text style={{backgroundColor:'#d71515',fontSize:12,color:'#fff',alignSelf:'center',marginTop:6}}>{children.discount}%</Text>
                            </View>   
                            <TouchableOpacity onPress = {() =>this.productdetails(children)}>
                            <Image
                            source={{uri: `${this.state.siteurl+'/public/images/'+children.picture.split('|')[0]}`}}
                            style={{width:'70%',aspectRatio:1, alignSelf:'center'}}                        
                            />
                            <Text style={{marginTop:10,fontFamily:'Montserrat-Regular',color:'#666666', fontSize:13,alignSelf:'center',textTransform:'capitalize'}}>{children.name}</Text>
                            <Text style={{fontFamily:'Montserrat-Bold',color:'#d71515', fontSize:13,alignSelf:'center'}}>{currencyFormatter.format(children.price, { code: 'NGN' })}</Text>
                            </TouchableOpacity>
                        </View>
                        )}
                        </View>
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