import React, { Component } from 'react';
import {View, Text,StyleSheet,ActivityIndicator,TextInput,Picker, Image,TouchableNativeFeedback, TouchableOpacity} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import { CheckBox,Card } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import {products} from '../action/fetch';

class OnboardoneScreen extends React.Component {
    static navigationOptions = {
        header:null
    };
    constructor(props){
       super(props);
       this.state ={
         isFetching:false
       }
    }
     componentDidMount(){
       this.setState({isFetching:true});
       //this.getproducts();
     }
     getproducts = async () => {
      await fetch(`${this.props.data.siteurl}/api/auth/app_data`, {
          method:'GET',
          headers:{
              'Accept': 'application/json',
              'Content-Type':'application/json'
          }
      }).then(data => data.json()).then(data => {
            this.setState({isFetching:false});
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
            
        }).catch(err => {
            this.setState({isFetching:false});
            //console.error(err);
          alert(err.toString());
        });
    }
    render(){
        return(
           <View style={styles.container}>
               <View style={{flex:4,marginTop:20}}>
                  <Image
                            source={require('../assets/images/land.png')}
                            style={{width:'90%',height:'50%', alignSelf:'center',marginTop:'10%'}}
                    />
                   
                    
                    
               </View>
               <View style={{flex:1,justifyContent:'flex-end'}}>
                      {
                        this.state.isFetching == true &&
                        <ActivityIndicator size = 'large' color='#BA11717'/>
                      }
                       
                </View>
           </View>
        );
    }

}
const styles = StyleSheet.create({
    container:{
        flex:1,
       backgroundColor:'#fff',
       padding:15
    },
    text:{
        color:'#4f4f4f',fontSize:15,fontWeight:'normal',borderBottomColor:'#C1c1c1',paddingStart:0,borderBottomWidth:1,marginBottom:10
       },
})
export default OnboardoneScreen;