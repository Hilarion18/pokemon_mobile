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

import {addData} from "../../action";
import { addPokemonList } from '../../models/pokemon_list/actions';
import { GET_ALL_POKEMON_LIST } from '../../models/pokemon_list/actions';


const mapStateToProps = (state, props) => {
  console.log("== mapStateToProps: ", state.pokemons);
  const pokemons = state.pokemons;
  console.log("== mapStateToProps2: ", pokemons);
  return {pokemonList: state.pokemons};
}

const mapDispatchToProps = (dispatch, props) => ({
  getAllPokemonList: () => {
    dispatch({
      type: GET_ALL_POKEMON_LIST,
      payload: [],
    });
  },
});

const PokemonListView = ({ pokemonList, getAllPokemonList, navigation }) => {
  console.log("== pokemons: ", pokemonList)

  useEffect(() => {
    getAllPokemonList();
  }, [getAllPokemonList]);

  return (
    <SafeAreaView>
      <View>
        <View
          style={styles.borderTitle}>
        </View>
      </View>
      <View style={styles.itemContainer}>
        {
            pokemonList.map((l, i) => (
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
        }
      </View>
    </SafeAreaView>
  );
}

PokemonListScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PokemonListView)

// // // function PokemonListScreen(props) {
// const PokemonListScreen = ({ navigation }) => {
//   const dispatch = useDispatch();
//   const list = [
//     {
//       id: "1",
//       text: "List Pokemon"
//     },
//     {
//       id: "2",
//       text: "List Item"
//     },
//   ];
//   //1 - DECLARE VARIABLES
//   const [isFetching, setIsFetching] = useState(false);
//   const [pokemons, setPokemons] = useState([]);
//   //Access Redux Store State
//   const pokemonListReducer = useSelector((state) => state.pokemonListReducer);
//   const pokemonLists = pokemonListReducer;
  

//   //==================================================================================================

//   //2 - MAIN CODE BEGINS HERE
//   useEffect(() => getPokemonList(), []);

//   const getPokemonList = () => {
//     setIsFetching(true);
//     let url = "https://pokeapi.co/api/v2/pokemon/";
//     axios.get(url)
//       .then(res => {
//         console.log("axios data 1: ", res.data.results)
//         setPokemons(res.data.results);
//         dispatch(addPokemonList(res.data.results));
//       })
//       .catch(error => alert(error.message))
//       .finally(() => setIsFetching(false));
//   };
//   console.log("== pokemons: ", pokemons)
//   console.log("== pokemons 2: ", pokemonLists)

//   return (
//     <SafeAreaView>
//       <View>
//         <View
//           style={styles.borderTitle}>
//         </View>
//       </View>
//       <View style={styles.itemContainer}>
//         {
//             pokemons.map((l, i) => (
//             <View
//               key={i}
//               >
//                 <TouchableHighlight
//                   >
//                   <ListItem
//                     Component={TouchableScale}
//                     friction={90} //
//                     tension={100} // These props are passed to the parent component (here TouchableScale)
//                     activeScale={0.95} //
//                     style={styles.itemOption}
//                     // onPress={() =>
//                     //   l.text === "List Pokemon" ? navigation.navigate('PokemonList') : navigation.navigate('ItemList') }
//                     >
//                       <ListItem.Content>
//                       <ListItem.Title>{l.name}</ListItem.Title>
//                       </ListItem.Content>
//                       <IconIonIcon name="chevron-forward-outline"></IconIonIcon>
//                   </ListItem>
//                 </TouchableHighlight>
//             </View>
//             ))
//         }
//       </View>
//     </SafeAreaView>
//   );
// }

// function PokemonListScreen(props) {
//     const dispatch = useDispatch();

//     //1 - DECLARE VARIABLES
//     const [isFetching, setIsFetching] = useState(false);

//     //Access Redux Store State
//     const dummyReducer = useSelector((state) => state.dummyReducer);
//     const { data } = dummyReducer;
    

//     //==================================================================================================

//     //2 - MAIN CODE BEGINS HERE
//     useEffect(() => getData(), []);

//     //==================================================================================================

//     //3 - GET FLATLIST DATA
//     const getData = () => {
//         setIsFetching(true);
//         let url = "https://my-json-server.typicode.com/mesandigital/demo/instructions";
//         axios.get(url)
//             .then(res => res.data)	
//             .then((data) => dispatch(addData(data)))
//             .catch(error => alert(error.message))
//             .finally(() => setIsFetching(false));
//     };

//     const getPokemonList = () => {
//         setIsFetching(true);
//         let url = "https://my-json-server.typicode.com/mesandigital/demo/instructions";
//         axios.get(url)
//             .then(res => res.data)	
//             .then((data) => dispatch(addData(data)))
//             .catch(error => alert(error.message))
//             .finally(() => setIsFetching(false));
//     };
   

//     //==================================================================================================

//     //4 - RENDER FLATLIST ITEM
//     const renderItem = ({item, index}) => {
//         return (
//             <View style={styles.row}>
//                 <Text style={styles.title}>
//                     {(parseInt(index) + 1)}{". "}{item.title}
//                 </Text>
//                 <Text style={styles.description}>
//                     {item.description}
//                 </Text>
//             </View>
//         )
//     };

//     //==================================================================================================

//     //5 - RENDER
//     if (isFetching) {
//         return (
//             <View style={styles.activityIndicatorContainer}>
//                 <ActivityIndicator animating={true}/>
//             </View>
//         );
//     } else{
//         return (
//             <View style={{flex:1, backgroundColor: '#F5F5F5', paddingTop:20}}>
//                 <FlatList
//                     data={data}
//                     renderItem={renderItem}
//                     keyExtractor={(item, index) => `flat_${index}`}/>
//             </View>
//         );
//     }
// };

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

export default PokemonListScreen;