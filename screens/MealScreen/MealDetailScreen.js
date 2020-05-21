import React from 'react';
import {View , Text , Button } from 'react-native';

const MealDetailScreen = ({props ,navigation}) =>{
//console.log(navigation.params);
    return (
<View><Text>Aminnn</Text>
<Button title='Go back ' onPress={()=>{navigation.navigate('CategoriMeal')}}  />

</View>


    );

}

export default MealDetailScreen;
