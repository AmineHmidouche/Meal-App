//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import useCachedResources from './hooks/useCachedResources';
import MealsNavigator from './navigation/MealsNavigator';
//import MealsNavigator from './navigation/BottomTabNavigator';
//import LinkingConfiguration from './navigation/LinkingConfiguration';
//import DetailMail1 from './components/MyComp/DetailMail1';


//const Stack = createStackNavigator();

export default function App(props) {
 /* const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {*/
    return <MealsNavigator/>
    
    /*null;<MealsNavigator/>
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <NavigationContainer linking={LinkingConfiguration}>
          <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} />
          </Stack.Navigator>
          <Stack.Navigator>
            <Stack.Screen name="Rooot" component={DetailMail1} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }*/

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
