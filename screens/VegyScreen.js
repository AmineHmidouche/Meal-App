/*
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View , FlatList } from 'react-native';
//import { ScrollView } from 'react-native-gesture-handler';

import {CATEGORIES} from '../data/dammy-data';
import DetailMail1 from '../components/MyComp/DetailMail1';
 
      

 const VegyScreen = props => {
     
    const RenderMyitem = (itemData) => {
        return (
    <TouchableOpacity onPress={() => {
        props.navigation.navigate('Detail');}}>
      
         
     
            <View style={styles.GridItems}><Text> {itemData.item.title} </Text></View>
        </TouchableOpacity>

        );
      }
        
  return (

<View    style={styles.container}>
    <FlatList
 
    numColumns={2}
    data={CATEGORIES}
    renderItem={RenderMyitem}
    keyExtractor={(item,index) => {item.id}}
    />
    </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection : 'row',
    },
    GridItems : {
  
  flex:1  ,
  margin : 70 ,
  height:200,
  backgroundColor : 'blue',
  justifyContent: 'space-between',
  
    },
  });
  
  export default VegyScreen;*/