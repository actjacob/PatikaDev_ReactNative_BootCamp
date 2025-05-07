import React from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import newsData from './news_data.json';
import NewsCard from './components/NewsCard';
const App = () => {
  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={newsData}
          renderItem={
            ({item}) => <NewsCard />
            // <Text>{item.title}</Text>
          }
        />
      </View>
      <NewsCard />
    </SafeAreaView>
  );
};

export default App;
