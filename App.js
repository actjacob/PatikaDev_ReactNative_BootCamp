import React from 'react';
import {View, Text, SafeAreaView, Button, Alert} from 'react-native';

const App = () => {
  // function sayHello() {
  //   console.log('Merhaba');
  // }

  const sayHello = label => {
    console.log('Merhabalar!!' + label);
  };
  return (
    <SafeAreaView>
      <View style={{backgroundColor: 'green'}}>
        <Text>Hello World!</Text>
        <Text>Hello World2!</Text>
      </View>
      <Text>Hello World3!</Text>
      <Button
        title="Press Me"
        onPress={() => sayHello('yakup')}
        color={'crimson'}
      />
    </SafeAreaView>
  );
};

export default App;
