import React, {useEffect, useState, Component} from 'react';
import { FlatList, StyleSheet, View, Text, ActivityIndicator, SafeAreaView, TouchableHighlight, Animated, Image} from 'react-native';
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

import {addData} from "../../action";
import { addPokemonList } from '../../models/pokemon_list/actions';
import { GET_ALL_POKEMON_LIST } from '../../models/pokemon_list/actions';
import { GET_POKEMONT_DETAIL } from '../../models/pokemon_detail/actions';
import { GET_ITEM_DETAIL } from '../../models/item_detail/actions';
import Svg, { SvgUri, Circle, Rect, SvgCssUri } from 'react-native-svg';
import * as Progress from 'react-native-progress';

const mapStateToProps = (state, props) => {
  console.log("== mapStateToProps: ", state.itemDetail);
  const itemDetail = state.itemDetail;
  console.log("== mapStateToProps2: ", itemDetail);
  return {
    item: state.itemDetail,
  };
}

const mapDispatchToProps = (dispatch, props) => ({
  getItemDetail: (name) => {
    dispatch({
      type: GET_ITEM_DETAIL,
      payload: {},
      itemName: name
    });
  },
});

const ItemDetailView = ({ getItemDetail, item, route, navigation }) => {
  console.log("== route.params", route.params);
  console.log("== item", item);
  const { name } = route.params;
  let newName = ''

  useEffect(() => {
    getItemDetail(name);
  }, [getItemDetail]);

  const changeName = [...name].forEach((val, i) => {
    if (i === 0) {
      val = val.toUpperCase();
    }
    newName += val;
  })

  return (
    <SafeAreaView>
      <View>
        <View
          style={styles.borderTitle}>
        </View>
      </View>
      <View>
        <View
            style={[styles.areaImage]}
            >
            <TouchableHighlight
              >
              <Image source={{ uri: item?.sprites?.default}} style={styles.image} />
              {/* <Image source={{ uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"}} style={styles.image} /> */}
            </TouchableHighlight>
              <Text style={styles.itemName}>
                { newName }
              </Text>
            </View>
      </View>

      <View style={styles.experience}>
        {/* <Text style={styles.contentDetail}>
          Experience: { pokemon.base_experience } %
        </Text> */}

        <View style={styles.contentDetail}>
          <Progress.Bar progress={50/100} color="#31C283" width={200} />
        </View>

      </View>
      <View style={styles.ridesFriends}>
        <View>
          <Text style={styles.numbers}>{item?.cost} gold</Text>
          <View style={styles.mainDetail}>
            <Text>
              COST
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.textContent}>
          Category: { item?.category?.name }
        </Text>
      </View>
      { item?.effect_entries.map((val, i) => {
        if (i === 0) {
          return (
            <View
              key={i}
              >
              <Text style={styles.textContent}>Effect: {val?.short_effect}</Text>
            </View>
          )
        } else {
          return (
            null
          )
        }
      })
      }
      <View style={styles.mainDetail}>
        <Text style={styles.itemName}>
          Details comming soon....
        </Text>
      </View>
    </SafeAreaView>
  );
}

ItemDetailScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ItemDetailView)

const styles = StyleSheet.create({
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
    },
    areaImage: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      marginTop: 10,
      width: 125,
      height: 125,
      borderRadius: 125 / 2,
      overflow: "hidden",
      borderWidth: 3,
      borderColor: "#C4C4C4"
    },
    itemName: {
      margin: 15,
      fontSize: 24,
      fontWeight: "400",
      color: "#6F6C6C"
    },
    experience: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    contentDetail: {
      paddingTop: 5,
      paddingBottom: 5
    },
    ridesFriends: {
      paddingTop: 20,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: '100%',
      marginBottom: 20,
    },
    numbers: {
      marginBottom: 5,
      fontSize: 24,
      color: '#31C283',
      fontWeight: 'bold',
    },
    verticleLine: {
      height: '100%',
      width: 1,
      backgroundColor: '#909090',
    },
    mainDetail: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    detailContainer: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    textContent: {
      margin: 10,
      fontSize: 18,
      fontWeight: "400",
      color: "#6F6C6C"
    },
});

export default ItemDetailScreen;