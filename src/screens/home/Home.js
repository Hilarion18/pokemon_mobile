import React, {useEffect, useState, Component} from 'react';
import { FlatList, StyleSheet, View, Text, ActivityIndicator, SafeAreaView} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios'; //Only import if using api

import {addData} from "../../action";
import { ListItem, Avatar } from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale

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

export default function Home(props) {
  const list = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://i1.sndcdn.com/artworks-000097703405-l3r8n9-t500x500.jpg',
      subtitle: 'Vice President'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png',
      subtitle: 'Vice Chairman'
    },
  ];

  return (
    <SafeAreaView>
      <View>
      <Text style={styles.titleHead} >Pokemon App</Text>
        <View
          style={styles.borderTitle}>
        </View>
      </View>
    </SafeAreaView>
  );
}

// export default function Home(props) {
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
    itemOption: {
      marginTop: 10,
      marginRight: 24,
      marginLeft: 24,
      marginBottom: 10,
    }
});