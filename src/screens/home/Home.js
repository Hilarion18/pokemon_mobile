import React, {useEffect, useState, Component} from 'react';
import { FlatList, StyleSheet, View, Text, ActivityIndicator, SafeAreaView, TouchableHighlight, Animated, ScrollView} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ListItem, Avatar } from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import LinearGradient from 'react-native-linear-gradient'; // Only if no expo
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconIonIcon from 'react-native-vector-icons/Ionicons'
import axios from 'axios'; //Only import if using api

import {addData} from "../../action";
import ItemList from '../item_list/ItemList';
import PokemonListScreen from '../pokemon_list/PokemonList';


// export default class Home extends Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         return (
//             <SafeAreaView>
//                 <Text>Hello</Text>
//             </SafeAreaView>
//         )
//     }
// }

// function Home(props) {
const Home = ({ navigation }) => {
  const list = [
    {
      id: "1",
      text: "List Pokemon",
      navigation: "PokemonList"
    },
    {
      id: "2",
      text: "List Item",
      navigation: "ItemList"
    },
    // {
    //   id: "3",
    //   text: "User",
    //   navigation: "UserScreen"
    // },
  ];

  return (
    <SafeAreaView>
      <View>
      {/* <Text style={styles.titleHead} >Pokemon App</Text> */}
        <View
          style={styles.borderTitle}>
        </View>
      </View>
      <ScrollView>
        <View style={styles.itemContainer}>
          {
              list.map((l, i) => (
              <View
                key={i}
                >
                  <TouchableHighlight
                    >
                    <ListItem
                      Component={TouchableScale}
                      friction={90} //
                      tension={100} // These props are passed to the parent component (here TouchableScale)
                      activeScale={0.95} //
                      style={styles.itemOption}
                      onPress={() =>
                        navigation.navigate(l.navigation)}
                      >
                        <ListItem.Content>
                        <ListItem.Title>{l.text}</ListItem.Title>
                        </ListItem.Content>
                        <IconIonIcon name="chevron-forward-outline"></IconIonIcon>
                    </ListItem>
                  </TouchableHighlight>
              </View>
              ))
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    activityIndicatorContainer:{
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

    row:{
        borderBottomWidth: 1,
        borderColor: "#ccc",
        padding: 10
    },

    title:{
        fontSize: 15,
        fontWeight: "600"
    },

    description:{
        marginTop: 5,
        fontSize: 14,
    },
    borderTitle: {
      borderBottomColor: '#6F6C6C',
      borderBottomWidth: 1,
      opacity: 0.5,
      shadowOpacity: 0.8,
      shadowRadius: 2,
      shadowOffset: {
        height: 1,
        width: 1
      }
    },
    titleHead: {
      paddingLeft: 24,
      paddingTop: 10,
      paddingBottom: 10,
      fontSize: 24,
      color: '#6F6C6C',
    },
    itemContainer: {
      marginTop: 10,
      marginRight: 24,
      marginLeft: 24,
      marginBottom: 10,
    },
    itemOption: {
      marginTop: 10,
      borderColor: "#6F6C6C",
      borderWidth: 1,
      borderRadius: 10,
      overflow: 'hidden',
      shadowOffset: {
        height: 1,
        width: 1
      },
      shadowRadius: 2,
      shadowColor: '#000000',
      elevation: 4,
      opacity: 0.8,
    }
});

export default Home;