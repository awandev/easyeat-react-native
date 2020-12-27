import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { trendingBrands } from '../commons/models'
import HorizontalList from './horizontalList'
import SectionHeader from './sectionHeader'
import TrendingListItem from './trendingListItem'
export default function TrendingList() {


    const renderItem = ({ item }) => <TrendingListItem {...item} />


    return (


        <View style={styles.container}>
            <SectionHeader title="Trending List" />
            <HorizontalList
                keyExtractor={(item) => item.id}
                data={trendingBrands}
                renderItem={renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 24,
    }
})
