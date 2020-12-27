import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import HorizontalList from './horizontalList'
import { popularEatries } from '../commons/models'
import PopularPlaceItem from './popularPlaceItem'
import SectionHeader from './sectionHeader'

export default function PopularEatriesList() {

    const renderItem = ({ item }) => <PopularPlaceItem {...item} />


    return (
        <>
            <SectionHeader title="Popular Eatries" />
            <HorizontalList
                style={styles.listStyle}
                data={popularEatries}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </>
    )
}

const styles = StyleSheet.create({
    listStyle: {
        marginTop: 16,
    }
})