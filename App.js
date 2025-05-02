import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

const App = () => {
  // function sayHello() {
  //   console.log('Merhaba');
  // }

  // const sayHello = label => {
  //   console.log('Merhabalar!!' + label);
  // };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Hello World!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
});

export default App;
