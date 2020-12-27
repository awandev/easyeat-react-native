import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Carousel from './carousel'
import HeaderMenu from './headerMenu'

export default function PlaceDetailHeader() {
    return (
        <View style={styles.container}>
            <HeaderMenu />

            <Carousel />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 300,
        backgroundColor: '#eee',
        position: 'relative'
    }
})
