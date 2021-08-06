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

import {addData} from "../../action";
// import ItemList from '../item_list/ItemList';
// import PokemonList from '../pokemon_list/PokemonList';

import {connect} from 'react-redux';
import {GET_ALL_USER_INFO_REQUEST} from '../../models/user/actions';

const mapStateToProps = (state, props) => {
  const {id, name, email} = state.user;

  return {id, name, email};
};

const mapDispatchToProps = (dispatch, props) => ({
  getAllUserInfo: () => {
    dispatch({
      type: GET_ALL_USER_INFO_REQUEST,
      payload: {},
    });
  },
});

const UserView = ({id, name, email, getAllUserInfo, navigation}) => {
  // navigation.navigate('Login')

  useEffect(() => {
    getAllUserInfo();
  }, [getAllUserInfo]);

  return (
    <View>
      <Text>{id}</Text>
      <Text>{name}</Text>
      <Text>{email}</Text>
    </View>
  );
};

const UserScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserView);

export {UserScreen};
