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
import Svg, { SvgUri, Circle, Rect, SvgCssUri } from 'react-native-svg';
import * as Progress from 'react-native-progress';

const mapStateToProps = (state, props) => {
  console.log("== mapStateToProps: ", state.pokemonDetail);
  const pokemonDetail = state.pokemonDetail;
  console.log("== mapStateToProps2: ", pokemonDetail);
  return {
    pokemon: state.pokemonDetail,
    forms: JSON.parse(JSON.stringify(state.pokemonDetail.forms)),
  };
}

const mapDispatchToProps = (dispatch, props) => ({
  getPokemonDetail: (name) => {
    dispatch({
      type: GET_POKEMONT_DETAIL,
      payload: {},
      pokemonName: name
    });
  },
});

const PokemonDetailView = ({ getPokemonDetail, pokemon, forms, route, navigation }) => {
  console.log("== forms", forms);
  const { name } = route.params;
  let newName = ''

  useEffect(() => {
    getPokemonDetail(name);
  }, [getPokemonDetail]);

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

                <SvgCssUri
                  height={120}
                  width={120}
                  style={styles.image}
                  uri={
                    pokemon?.sprites?.other?.dream_world?.front_default
                      }
                  />
              </TouchableHighlight>
              <Text style={styles.pokemonName}>
                { newName }
              </Text>
            </View>
      </View>
      
      <View style={styles.experience}>
        <Text style={styles.contentDetail}>
          Experience: { pokemon.base_experience } %
        </Text>
        {/* <View style={styles.contentDetail}>
          <Progress.Bar progress={pokemon.base_experience/100} color="#31C283" width={200} />
        </View> */}
      </View>
      <View style={styles.ridesFriends}>
        <View>
          <Text style={styles.numbers}>{pokemon.weight}kg</Text>
          <Text style={styles.mainDetail}>
            WEIGHT
          </Text>
        </View>
        <View style={styles.verticleLine}></View>
        <View>
          {
            pokemon?.types?.map((val, i) => {
              if (i === 0) {
                return (
                  <View
                    key={i}
                    >
                    <Text style={styles.numbers}>{pokemon?.types[0]?.type?.name.toUpperCase()}</Text>
                  </View>
                )
              } else {
                return (
                  null
                )
              }
            })
          }
          <Text style={styles.mainDetail}>
            TYPE
          </Text>
        </View>
        <View style={styles.verticleLine}></View>
        <View>
          <Text style={styles.numbers}>{pokemon.height}m</Text>
          <Text style={styles.mainDetail}>
            HEIGHT
          </Text>
        </View>
      </View>
      <View style={styles.mainDetail}>
        <Text style={styles.pokemonName}>
          Details comming soon....
        </Text>
      </View>
    </SafeAreaView>
  );
}

PokemonDetailScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PokemonDetailView)

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
    pokemonName: {
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
    textContent: {

    },
});

export default PokemonDetailScreen;