/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import TopNavigation from './src/components/topNavigation'
import SearchBar from './src/components/searchBar'
import CategoryListItem from './src/components/categoryListItem';
import CategoryList from './src/components/categoryList';
import SectionHeader from './src/components/sectionHeader';
import PopularPlaceItem from './src/components/popularPlaceItem';
import PopularEatriesList from './src/components/popularEatriesList';
import TrendingList from './src/components/trendingList';

const App = () => {
  return (
    <>
      <StatusBar hidden />
      <SafeAreaView style={styles.fullscreen}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentInsetAdjustmentBehavior="automatic"
        >
          <TopNavigation />
          <SearchBar />
          <CategoryList />
          <PopularEatriesList />
          <TrendingList />

        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  fullscreen: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff'
  }
});


export default App;
