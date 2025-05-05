import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Card from './components/Card';
const App = () => {
  // function sayHello() {
  //   console.log('Merhaba');
  // }

  // const sayHello = label => {
  //   console.log('Merhabalar!!' + label);
  // };

  return (
    <SafeAreaView style={styles.container}>
      <Card title="Deniz" text="Mezura gibiyim.." />
      <Card title="Jacob " text="Another story.." />
      <Card title="Ahmet " text=" Shall we go story.." button="deniz" />
      <Card
        title="Arif Işık "
        text="Uzaylılar tarafından kaçırıldım.Evet tarafındas"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#becde6',
  },
});

export default App;
