import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './NewsCardStyle';

const NewsCard = props => {
  console.log(props);
  return (
    <View style={styles.container}>
      <Image style={styles.image} />
      <Text style={styles.title}> </Text>
      <Text style={styles.description}></Text>
    </View>
  );
};

export default NewsCard;
