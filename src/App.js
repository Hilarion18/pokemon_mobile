import React, { Component } from 'react';
import { Provider } from 'react-redux';

import {store} from './store'; //Import the store
import Home from './screens/home/Home' //Import the component file
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PokemonListScreen from './screens/pokemon_list/PokemonList';
import ItemList from './screens/item_list/ItemList';
import { UserScreen } from './screens/user/UserScreen';
import PokemonDetailScreen from './screens/pokemon_list/PokemonDetail';
import ItemDetailScreen from './screens/item_list/itemDetail';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            component={Home}
            options={{
              title: "Pokemon App",
              headerTintColor: '#6F6C6C',
              headerStyle: {
                backgroundColor: '##FCFCFD'
              },
              headerTitleStyle: {
              },
            }}
          />
          <Stack.Screen
            name="PokemonList"
            component={PokemonListScreen}
            options={{
              title: "",
              headerTintColor: '#6F6C6C',
              headerStyle: {
                backgroundColor: '##FCFCFD'
                // height: 0
              },
            }}
          />
          <Stack.Screen
            name="ItemList"
            component={ItemList}
            options={{
              title: "",
              headerTintColor: '#6F6C6C',
              headerStyle: {
                backgroundColor: '##FCFCFD'
                // height: 0
              },
            }}
          />
          <Stack.Screen
            name="UserScreen"
            component={UserScreen}
            options={{
              title: "",
              headerTintColor: '#6F6C6C',
              headerStyle: {
                backgroundColor: '##FCFCFD'
                // height: 0
              },
            }}
          />
          <Stack.Screen
            name="PokemonDetail"
            component={PokemonDetailScreen}
            options={{
              title: "",
              headerTintColor: '#6F6C6C',
              headerStyle: {
                backgroundColor: '##FCFCFD'
                // height: 0
              },
            }}
          />
          <Stack.Screen
            name="ItemDetail"
            component={ItemDetailScreen}
            options={{
              title: "",
              headerTintColor: '#6F6C6C',
              headerStyle: {
                backgroundColor: '##FCFCFD'
                // height: 0
              },
            }}
          />
        </Stack.Navigator>
        </NavigationContainer>
        {/* <Home/> */}
      </Provider>
    );
  }
}