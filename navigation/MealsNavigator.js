import * as React from 'react';
import {Text,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle,} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CategoriesScreen from '../screens/MealScreen/CategoriesScreen';
import CategoriesMealScreen from '../screens/MealScreen/CategoriesMealScreen';
import MealDetailScreen from '../screens/MealScreen/MealDetailScreen';
import Colors from '../constants/Colors'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
//import BottomTabNavigator from '../navigation/BottomTabNavigator';
import HeaderButton from '../components/HeaderButton';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const MealsNavigator = (props,route) =>{

  return (



<NavigationContainer>



<Stack.Navigator   screenOptions={{ headerStyle:{backgroundColor:Colors.amineColor , borderEndColor : Colors.warningBackground}, headerTintColor:'white'  }} initialRouteName="Home"> 

<Stack.Screen  options={{ title: 'Meal Categories' }} name="Home" component={CategoriesScreen} />

<Stack.Screen name="CategoriMeal"  options={({ route }) => ({ title: route.params.header })} component={CategoriesMealScreen} />

<Stack.Screen name="Detail"

options={{
            headerTitle: 'My Deatail Meal',
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log('Mark as favorite!');
          }}
        />
      </HeaderButtons>
            ),
          }}
      
         component={MealDetailScreen} />
      
       
      

  

</Stack.Navigator>
</NavigationContainer>


  );

 
}
 


export default (MealsNavigator) ;