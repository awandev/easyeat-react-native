import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Fullscreen from '../components/fullscreen'
import PlaceDetailHeader from '../components/placeDetailHeader'
import PlaceInfo from '../components/placeInfo'
import PlacePaging from '../components/placePaging'

export default function PlaceDetail() {
    return (
        <Fullscreen>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentInsetAdjustmentBehavior="automatic"
            >
                <PlaceDetailHeader />

                <PlaceInfo />

                {/* place content going here */}
                <PlacePaging />
            </ScrollView>
        </Fullscreen>
    )
}

const styles = StyleSheet.create({})
