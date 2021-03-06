import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, ScrollView,TouchableOpacity, TextInput} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import {whichpage} from '../action/fetch';
import {connect} from 'react-redux';
import currencyFormatter from 'currency-formatter';
import {details} from '../action/fetch';

class FavoriteScreen extends React.Component {
    static navigationOPtions = {
        header :null
    };
    constructor(props){
        super(props);
        this.state = {
            login:false,
            searchfavorites:[],
            favorites:[],
            siteurl:'http://www.acubae.com'
        }
    };
    getText = (val) => {
        let searchfavorite = [];
        for(let f  = 0; f < this.props.data.favorites.length; f++){
            let index = this.props.data.favorites[f].name.toLowerCase().search(val.toLowerCase());
            
            if(index > -1){
                searchfavorite.push(this.props.data.favorites[f]);
                //alert(index);
            }
        }
        if(val == ''){
            this.setState({favorites:this.props.data.favorites,searchfavorites:this.props.data.favorites});
        }else{
            this.setState({favorites:searchfavorite,searchfavorites:searchfavorite});
        }
        
    }
    componentDidMount(){
        if(Object.keys(this.props.data.userData).length == 0){
            this.setState({login:true});
            return false;
        }
        //console.error(this.props.data.favorites);
        this.setState({favorites:this.props.data.favorites,searchfavorites:this.props.data.favorites});
    }
    loginUser = async () => {
        let data = {page:'favorite'};
        this.setState({login:false});
        await this.props.dispatch(whichpage(data)); 
        this.props.navigation.navigate('login');
    }
    productdetails = (d) =>{
        this.props.dispatch(details(d));
       this.props.navigation.navigate('details');
   }

    render(){
        return (
           <ScrollView showsVerticalScrollIndicator = {false} style={styles.container}>
                 <View style={{flex:1,alignSelf:'center'}}>
                     <Text style={{marginTop:20,fontFamily:'Montserrat-Bold',fontSize:15}}>Favorites</Text>
                 </View>
                 <Modal isVisible={this.state.login}>
                    <View style={{backgroundColor:'#fff',width:'98%',height:300,marginRight:0,alignSelf:'center' }}>
                        <Image
                                source={require('../assets/images/info.png')}
                                style={{width:80,height:80, alignSelf:'center',marginTop:40,marginBottom:15}}
                                />
                        <Text style={{color:'#000',fontSize:15,fontFamily:'Montserrat-Bold',textAlign:'center'}}>Alert</Text> 
                        <Text style={{color:'#000',fontSize:15,fontFamily:'Montserrat-Regular',textAlign:'center',marginTop:20}}>Kindly login to  Add Favorites</Text>        
                        <View style={{flexDirection:'row',padding:10,alignSelf:'center',marginTop:15}}>
                            <TouchableOpacity onPress = {this.loginUser}>
                                <Text style={{color:'#fff',fontSize:13,borderWidth:1,borderRadius:5,borderColor:'#BA1717',backgroundColor:'#BA1717',padding:12,marginRight:5,backgroundColor:'#BA1717',fontFamily:'Montserrat-Bold'}}>SIGN IN</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {()=>this.setState({login:false})}>
                                <Text style={{color:'#BA1717',fontSize:13,borderWidth:1,borderRadius:5,borderColor:'#BA1717',padding:12,marginRight:5,backgroundColor:'#fff',fontFamily:'Montserrat-Bold'}}>NO THANKS</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                 <View style={{flexDirection:'row',padding:10,paddingLeft:0}}>
                 <TextInput 
                      onChangeText = {(text)=> this.getText(text)}
                      placeholder="Search for category"
                      style = {{backgroundColor:'#e2e2e2',borderRadius:60,paddingStart:10,width:'100%',marginStart:5,marginEnd:5,padding:7}}
                     />
                 </View>
                 <View style={{marginTop:10,marginBottom:20}}>
                     <View style={{flexDirection:'row'}}>
                         {
                             this.props.data.favorites.map((favorite) =>
                                <View key = {favorite.id} value ={favorite.id} style={{backgroundColor:"#fff",width:'50%',padding:5,marginRight:3}}>
                                <IonIcon name="ios-heart" size={20} color="#BA1717" style={{position:'relative',textAlign:'right',marginRight:8}}></IonIcon>      
                                <TouchableOpacity onPress = {() =>this.productdetails(favorite)}>
                                <Image
                                source={{uri: `${this.state.siteurl+'/public/images/'+favorite.picture.split('|')[0]}`}}
                                style={{width:'70%',aspectRatio:1, alignSelf:'center'}}                        
                                />
                                    <Text style={{alignSelf:'center',color:'#666666',fontSize:13,fontFamily:'Montserrat-Regular',textTransform:'capitalize'}}>{favorite.name}</Text>
                                    <Text style={{alignSelf:'center',color:'#1d1e1e',fontSize:13, fontFamily:'Montserrat-Bold'}}>{currencyFormatter.format(favorite.price, { code: 'NGN' })}</Text>
                                </TouchableOpacity>
                                </View>
                               
                             )
                         }
                         
                         
                     </View>
                     {
                   this.props.data.favorites.length == 0 && 
                   <View style={{backgroundColor:'#fff',padding:10,marginTop:5}}>
                        <Text style={{color:'#666666',fontSize:14,fontFamily:'Montserrat-Regular'}}>No Item in Favorite item yet..</Text>
                   </View>
               } 
                     
                 </View>
           </ScrollView>
        );
    }
   
}

const styles = StyleSheet.create({
    container:{
        padding:15,
        flex:1,
        backgroundColor:'#f3f6f8'
    }
})
const mapStateToProps = state => {
    return {
        data: state.Reducer
    };
};
export default connect(mapStateToProps)(FavoriteScreen);