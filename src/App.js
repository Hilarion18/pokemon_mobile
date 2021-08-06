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
                // height: 0
              },
              headerTitleStyle: {
                // alignSelf: 'flex-start',
                // fontFamily: "",
                // fontWeight: "600"
              },
              // headerLeft: () =>
              //   <Icon
              //     onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
              //     style={[{ color: 'white', marginLeft: 8 }]}
              //     size={24}
              //     name={'menu'}
              //   />
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
        </Stack.Navigator>
        </NavigationContainer>
        {/* <Home/> */}
      </Provider>
    );
  }
}