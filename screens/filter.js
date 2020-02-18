import React, { Component } from 'react';
import {View, Text, ScrollView,StyleSheet, TouchableOpacity} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {search} from '../action/fetch';
import {connect } from 'react-redux';

class FilterScreen extends React.Component {
    constructor(props){
       super(props);
       this.state = {
         gender:'',
         category:''
       }
    };
    static navigationOptions = {
        header:null
    }
    type = (gender,name,category) => {
      let param = {
        sex:gender,
        type:name,
        category:category
      };
      this.props.dispatch(search(param));
      this.props.navigation.navigate('search');
    }
    render(){
        return(
            <ScrollView showsVerticalScrollIndicator = {false} style={styles.container}>
                <View>
                   <View style={{marginTop:32}}>
                        <Text style={{fontFamily:'Montserrat-Bold',width:'100%',fontSize:20}}>Filter</Text>
                   </View>
                </View>
                <View style={{marginTop:31}}>
                    <Text style={{color:'#c1c1c1',fontSize:15,marginBottom:20,fontFamily:'Montserrat-Bold'}}>MEN</Text>
                    <View>
                      <View style={{flexDirection:'row'}}>
                        <Text onPress = {() => this.setState({gender:'Men',category:'Top'})} style={{width:'95%',color:'#000000',fontFamily:'Montserrat-Regular',fontSize:15}}>Top</Text>
                        {
                          this.state.category !== 'Top' &&
                          <IonIcon name="ios-arrow-forward" size={20} color="#000000" style={{width:'5%'}}></IonIcon> 
                        }
                        {
                          this.state.gender == 'Men' && this.state.category == 'Top' &&
                          <IonIcon name="ios-arrow-down" size={20} color="#000000" style={{width:'5%'}}></IonIcon> 
                        }
                      </View>
                      {
                        this.state.gender == 'Men' && this.state.category == 'Top' &&
                        <View style={{marginTop:15}}>
                          <Text onPress = {()=>this.type('Men','T-Shirts','Top')} style={{padding:7,paddingHorizontal:0,color:'#ECA6A6'}}>T-shirts</Text>
                          <Text onPress = {()=>this.type('Men','dashiki','Top')} style={{padding:7,paddingHorizontal:0,color:'#ECA6A6'}}>Dashiki</Text>
                          <Text onPress = {()=>this.type('Men','sweatshirts','Top')} style={{padding:7,paddingHorizontal:0,color:'#ECA6A6'}}>Sweatshirts</Text>
                          <Text onPress = {()=>this.type('Men','Cardigan','Top')} style={{padding:7,paddingHorizontal:0,color:'#ECA6A6'}}>Cardigan</Text>
                        </View>
                      }
                      
                    </View>
                    <View>
                      <View style={{flexDirection:'row'}}>
                        <Text onPress = {() => this.setState({gender:'Men',category:'Trouser and Short'})} style={{color:'#000000',fontFamily:'Montserrat-Regular',fontSize:15,width:'95%'}}>Trouser and Short</Text>
                        {
                          this.state.category !== 'Trouser and Short' &&
                          <IonIcon name="ios-arrow-forward" size={20} color="#000000" style={{width:'5%'}}></IonIcon> 
                        }
                        {
                          this.state.gender == 'Men' && this.state.category == 'Trouser and Short' &&
                          <IonIcon name="ios-arrow-down" size={20} color="#000000" style={{width:'5%'}}></IonIcon> 
                        }
                      </View>
                      {
                        this.state.gender == 'Men' && this.state.category == 'Trouser and Short' &&
                      <View style={{marginTop:15}}>
                          <Text onPress = {()=>this.type('Men','cargo pants','Trouser and Short')} style={{padding:7,paddingHorizontal:0,color:'#ECA6A6'}}>Cargo pants</Text>
                          <Text onPress = {()=>this.type('Men','capri pants','Trouser and Short')} style={{padding:7,paddingHorizontal:0,color:'#ECA6A6'}}>Capri pants</Text>
                          <Text onPress = {()=>this.type('Men','formal trouser','Trouser and Short')} style={{padding:7,paddingHorizontal:0,color:'#ECA6A6'}}>Formal trouser</Text>
                          <Text onPress = {()=>this.type('Men','sweat pant','Trouser and Short')} style={{padding:7,paddingHorizontal:0,color:'#ECA6A6'}}>Sweat pant</Text>
                      </View>
                      }
                    </View>
                    <View>
                      <View style={{flexDirection:'row'}}>
                        <Text onPress = {()=>this.type('Men','Suits','Suits')} style={{width:'95%',color:'#000000',fontFamily:'Montserrat-Regular',fontSize:15}}>Suit</Text>
                        {
                          this.state.category !== 'Suit' &&
                          <IonIcon name="ios-arrow-forward" size={20} color="#000000" style={{width:'5%'}}></IonIcon> 
                        }
                        {
                          this.state.gender == 'Men' && this.state.category == 'Suit' &&
                          <IonIcon name="ios-arrow-down" size={20} color="#000000" style={{width:'5%'}}></IonIcon> 
                        }
                      </View>
                      
                    </View> 
                    <View>
                      <View style={{flexDirection:'row'}}>
                        <Text onPress = {()=>this.type('Men','Shoes','Shoes')} style={{width:'95%',color:'#000000',fontFamily:'Montserrat-Regular',fontSize:15}}>Shoes</Text>
                        {
                          this.state.category !== 'Shoes' &&
                          <IonIcon name="ios-arrow-forward" size={20} color="#000000" style={{width:'5%'}}></IonIcon> 
                        }
                        {
                          this.state.gender == 'Men' && this.state.category == 'Shoes' &&
                          <IonIcon name="ios-arrow-down" size={20} color="#000000" style={{width:'5%'}}></IonIcon> 
                        }
                      </View>
                      
                    </View>  
                    <View>
                      <View style={{flexDirection:'row'}}>
                        <Text onPress = {()=>this.type('Men','Cap','Cap')} style={{width:'95%',color:'#000000',fontFamily:'Montserrat-Regular',fontSize:15}}>Cap</Text>
                        {
                          this.state.category !== 'Cap' &&
                          <IonIcon name="ios-arrow-forward" size={20} color="#000000" style={{width:'5%'}}></IonIcon> 
                        }
                        {
                          this.state.gender == 'Men' && this.state.category == 'Cap' &&
                          <IonIcon name="ios-arrow-down" size={20} color="#000000" style={{width:'5%'}}></IonIcon> 
                        }
                      </View>
                      
                    </View>   
                </View>
                <View style={{marginTop:31}}>
                    <Text  style={{color:'#c1c1c1',fontSize:15,marginBottom:20,fontFamily:'Montserrat-Bold'}}>Women</Text>
                    <View>
                      <View style={{flexDirection:'row'}}>
                        <Text onPress = {() => this.setState({gender:'Women',category:'Top'})} style={{width:'95%',color:'#000000',fontFamily:'Montserrat-Regular',fontSize:15}}>Top</Text>
                        {
                          this.state.category !== 'Top' &&
                          <IonIcon name="ios-arrow-forward" size={20} color="#000000" style={{width:'5%'}}></IonIcon> 
                        }
                        {
                          this.state.gender == 'Women' && this.state.category == 'Top' &&
                          <IonIcon name="ios-arrow-down" size={20} color="#000000" style={{width:'5%'}}></IonIcon> 
                        }
                      </View>
                      {
                        this.state.gender == 'Women' && this.state.category == 'Top' &&
                      <View style={{marginTop:15}}>
                          <Text onPress = {()=>this.type('Women','camisoles','Top')} style={{padding:7,paddingHorizontal:0,color:'#ECA6A6'}}>Camisoles</Text>
                          <Text onPress = {()=>this.type('Women','shirts','Top')} style={{padding:7,paddingHorizontal:0,color:'#ECA6A6'}}>Shirts</Text>
                          <Text onPress = {()=>this.type('Women','cropTops','Top')} style={{padding:7,paddingHorizontal:0,color:'#ECA6A6'}}>CropTops</Text>
                          <Text onPress = {()=>this.type('Women','T-shirts','Top')} style={{padding:7,paddingHorizontal:0,color:'#ECA6A6'}}>T-shirts</Text>
                          <Text onPress = {()=>this.type('Women','cardigan','Top')} style={{padding:7,paddingHorizontal:0,color:'#ECA6A6'}}>Cardigan</Text>
                          <Text onPress = {()=>this.type('Women','blazers','Top')} style={{padding:7,paddingHorizontal:0,color:'#ECA6A6'}}>Blazers</Text>
                      </View>
                      }
                    </View>
                    <View>
                      <View style={{flexDirection:'row'}}>
                        <Text onPress = {() => this.setState({gender:'Women',category:'Skirts'})} style={{color:'#000000',fontFamily:'Montserrat-Regular',fontSize:15,width:'95%'}}>Skirts</Text>
                        {
                          this.state.category !== 'Skirts' &&
                          <IonIcon name="ios-arrow-forward" size={20} color="#000000" style={{width:'5%'}}></IonIcon> 
                        }
                        {
                          this.state.gender == 'Women' && this.state.category == 'Skirts' &&
                          <IonIcon name="ios-arrow-down" size={20} color="#000000" style={{width:'5%'}}></IonIcon> 
                        }
                      </View>
                      {
                        this.state.gender == 'Women' && this.state.category == 'Skirts' &&
                      <View style={{marginTop:15}}>
                          <Text onPress = {()=>this.type('Women','demin Skirts','Skirts')} style={{padding:7,paddingHorizontal:0,color:'#ECA6A6'}}>Demin Skirts</Text>
                          <Text onPress = {()=>this.type('Women','hign - low Skirts','Skirts')} style={{padding:7,paddingHorizontal:0,color:'#ECA6A6'}}>High – low Skirts</Text>
                          <Text onPress = {()=>this.type('Women','pencil Skirts','Skirts')} style={{padding:7,paddingHorizontal:0,color:'#ECA6A6'}}>Pencil Skirts</Text>
                          <Text onPress = {()=>this.type('Women','leather Skirts','Skirts')} style={{padding:7,paddingHorizontal:0,color:'#ECA6A6'}}>Leather skirt</Text>
                          <Text onPress = {()=>this.type('Women','wrap skirt','Skirts')} style={{padding:7,paddingHorizontal:0,color:'#ECA6A6'}}>Wrap skirt</Text>
                          <Text onPress = {()=>this.type('Women','suit skirt','Skirts')} style={{padding:7,paddingHorizontal:0,color:'#ECA6A6'}}>Suit skirt</Text>
                      </View>
                      }
                    </View>
                    <View>
                      <View style={{flexDirection:'row'}}>
                        <Text onPress = {() => this.setState({gender:'Women',category:'Trouser and Short'})} style={{color:'#000000',fontFamily:'Montserrat-Regular',fontSize:15,width:'95%'}}>Trouser and Short</Text>
                        {
                          this.state.category !== 'Trouser and Short' &&
                          <IonIcon name="ios-arrow-forward" size={20} color="#000000" style={{width:'5%'}}></IonIcon> 
                        }
                        {
                          this.state.gender == 'Women' && this.state.category == 'Trouser and Short' &&
                          <IonIcon name="ios-arrow-down" size={20} color="#000000" style={{width:'5%'}}></IonIcon> 
                        }
                      </View>
                      {
                        this.state.gender == 'Women' && this.state.category == 'Trouser and Short' &&
                      <View style={{marginTop:15}}>
                          <Text onPress = {()=>this.type('Women','cargo pants','Trouser and Short')} style={{padding:7,paddingHorizontal:0,color:'#ECA6A6'}}>Cargo pants</Text>
                          <Text onPress = {()=>this.type('Women','leather shorts','Trouser and Short')} style={{padding:7,paddingHorizontal:0,color:'#ECA6A6'}}>Leather shorts</Text>
                          <Text onPress = {()=>this.type('Women','palazzo pants','Trouser and Short')} style={{padding:7,paddingHorizontal:0,color:'#ECA6A6'}}>Palazzo pants</Text>
                          <Text onPress = {()=>this.type('Women','pencil suit','Trouser and Short')} style={{padding:7,paddingHorizontal:0,color:'#ECA6A6'}}>Pencil suit</Text>
                          <Text onPress = {()=>this.type('Women','parachute pants','Trouser and Short')} style={{padding:7,paddingHorizontal:0,color:'#ECA6A6'}}>Parachute pants</Text>
                          <Text onPress = {()=>this.type('Women','sweat pants','Trouser and Short')} style={{padding:7,paddingHorizontal:0,color:'#ECA6A6'}}>Sweat pants</Text>
                          <Text onPress = {()=>this.type('Women','yoga pants','Trouser and Short')} style={{padding:7,paddingHorizontal:0,color:'#ECA6A6'}}>Yoga pants</Text>
                          <Text onPress = {()=>this.type('Women','jeans','Trouser and Short')} style={{padding:7,paddingHorizontal:0,color:'#ECA6A6'}}>Jeans</Text>
                          <Text onPress = {()=>this.type('Women','capri pants','Trouser and Short')} style={{padding:7,paddingHorizontal:0,color:'#ECA6A6'}}>Capri pants</Text>
                          <Text onPress = {()=>this.type('Women','bandage pants','Trouser and Short')} style={{padding:7,paddingHorizontal:0,color:'#ECA6A6'}}>Bandage pants</Text>
                      </View>
                      }
                    </View>
                    <View>
                      <View style={{flexDirection:'row'}}>
                        <Text onPress = {() => this.setState({gender:'Women',category:'Dress'})} style={{color:'#000000',fontFamily:'Montserrat-Regular',fontSize:15,width:'95%'}}>Dress</Text>
                        {
                          this.state.gender !== 'Women' && this.state.category !== 'Dress' &&
                          <IonIcon name="ios-arrow-forward" size={20} color="#000000" style={{width:'5%'}}></IonIcon> 
                        }
                        {
                          this.state.gender == 'Women' && this.state.category == 'Dress' &&
                          <IonIcon name="ios-arrow-down" size={20} color="#000000" style={{width:'5%'}}></IonIcon> 
                        }
                      </View>
                      {
                        this.state.gender == 'Women' && this.state.category == 'Dress' &&
                      <View style={{marginTop:15}}>
                          <Text onPress = {()=>this.type('Women','abaya','Dresses')} style={{padding:7,paddingHorizontal:0,color:'#ECA6A6'}}>Abaya</Text>
                          <Text onPress = {()=>this.type('Women','bandage dress','Dresses')} style={{padding:7,paddingHorizontal:0,color:'#ECA6A6'}}>Bandage dress</Text>
                          <Text onPress = {()=>this.type('Women','backless dress','Dresses')} style={{padding:7,paddingHorizontal:0,color:'#ECA6A6'}}>Backless dress</Text>
                          <Text onPress = {()=>this.type('Women','cape dress','Dresses')} style={{padding:7,paddingHorizontal:0,color:'#ECA6A6'}}>Cape dress</Text>
                          <Text onPress = {()=>this.type('Women','Lingerie dress','Dresses')} style={{padding:7,paddingHorizontal:0,color:'#ECA6A6'}}>Lingerie dress</Text>
                          <Text onPress = {()=>this.type('Women','shirt dress','Dresses')} style={{padding:7,paddingHorizontal:0,color:'#ECA6A6'}}>Shirt dress</Text>
                          <Text onPress = {()=>this.type('Women','wrap dress','Dresses')} style={{padding:7,paddingHorizontal:0,color:'#ECA6A6'}}>Wrap dress</Text>
                          <Text onPress = {()=>this.type('Women','tutu dress','Dresses')} style={{padding:7,paddingHorizontal:0,color:'#ECA6A6'}}>Tutu dress</Text>
                      </View>
                      }
                    </View>
                    <View>
                      <View style={{flexDirection:'row'}}>
                        <Text onPress = {()=>this.type('Women','suit','Suits')} style={{color:'#000000',width:'95%',fontFamily:'Montserrat-Regular',fontSize:15}}>Suit</Text>
                        {
                          this.state.gender !== 'Women' && this.state.category !== 'Suit' &&
                          <IonIcon name="ios-arrow-forward" size={20} color="#000000" style={{width:'5%'}}></IonIcon> 
                        }
                        {
                          this.state.gender == 'Women' && this.state.category == 'Suit' &&
                          <IonIcon name="ios-arrow-down" size={20} color="#000000" style={{width:'5%'}}></IonIcon> 
                        }
                      </View>
                      
                    </View> 
                    <View>
                      <View style={{flexDirection:'row'}}>
                        <Text onPress = {()=>this.type('Women','Shoes','Shoes')} style={{width:'95%',color:'#000000',fontFamily:'Montserrat-Regular',fontSize:15}}>Shoes</Text>
                        {
                          this.state.category !== 'Shoes' &&
                          <IonIcon name="ios-arrow-forward" size={20} color="#000000" style={{width:'5%'}}></IonIcon> 
                        }
                        {
                          this.state.gender == 'Women' && this.state.category == 'Shoes' &&
                          <IonIcon name="ios-arrow-down" size={20} color="#000000" style={{width:'5%'}}></IonIcon> 
                        }
                      </View>
                      
                    </View>  
                    <View>
                      <View style={{flexDirection:'row'}}>
                        <Text onPress = {()=>this.type('Women','Cap','Cap')} style={{width:'95%',color:'#000000',fontFamily:'Montserrat-Regular',fontSize:15}}>Cap</Text>
                        {
                          this.state.category !== 'Cap' &&
                          <IonIcon name="ios-arrow-forward" size={20} color="#000000" style={{width:'5%'}}></IonIcon> 
                        }
                        {
                          this.state.gender == 'Women' && this.state.category == 'Cap' &&
                          <IonIcon name="ios-arrow-down" size={20} color="#000000" style={{width:'5%'}}></IonIcon> 
                        }
                      </View>
                      
                    </View>   
                </View>
                <View style={{marginTop:31}}>
                    <Text style={{color:'#c1c1c1',fontSize:15,marginBottom:20,fontFamily:'Montserrat-Bold'}}>CHILDREN</Text>
                    {
                          this.state.gender !== 'Children' &&
                          <IonIcon name="ios-arrow-forward" size={20} color="#000000" style={{width:'5%'}}></IonIcon> 
                        }
                        {
                          this.state.gender == 'Children' &&
                          <IonIcon name="ios-arrow-down" size={20} color="#000000" style={{width:'5%'}}></IonIcon> 
                        }
                    <View>
                    {
                        this.state.gender == 'Children' && this.state.category == 'Skirts' &&  
                      <View style={{marginTop:15}}>
                          <Text onPress = {()=>this.type('Children','Top','children_wear')} style={{padding:7,paddingHorizontal:0,color:'#ECA6A6'}}>Top</Text>
                          <Text onPress = {()=>this.type('Children','Skirts','children_wear')} style={{padding:7,paddingHorizontal:0,color:'#ECA6A6'}}>Skirts</Text>
                          <Text onPress = {()=>this.type('Children','short','children_wear')} style={{padding:7,paddingHorizontal:0,color:'#ECA6A6'}}>Short</Text>
                          <Text onPress = {()=>this.type('Children','trousers','children_wear')} style={{padding:7,paddingHorizontal:0,color:'#ECA6A6'}}>Trousers</Text>
                          <Text onPress = {()=>this.type('Children','Dresses','children_wear')} style={{padding:7,paddingHorizontal:0,color:'#ECA6A6'}}>Dresses</Text>
                          <Text onPress = {()=>this.type('Children','Shoes','children_wear')} style={{padding:7,paddingHorizontal:0,color:'#ECA6A6'}}>Shoes</Text>
                          <Text onPress = {()=>this.type('Children','Cap','children_wear')} style={{padding:7,paddingHorizontal:0,color:'#ECA6A6'}}>Cap</Text>
                      </View>
                    }  
                    </View>
                      
                </View>
            </ScrollView>
        );
    }

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        backgroundColor:'#fff'
    }
})
const mapStateToprops = state => {
  return {
      data: state.Reducer
  };
};
export default connect(mapStateToprops)(FilterScreen);