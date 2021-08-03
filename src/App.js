import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store'; //Import the store
import Home from './screens/home/Home' //Import the component file
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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
                            headerTintColor: 'orange',
                            headerStyle: {
                                backgroundColor: 'black'
                            }
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
                {/* <Home/> */}
            </Provider>
        );
    }
}