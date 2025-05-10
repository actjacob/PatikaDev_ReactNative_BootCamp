import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
  ScrollView,
  Dimensions,
} from 'react-native';
import newsData from './news_data.json';
import NewsCard from './components/NewsCard';
import news_banner_data from './news_banner_data.json';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const App = () => {
  const newsRender = ({item}) => (
    // <NewsCard deniz={item} />
    <NewsCard news={item} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>News</Text>
      {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {news_banner_data.map(bannerNews => (
            <Image
              // key={bannerNews.id}
              style={styles.bannerImage}
              source={{uri: bannerNews.imageUrl}}
            />
          ))}
        </ScrollView> */}
      <FlatList
        //ListHeaderComponenti flatlistin üstünde bir yapının  gösterilmesini sağlayan ve kaydırılınca birlikte kaydırılmalarını sağlayan bir component
        ListHeaderComponent={() => (
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {news_banner_data.map(bannerNews => (
              <Image
                key={bannerNews.id}
                style={styles.bannerImage}
                source={{uri: bannerNews.imageUrl}}
              />
            ))}
          </ScrollView>
        )}
        keyExtractor={(item, index) => item.u_id.toString()}
        data={newsData}
        renderItem={newsRender}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 50,
  },
  bannerImage: {
    height: windowHeight * 0.2,
    width: windowWidth * 0.5,
  },
});

export default App;
