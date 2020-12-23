import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { H1, P } from './typography'
import Icon from 'react-native-vector-icons/Ionicons'

import Avatar from './avatar'
import SearchBar from './searchBar'

export default function topNavigation() {
    return (
        <View style={styles.container}>
            <View>
                <H1>Hello, Awal</H1>
                <TouchableOpacity activeOpacity={0.5} style={styles.locationContainer}>
                    <P style={styles.locationText}>Makassar, Indonesia</P>
                    <Icon name="chevron-down" size={20} color="#6f9e76" />
                </TouchableOpacity>
            </View>

            <Avatar isOnline />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 24,
        paddingTop: 24,
        justifyContent: 'space-between',
    },

    leftNav: {
        flex: 1,
    },

    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    locationText: {
        color: '#a2a2a2',
        marginEnd: 8,
    }
})
