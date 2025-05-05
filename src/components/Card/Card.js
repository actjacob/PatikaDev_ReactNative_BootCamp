import React from 'react';
import {
  SafeareaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './CardStyles';

const Card = props => {
  const sayHi = () => {
    Alert.alert('Selam ' + props.text);
  };
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.text}>{props.text}</Text>
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={sayHi}>
        <Text style={styles.buttonTitle}>{props.button}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
