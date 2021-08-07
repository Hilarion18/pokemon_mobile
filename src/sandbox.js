
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