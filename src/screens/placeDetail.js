import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Fullscreen from '../components/fullscreen'
import PlaceDetailHeader from '../components/placeDetailHeader'

export default function PlaceDetail() {
    return (
        <Fullscreen>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentInsetAdjustmentBehavior="automatic"
            >
                <PlaceDetailHeader />
            </ScrollView>
        </Fullscreen>
    )
}

const styles = StyleSheet.create({})
