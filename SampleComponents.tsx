import { useState, useEffect } from 'react'
import { 
  StyleSheet, 
  Text as _Text, 
  Image, 
  View, 
  Pressable, 
  ActivityIndicator, 
  ScrollView,
  TextProps
} from 'react-native';

const Text = (props: TextProps) => <_Text style={[styles.text, props.style]}>{props.children}</_Text>;

interface CatProps {name: string};

function Cat() {
    return (
      <View>
        <Image 
          source={{ uri: 'https://rb.gy/5zq7ne', height: 100, width: 100 }}
        />
        <Text>Hello, I'm a cat!</Text>
      </View>
    );
}

function MoviePosterShowcase() {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      async function fetchMovies() {
        const URL = 'https://api.sampleapis.com/movies/animation';
        const response = await fetch(URL);
        const data = await response.json();

        setMovies(data);
        setIsLoading(false);
      }

      fetchMovies();
    }, []);

    if (isLoading) return <ActivityIndicator/>;

    return (
      <ScrollView contentContainerStyle={styles.posterContainer}>
        {movies.map((movie: {id: string, posterURL: string}) => (
          <Image 
            key={movie.id} 
            source={{ uri: movie.posterURL }}
            style={styles.poster}
          />
        ))}
      </ScrollView>
    );
}

export function Doge() {
  const [numPets, setNumPets] = useState(0);

  return (
    <>
      <Pressable onPress={() => setNumPets(numPets + 1)}>
        <Image source={{ uri: 'https://rb.gy/weptcb', height: 200, width: 300}} />
      </Pressable>
      <Text>You pet me {numPets} times!</Text>
    </>
  );
}


// Usage: <Elephant name="Ella" size={75} />
function Elephant(props: ElephantProps) {
  return (
    <View style={styles.elephant}>
      <Text style={{fontSize: props.size}}>🐘</Text>
      <Text>Hi, I'm {props.name} the elephant</Text>
    </View>
  );
}

interface ElephantProps {
  name: string,
  size: number
};



const styles = StyleSheet.create({
    dog: {
      backgroundColor: 'red'
    },
    button: {
      backgroundColor: 'green',
      borderRadius: 5,
      padding: 5
    },
    text: {
      fontSize: 32
    },
    elephant: {
      backgroundColor: 'orange',
      borderRadius: 5,
      width: 200,
      alignItems: 'center',
      margin: 10,
      padding: 10
    },
    posterContainer: {
      flexWrap: 'wrap',
      padding: 20,
      flexDirection: 'row',
      justifyContent: 'center',
      alignContent: 'center',
      alignSelf: 'stretch'
    },
    poster: {
      margin: 5,
      height: 250, 
      width: 150
    }
  });
  