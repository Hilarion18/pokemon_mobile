import React, {useEffect, useState, Component} from 'react';
import { FlatList, StyleSheet, View, Text, ActivityIndicator, SafeAreaView, TouchableHighlight, Animated} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ListItem, Avatar } from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import LinearGradient from 'react-native-linear-gradient'; // Only if no expo
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconIonIcon from 'react-native-vector-icons/Ionicons'
import axios from 'axios'; //Only import if using api
import { connect } from 'react-redux'

import { GET_ALL_ITEM_LIST } from '../../models/item_list/actions';


const mapStateToProps = (state, props) => {
  console.log("== mapStateToProps: ", state.items);
  const itemList = state.items;
  console.log("== mapStateToProps2: ", itemList);
  return {itemList: state.items};
}

const mapDispatchToProps = (dispatch, props) => ({
  getAllItemList: () => {
    dispatch({
      type: GET_ALL_ITEM_LIST,
      payload: [],
    });
  },
});

const ItemListView = ({ itemList, getAllItemList, navigation }) => {
  console.log("== items: ", itemList)

  useEffect(() => {
    getAllItemList();
  }, [getAllItemList]);

  return (
    <SafeAreaView>
      <View>
        <View
          style={styles.borderTitle}>
        </View>
      </View>
      <View style={styles.itemContainer}>
      { 
        itemList.length > 0
          ?
          itemList.map((l, i) => (
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
                  // onPress={() =>
                  //   l.text === "List Pokemon" ? navigation.navigate('PokemonList') : navigation.navigate('ItemList') }
                  >
                    <ListItem.Content>
                    <ListItem.Title>{l.name}</ListItem.Title>
                    </ListItem.Content>
                    <IconIonIcon name="chevron-forward-outline"></IconIonIcon>
                </ListItem>
              </TouchableHighlight>
          </View>
          ))
          : null
        }
      </View>
    </SafeAreaView>
  );
}

ItemListScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ItemListView)

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

export default ItemListScreen;