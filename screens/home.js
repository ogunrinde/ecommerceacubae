import React, { Component } from 'react';
import {View, Text,Dimensions,ActivityIndicator,ImageBackground, StyleSheet,ScrollView,Image,TouchableOpacity, TouchableHighlight} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Carousel from 'react-native-carousel';
import ReactInterval from 'react-interval';
import {Card} from 'react-native-elements';
import {connect} from 'react-redux';
import DealScreen from './deals';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import {details,search} from '../action/fetch';
import currencyFormatter from 'currency-formatter';
import Modal from 'react-native-modal';
import {whichpage,products} from '../action/fetch';


const heigth = Dimensions.get('window').height / 3;
class HomeScreen extends React.Component {
    static navigationOptions = {
        header:null
    };
    constructor(props){
      super(props);
      this.state = {
          view : 1,
          opacityo:1,
          opacityt:0.3,
          opacityth:0.3,
          deals:[],
          height:parseInt(heigth),
          featured:[],
          siteurl:'http://www.acubae.com',
          login:false,
          notify:false
      }
    }
    getproducts = async () => {
        this.setState({isFetching:true});
        await fetch(`${this.props.data.siteurl}/api/auth/app_data`, {
            method:'GET',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json'
            }
        }).then(async data => data.json()).then(data => {
              this.setState({isFetching:false});
              //console.error(data);
              //this.props.navigation.navigate('home');
              let stock = {
                          products:data.products,
                          deals:data.deals,
                          featured:data.featured,
                          suggested:data.suggested,
                          arrival:data.arrival,
                          size:data.size
                        };
                        
              this.props.dispatch(products(stock));
              this.setdata();
              //console.error(this.props.data.arrival.image);
          }).catch(err => {
              this.setState({isFetching:false});
              console.error(err);
            alert(err.toString());
          });
      }
    setdata(){
        let deals = []
        let featured = [];
        for(let r  = 0; r < this.props.data.deals.length;r++){
            deals.push(this.props.data.deals[r]);
            if(r == 1) break;

        }
        for(let r  = 0; r < this.props.data.featured.length;r++){
            featured.push(this.props.data.featured[r]);
            if(r == 1) break;
        }
        this.setState({deals:deals,featured:featured});
    }  
    componentDidMount(){
        let deals = []
        let featured = [];
        //alert('aaa');
        //console.error(this.props.data.deals);
        //alert(this.props.data.products.length);
        this.getproducts();
        
    }
    changeview = () =>{
        if(this.state.view == 3) this.setState({view:1});
        else {
            let s = this.state.view + 1;
            this.setState({view:s});
        }
        if(this.state.view == 1){
            this.setState({opacityo:1});
            this.setState({opacityt:0.3});
            this.setState({opacityth:0.3});
        }else if(this.state.view == 2){
            this.setState({opacityo:0.3});
            this.setState({opacityt:1});
            this.setState({opacityth:0.3});   
        }else if(this.state.view == 3){
            this.setState({opacityo:0.3});
            this.setState({opacityt:0.3});
            this.setState({opacityth:1});   
        }
    }
    productdetails = (d) =>{
         this.props.dispatch(details(d));
        //console.error(this.props.data.productdetails)
        this.props.navigation.navigate('details');
    }
    addfavorite = (product) =>{
        let param = {data:product};
        fetch(`${this.props.data.siteurl}/api/auth/addfavorite`, {
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json',
                'Authorization': `Bearer ${this.props.data.access_token}`
            },
            body : JSON.stringify(param)
        }).then(data => data.json()).then(data => {
            //console.error(data);
            if(data.status){
                let stock = {
                   
                    favorites:data.favorites,
                    deals:this.props.data.deals,
                    featured:this.props.data.featured,
                    suggested:this.props.data.suggested,
                    arrival:this.props.data.arrival
                  };
                  
                  this.props.dispatch(products(stock)); 
            }
               
            }).catch(err => {
                console.error(err);
            alert(err.toString());
            });
    }
    age = async (val) => {
        let param = {
            age:val,
            sex:''
        };
        await this.props.dispatch(search(param));
        this.props.navigation.navigate('search');
    }
    loginUser = async () => {
        let data = {page:'featured'};
        this.setState({login:false});
        await this.props.dispatch(whichpage(data)); 
        this.props.navigation.navigate('login');
    }
    love = (product) => {
        if(Object.keys(this.props.data.userData).length == 0){
            this.setState({login:true});
            return false;
        }else {
            let allfeatured = this.state.featured;
            if(product.loved == undefined || product.loved == false){
                let index = allfeatured.findIndex(x=>x.id == product.id);
                allfeatured[index].loved = true;
                this.addfavorite(product);
                this.setState({featured:allfeatured,searchfeatured : allfeatured});
            }  
            else {
                let index = allfeatured.findIndex(x=>x.id == product.id);
                allfeatured[index].loved = false;
                this.setState({featured:allfeatured,searchfeatured : allfeatured});
            }

        }
    }
    render(){
        return(
            
            <ScrollView showsVerticalScrollIndicator = {false} style={styles.container}>
            {
                this.props.data.products.length > 0 &&
                <View>
                   <View style={{flexDirection:'row',marginTop:10,marginBottom:10}}>
                       <View style={{width:'95%'}}>
                       <Image
                                source={require('../assets/images/acubae.png')}
                                style={{width:100,height:40,marginTop:-10,marginStart:-3}}
                                />
                       </View>
                       <View style={{flexDirection:'row'}}>
                       </View>
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
                <Modal isVisible={this.state.notify}>
                    <View style={{backgroundColor:'#fff',width:'98%',height:300,marginRight:0,alignSelf:'center' }}>
                        <Image
                                source={require('../assets/images/info.png')}
                                style={{width:80,height:80, alignSelf:'center',marginTop:40,marginBottom:15}}
                                />
                        <Text style={{color:'#000',fontSize:15,fontFamily:'Montserrat-Bold',textAlign:'center'}}>Alert</Text> 
                        <Text style={{color:'#000',fontSize:15,fontFamily:'Montserrat-Regular',textAlign:'center',marginTop:20}}>Please Check your Internet Connection</Text>        
                        <View style={{flexDirection:'row',padding:10,alignSelf:'center',marginTop:15}}>
                            
                            <TouchableOpacity onPress = {()=>this.getproducts()}>
                                <Text style={{color:'#BA1717',fontSize:13,borderWidth:1,borderRadius:5,borderColor:'#BA1717',padding:12,marginRight:5,backgroundColor:'#fff',fontFamily:'Montserrat-Bold'}}>NO THANKS</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
        
                   {
                       Object.keys(this.props.data.arrival).length > 0 &&
                       <View style={{backgroundColor:'#c1c1c1'}}>
                           
                       <ImageBackground source={{uri: `${this.props.data.siteurl+'/public/images/'+this.props.data.arrival.image}`}} style={{width: '100%',height:this.state.height+90}}>    
                        <View style={{flexShrink:1,marginTop:this.state.height-100}}>
                            <TouchableOpacity style={{padding:7,marginStart:10}}>
                            <Text style={{fontSize:30,padding:7,paddingBottom:0,color:'#fff',fontFamily:'Montserrat-Bold'}}>NEW</Text>
                            <Text style={{fontSize:30,padding:7,paddingTop:-10,color:'#fff',fontFamily:'Montserrat-Bold'}}>ARRIVALS</Text>
                              <Text onPress={() =>this.props.navigation.navigate('arrival')} style={{fontSize:17,borderRadius:20,width:'50%',padding:10,color:'#000',textAlign:'center',fontFamily:'Montserrat-Bold',backgroundColor:'#fff'}}>Shop Now</Text>
                            </TouchableOpacity>
                        </View>
                        </ImageBackground>
                       </View>
                   }
                   
                  
                   <View>
                       <View style={{flexDirection:'row', marginTop:15}}>
                           <Text style={{fontFamily:'Montserrat-Bold',width:'80%', fontSize:14}}>Deals</Text>
                           <Text onPress = {()=>this.props.navigation.navigate('deals')} style={{textAlign:'right',fontFamily:'Montserrat-Regular',width:'20%', fontSize:12, color:'#35A4F4'}}>View all</Text>
                       </View>
                       <View style={{flexDirection:'row', marginTop:15,flexWrap:'wrap'}}>
                           {
                               this.state.deals.map((deal)=>
                               <View style={{width:'50%'}} key = {deal.id} value={deal.id}>
                                   
                                    <View style={{width:30,height:30,borderRadius:15,position:'relative',alignSelf:'flex-end',marginRight:'10%',backgroundColor:'#d71515',fontSize:8}}>
                                    <Text style={{backgroundColor:'#d71515',fontSize:12,color:'#fff',alignSelf:'center',marginTop:6}}>{deal.discount}%</Text>
                                    </View>   
                                    <TouchableOpacity onPress = {() =>this.productdetails(deal)}>
                                    <Image
                                    source={{uri: `${this.state.siteurl+'/public/images/'+deal.picture.split('|')[0]}`}}
                                    style={{width:'70%',aspectRatio:1, alignSelf:'center'}}                        
                                    />
                                    <Text style={{fontFamily:'Montserrat-Regular',color:'#666666', fontSize:13,alignSelf:'center',textTransform:'capitalize'}}>{deal.name}</Text>
                                    <Text style={{fontFamily:'Montserrat-Bold',color:'#d71515', fontSize:13,alignSelf:'center'}}>{currencyFormatter.format(deal.newprice, { code: 'NGN' })}</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                           }
                           
                           
                    
                       </View>
                
                        <View style={{flexDirection:'row', marginTop:35}}>
                           <Text style={{fontFamily:'Montserrat-Bold',width:'80%', fontSize:14}}>Featured Products</Text>
                           <Text onPress = {()=>this.props.navigation.navigate('featured')} style={{textAlign:'right',fontFamily:'Montserrat-Regular',width:'20%', fontSize:12, color:'#35A4F4'}}>View all</Text>
                       </View>
                       <View style={{flexDirection:'row', marginTop:15, marginBottom:30}}>
                        {
                           this.state.featured.map((featured)=>
                           <View style={{width:'50%'}} key = {featured.id} value={featured.id}>
                            {
                                (featured.loved == undefined || featured.loved == false)  &&
                               <IonIcon onPress = {() => this.love(featured)} name="ios-heart-empty" size={20} color="#000" style={{position:'relative',textAlign:'right',marginRight:8}}></IonIcon>      
                            }
                            {
                                featured.loved == true &&
                               <IonIcon onPress = {() => this.love(featured)} name="ios-heart" size={20} color="#BA1717" style={{position:'relative',textAlign:'right',marginRight:8}}></IonIcon>      
                            }   
                            <TouchableOpacity onPress = {() =>this.productdetails(featured)}>
                            <Image
                              source={{uri: `${this.state.siteurl+'/public/images/'+featured.picture.split('|')[0]}`}}
                              style={{width:'70%',aspectRatio:1, alignSelf:'center'}}                        
                              />    
                            <Text style={{fontFamily:'Montserrat-Regular',color:'#666666', fontSize:13,alignSelf:'center',textTransform:'capitalize'}}>{featured.name}</Text>
                            <Text style={{fontFamily:'Montserrat-Bold',color:'#000', fontSize:13,alignSelf:'center'}}>{currencyFormatter.format(featured.price, { code: 'NGN' })}</Text>
                            </TouchableOpacity>
                           </View>
                        )}   
                            
                       </View>
                      </View>

                </View>
            } 
            {
                        this.state.isFetching == true &&
                        <View style={{marginTop:'50%'}}>
                        <ActivityIndicator size = 'large' color='#BA1717'/>
                        </View>
            }  
            </ScrollView>
          
        );
    }

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:15,
        backgroundColor:'#fff'
    }
});
const mapStateToProps = state => {
    return {
        data: state.Reducer
    };
};
export default connect(mapStateToProps)(HomeScreen);