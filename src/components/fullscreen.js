import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

export default function Fullscreen(props) {
    return (
        <SafeAreaView style={styles.fullscreen} {...props} />
    )
}

const styles = StyleSheet.create({
    fullscreen: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff'
    }
})
