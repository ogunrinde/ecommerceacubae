import React, { Component } from 'react';
import {View, Text,ScrollView,StyleSheet,Image,TouchableOpacity,TextInput} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect  } from 'react-redux';
import currencyFormatter from 'currency-formatter';
import Modal from 'react-native-modal';
import {itemcart} from '../action/fetch';
import {whichpage,receivegifts,total_price} from '../action/fetch';

class CartScreen extends React.Component {
    constructor(props){
      super(props);
      this.state = {
          gift:false,
          modalVisible:false,
          siteurl:'http://www.acubae.com',
          total_price:0,
          emptycart:false,
          login:false,
          userlogin:false,
          usegifts:false,
          wrapping:'0',
          certificate:'0',
          gifts:false,
          msg:''
      }
    }
    static navigationOptions = {
        header:null
    };
    togglegift = () => {
        this.setState({gift:!this.state.gift});
    }
    componentDidMount(){
        this.totalprice();
        if(Object.keys(this.props.data.userData).length == 0){
            this.setState({usegifts:true});
            return false;
        }
    }
    totalprice = () =>{
        let price = 0;
        for(let r = 0; r< this.props.data.carts.length; r++){
            if(this.props.data.carts[r].deal == '1') price = price + parseFloat(this.props.data.carts[r].newprice);
            else price = price + parseFloat(this.props.data.carts[r].price);
        }
        let d = {price:price};
        this.props.dispatch(total_price(d));
        this.setState({total_price:price});
    }
    delete = () =>{
        let carts = this.props.data.carts;
        let index = carts.findIndex(x => x.id === this.state.toremove.id);
        //console.error(index);
        carts.splice(index,1);
        this.props.dispatch(itemcart(carts));
        this.totalprice();
        this.setState({modalVisible:!this.state.modalVisible});
    }
    remove = cart => {
       this.setState({toremove:cart});
       this.setState({modalVisible:!this.state.modalVisible});
    }
    closemodal(){
        this.setState({modalVisible:!this.state.modalVisible});
    }
    plus = cart => {
        let carts = this.props.data.carts;
        let index = carts.findIndex(x => x.id === cart.id);
        carts[index].quantity = parseInt(carts[index].quantity) + 1;
        if(carts[index].deal == '1') carts[index].newprice = parseFloat(carts[index].newprice) + parseFloat(carts[index].cost);
        else carts[index].price = parseFloat(carts[index].price) + parseFloat(carts[index].cost);
        this.totalprice();
        this.props.dispatch(itemcart(carts));
    }
    minus = cart => {
        let carts = this.props.data.carts;
        let index = carts.findIndex(x => x.id === cart.id);
        if(parseInt(carts[index].quantity) > 1){
            carts[index].quantity = parseInt(carts[index].quantity) - 1;
            if(carts[index].deal == '1') carts[index].newprice = parseFloat(carts[index].newprice) - parseFloat(carts[index].cost);
            else carts[index].price = parseFloat(carts[index].price) - parseFloat(carts[index].cost);
            this.totalprice();
            this.props.dispatch(itemcart(carts));
        }
        
    }
    toship = () =>{
        let cert = this.props.data.customer.length > 0 ? this.props.data.customer[0].customer_certificate_left : 0;
        let wrap = this.props.data.customer.length > 0 ? this.props.data.customer[0].customer_wrapping_left : 0;
        if(this.props.data.carts.length == 0){
            this.setState({emptycart:!this.state.emptycart});
            return false;
        }
        if(Object.keys(this.props.data.userData).length == 0) {
            
            this.setState({login:!this.state.login});   
        }
        
        else {
           let data = {wrappings: 0,certificate:0}; 
           this.props.dispatch(receivegifts(data));
           
           this.props.navigation.navigate('shipping'); 
        }   
    }
    login = async () =>{
        await this.setState({login:!this.state.login});
        let data = {page:'shipping'};
        this.props.dispatch(whichpage(data)); 
        this.props.navigation.navigate('login');
    }
    loginUser = async () => {
        let data = {page:'cart'};
        await this.setState({usegifts:false});
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
               <View>
                   <Text style={{marginTop:10,marginBottom:20, fontFamily:'Montserrat-Bold',fontSize:15,alignSelf:'center'}}>Cart</Text>
               </View>
               <Modal isVisible={this.state.gifts}>
                    <View style={{backgroundColor:'#fff',width:'98%',height:300,marginRight:0,alignSelf:'center' }}>
                        <Image
                                source={require('../assets/images/info.png')}
                                style={{width:80,height:80, alignSelf:'center',marginTop:40,marginBottom:15}}
                                />
                        <Text style={{color:'#000',fontSize:15,fontFamily:'Montserrat-Bold',textAlign:'center'}}>Alert</Text> 
                        <Text style={{color:'#000',fontSize:15,fontFamily:'Montserrat-Regular',textAlign:'center',marginTop:20}}>{this.state.msg}</Text>        
                        <View style={{flexDirection:'row',padding:10,alignSelf:'center',marginTop:15}}>
                            
                            <TouchableOpacity onPress = {()=>this.setState({gifts:false})}>
                                <Text style={{color:'#BA1717',fontSize:13,borderWidth:1,borderRadius:5,borderColor:'#BA1717',padding:12,marginRight:5,backgroundColor:'#fff',fontFamily:'Montserrat-Bold'}}>OKAY</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

               <Modal isVisible={this.state.emptycart}>
                    <View style={{backgroundColor:'#fff',width:'98%',height:300,marginRight:0,alignSelf:'center' }}>
                        <Image
                                source={require('../assets/images/info.png')}
                                style={{width:80,height:80, alignSelf:'center',marginTop:40,marginBottom:15}}
                                />
                        <Text style={{color:'#000',fontSize:15,fontFamily:'Montserrat-Bold',textAlign:'center'}}>Alert</Text> 
                        <Text style={{color:'#000',fontSize:15,fontFamily:'Montserrat-Regular',textAlign:'center',marginTop:20}}>No Item In Cart</Text>        
                        <View style={{flexDirection:'row',padding:10,alignSelf:'center',marginTop:15}}>
                            <TouchableOpacity onPress = {() => this.setState({emptycart:!this.state.emptycart})}>
                                <Text style={{color:'#BA1717',fontSize:13,borderWidth:2,borderRadius:5,borderColor:'#BA1717',padding:12,marginRight:5,fontFamily:'Montserrat-Bold'}}>OKAY</Text>
                            </TouchableOpacity>
                            
                        </View>
                    </View>
                </Modal>
                
                <Modal isVisible={this.state.login}>
                    <View style={{backgroundColor:'#fff',width:'98%',height:300,marginRight:0,alignSelf:'center' }}>
                        <Image
                                source={require('../assets/images/info.png')}
                                style={{width:80,height:80, alignSelf:'center',marginTop:40,marginBottom:15}}
                                />
                        <Text style={{color:'#000',fontSize:15,fontFamily:'Montserrat-Bold',textAlign:'center'}}>Alert</Text> 
                        <Text style={{color:'#000',fontSize:15,fontFamily:'Montserrat-Regular',textAlign:'center',marginTop:20}}>Login to Continue</Text>        
                        <View style={{flexDirection:'row',padding:10,alignSelf:'center',marginTop:15}}>
                            <TouchableOpacity onPress = {this.login}>
                                <Text style={{color:'#BA1717',fontSize:13,borderWidth:2,borderRadius:5,borderColor:'#BA1717',padding:12,marginRight:5,fontFamily:'Montserrat-Bold'}}>OKAY</Text>
                            </TouchableOpacity>
                            
                        </View>
                    </View>
                </Modal>
               <Modal isVisible={this.state.modalVisible}>
                    <View style={{backgroundColor:'#fff',width:'98%',height:300,marginRight:0,alignSelf:'center' }}>
                        <Image
                                source={require('../assets/images/info.png')}
                                style={{width:80,height:80, alignSelf:'center',marginTop:40,marginBottom:15}}
                                />
                        <Text style={{color:'#000',fontSize:15,fontFamily:'Montserrat-Bold',textAlign:'center'}}>Alert</Text> 
                        <Text style={{color:'#000',fontSize:15,fontFamily:'Montserrat-Regular',textAlign:'center',marginTop:20}}>Do you want to remove this item from Cart?</Text>        
                        <View style={{flexDirection:'row',padding:10,alignSelf:'center',marginTop:15}}>
                            <TouchableOpacity onPress = {() => this.delete()}>
                                <Text onPress = {this.action} style={{color:'#BA1717',fontSize:13,borderWidth:2,borderRadius:5,borderColor:'#BA1717',padding:12,marginRight:5,fontFamily:'Montserrat-Bold'}}>Remove</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {this.closemodal}>
                                <Text style={{color:'#fff',fontSize:13,borderWidth:1,borderRadius:5,borderColor:'#BA1717',padding:12,marginRight:5,backgroundColor:'#BA1717',fontFamily:'Montserrat-Bold'}}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>  
                
               {
                   this.props.data.carts.length == 0 && 
                   <View style={{backgroundColor:'#fff',padding:10,marginTop:5}}>
                        <Text style={{color:'#666666',fontSize:14,fontFamily:'Montserrat-Bold'}}>No Item in Cart</Text>
                   </View>
               } 
               {
                   this.props.data.carts.map((cart) =>
                  <View key = {cart.id} value = {cart.id} style={{backgroundColor:'#fff',padding:10,marginTop:5}}>
              
                   <View style={{marginTop:20}}>
                   <View key={cart.id} value ={cart.id} style={{flexDirection:'row',borderBottomColor:'#f2f2f2',borderBottomWidth:1,marginBottom:7}}>
                    <View style={{width:'23%'}}>
                        <View>
                        <Image
                              source={{uri: `${this.state.siteurl+'/public/images/'+cart.image.split('|')[0]}`}}
                              style={{width:'100%',aspectRatio:2/2, alignSelf:'center'}}                        
                              />
                        </View>
                    </View>
                    <View style={{width:'64%',marginStart:'10%'}}>
                            <Text style={{color:'#666666',fontSize:14,fontFamily:'Montserrat-Bold'}}>{cart.name}</Text>

                            <Text style={{marginTop:10,color:'#000000',fontSize:14,fontFamily:'Montserrat-Bold'}}>{currencyFormatter.format(cart.cost, { code: 'NGN' })}</Text>

                                
                            
                            
                    </View>
                   
                   </View>
                    <View style={{width:'100%',flexDirection:'row'}}>
                            <View style={{width:'70%'}}>
                                <IonIcon onPress = {() =>this.remove(cart)} name="md-trash" size={24} color="#BA1717" style={{marginStart:7}} />
                            </View>
                            <View style={{flexDirection:'row'}}>
                                        <IonIcon onPress = {()=>this.minus(cart)} name="md-remove-circle" size={24} color="#BA1717" style={{width:'20%',marginTop:3}}></IonIcon>
                                        <Text style={{color:'#000000',fontSize:19,fontFamily:'Montserrat-Bold',width:'20%'}}>{cart.quantity}</Text>
                                        <IonIcon onPress = {()=>this.plus(cart)} name="md-add-circle" size={24} color="#BA1717" style={{width:'20%',marginTop:3}}></IonIcon>
                                        
                                </View>
                    </View>
                    </View>
                </View>
                  
                )
               }    
               
               <View style={{marginTop:15}}>
                  <TouchableOpacity onPress = {() => this.props.navigation.goBack()} style={{backgroundColor:'#7dd148', borderRadius:3,padding:10,borderRadius:5}}>
                      <Text style={{textAlign:'center',color:'#fff',fontFamily:'Montserrat-Bold'}}>Add more Items</Text>
                  </TouchableOpacity>
               </View>
              
              
               
               <View style={{flexDirection:'row',marginTop:20,width:'100%',marginBottom:30}}>
                   <View style={{width:'50%'}}>
                   <TouchableOpacity style={{borderRadius:5}}>
                        <Text style={{textAlign:'justify',color:'#000000', fontFamily:'Montserrat-SemiBold',marginTop:10}}>Total {currencyFormatter.format(this.props.data.total_price, { code: 'NGN' })}</Text>
                    </TouchableOpacity>
                   </View>
                    <View style={{width:'50%'}}>
                    <TouchableOpacity onPress={this.toship} style={{padding:10,borderRadius:5,backgroundColor:'#BA1717',paddingLeft:25,paddingRight:25}}>
                      <Text style={{textAlign:'center',color:'#fff',fontFamily:'Montserrat-Bold'}}>Place Order</Text>
                    </TouchableOpacity>
                    </View>
                    
               </View>
           </ScrollView>
        );
    }

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:15,
        backgroundColor:'#f3f6f8'
    }
})
const mapStateToProps = state => {
    return {
        data: state.Reducer
    };
};
export default connect(mapStateToProps)(CartScreen);