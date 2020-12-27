import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { H4, P } from './typography'
export default function SectionHeader() {
    return (
        <View style={styles.container}>
            <H4 style={styles.titleText}>popular Section</H4>
            <TouchableOpacity>
                <P style={styles.linkText}>View all</P>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
    },

    titleText: {
        textTransform: 'capitalize',
    },
    linkText: {
        color: '#34807d',
    }


})