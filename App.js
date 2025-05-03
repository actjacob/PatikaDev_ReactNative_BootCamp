import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  // function sayHello() {
  //   console.log('Merhaba');
  // }

  // const sayHello = label => {
  //   console.log('Merhabalar!!' + label);
  // };
  const sayHi = () => {
    Alert.alert('Hi Joel ');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.customContainer}>
        <View style={styles.customBody}>
          <Text style={styles.nameText}>Joel</Text>
          <Text style={styles.messageText}>I saved her</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={sayHi}>
          <Text style={styles.buttonText}>I Liked </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#becde6',
  },
  customContainer: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
  },
  customBody: {
    paddingBottom: 20,
    padding: 20,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  messageText: {
    fontSize: 18,
  },
  button: {
    backgroundColor: '#3168c4',
    alignItems: 'center',
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  buttonText: {
    color: 'white',
  },
});

export default App;
