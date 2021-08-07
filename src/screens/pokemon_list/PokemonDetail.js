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

const replaceName = ((index, replacement) => {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
})


const PokemonDetailView = ({ getPokemonDetail, pokemon, forms, route, navigation }) => {
  console.log("== forms", forms);
  const { name } = route.params;
  let newName = ''
  // const [imageUrl, setImageUrl] = useState("r");
  // setImageUrl(forms[forms.length-1].url);

  useEffect(() => {
    getPokemonDetail(name);
  }, [getPokemonDetail]);

  const changeName = [...name].forEach((val, i) => {
    if (i === 0) {
      val = val.toUpperCase();
    }
    newName += val;
  })
  let artWork = {}


  return (
    <SafeAreaView>
      <View>
        <View
          style={styles.borderTitle}>
        </View>
      </View>
      <View>
        <Text>
          {JSON.stringify(pokemon?.sprites?.other?.dream_world?.front_default)}
          {/* {JSON.stringify(pokemon.sprites)} */}
          {/* {pokemon.sprites} */}
        </Text>
        <View
            style={[styles.areaImage]}
            >
              <TouchableHighlight
                >
                {/* <Image source={{ uri: JSON.stringify(pokemon?.sprites?.other?.dream_world?.front_default) }} style={styles.image} /> */}
                <Image source={{ uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"}} style={styles.image} />
              </TouchableHighlight>
              <Text style={styles.pokemonName}>
                { newName }
              </Text>
            </View>
      </View>
      {
        pokemon && forms !== undefined && forms !== null
        ? 
        forms.map((val, i) => {
          console.log("== val", val.url)
          if ( i === forms.length-1 ) {
          return (
            <View
            style={[styles.areaImage]}
            key={i}
            >
              <TouchableHighlight
                >
                <Image source={{ uri: val.url }} style={styles.image} />
                {/* <Image source={{ uri: forms[forms.length-1].url}} style={styles.profileImg} /> */}
              </TouchableHighlight>
              <Text style={styles.pokemonName}>
                { newName }
              </Text>
            </View>
            )
          }
          else {
            return (
              null
            )
          }
        })
        : null
      }
      <View>
        <Text>
          Experience: { pokemon.base_experience }
        </Text>
        <Text>
          Height: { pokemon.height }"
        </Text>
        <Text>
          { pokemon.location_area_encounters }
        </Text>
        <Text>
          Weight: { pokemon.weight }
        </Text>
        <Text>
          Name: { pokemon.name }
        </Text>
        <Text>
          { pokemon.order }
        </Text>
        {/* {
          forms.map((l, i) => (
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
                    onPress={() => {
                      // navigation.navigate("PokemonDetail", {
                      //   name: l.name,
                      //   text: "text"
                      // });
                    }}
                    // onPress={() =>
                    //   l.text === "List Pokemon" ? navigation.navigate('PokemonList') : navigation.navigate('ItemList') }
                    >
                      <ListItem.Content>
                      <ListItem.Title>{l.url}</ListItem.Title>
                      </ListItem.Content>
                      <IconIonIcon name="chevron-forward-outline"></IconIonIcon>
                  </ListItem>
                </TouchableHighlight>
            </View>
            ))
        } */}
      </View>
    </SafeAreaView>
  );
}

PokemonDetailScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PokemonDetailView)

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
    }
});

export default PokemonDetailScreen;