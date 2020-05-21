import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle,} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CategoriesScreen from '../screens/MealScreen/CategoriesScreen';
import CategoriesMealScreen from '../screens/MealScreen/CategoriesMealScreen';
import MealDetailScreen from '../screens/MealScreen/MealDetailScreen';
import Colors from '../constants/Colors'

//import BottomTabNavigator from '../navigation/BottomTabNavigator';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const MealsNavigator = (props,route) =>{

  return (



<NavigationContainer>



<Stack.Navigator   screenOptions={{ headerStyle:{backgroundColor:Colors.amineColor , borderEndColor : Colors.warningBackground}, headerTintColor:'white'  }} initialRouteName="Home"> 

<Stack.Screen  options={{ title: 'Meal Categories' }} name="Home" component={CategoriesScreen} />

<Stack.Screen name="CategoriMeal"   component={CategoriesMealScreen} />

<Stack.Screen name="Detail"  component={MealDetailScreen} />
  



</Stack.Navigator>
</NavigationContainer>


  );

 
}
 


export default (MealsNavigator) ;