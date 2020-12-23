import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function avatar({ isOnline }) {

    const indicatorStyle = isOnline ? { ...styles.onlineIndicator, ...styles.online } : styles.onlineIndicator;

    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.5}>
                <Image style={styles.avatar} resizeMode="contain" source={{ uri: 'https://randomuser.me/api/portraits/men/21.jpg' }} />
            </TouchableOpacity>
            <View style={indicatorStyle} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 40,
        height: 40,
        position: 'relative',
    },
    avatar: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    onlineIndicator: {
        width: 16,
        height: 16,
        backgroundColor: '#a2a2a2',
        color: '#ffffff',
        borderRadius: 20,
        position: 'absolute',
        top: -5,
        right: -5,
        borderWidth: 3,
        borderColor: '#ffffff',
    },
    online: {
        backgroundColor: '#56b365'
    }
})
