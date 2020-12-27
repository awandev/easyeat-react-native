import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import CategoryList from '../components/categoryList'
import CategoryListItem from '../components/categoryListItem'
import Fullscreen from '../components/fullscreen'
import PopularEatriesList from '../components/popularEatriesList'
import SearchBar from '../components/searchBar'
import TopNavigation from '../components/topNavigation'
import TrendingList from '../components/trendingList'

export default function Home() {
    return (
        <Fullscreen>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentInsetAdjustmentBehavior="automatic">
                <TopNavigation />

                <SearchBar />

                <CategoryList />

                <PopularEatriesList />

                <TrendingList />
            </ScrollView>
        </Fullscreen>
    );
}