import { View, Text, StyleSheet } from 'react-native';
import { Doge } from './SampleComponents';

export default function App() {
  return (
    <View style={styles.container}>
      <Doge/>
      {/* <Text>👋 Hello :)</Text> */}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
